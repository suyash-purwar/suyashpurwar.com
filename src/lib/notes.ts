import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ComponentType } from 'react';

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');

/**
 * Convert a filesystem name to a URL-safe slug.
 * Replaces spaces with hyphens and collapses consecutive hyphens.
 */
function slugify(name: string): string {
  return name
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export type NoteTreeNode = {
  name: string;
  type: 'folder' | 'file';
  slug: string[];
  pathParts: string[];
  children?: NoteTreeNode[];
  title?: string;
};

export type NoteModule = {
  default: ComponentType;
  frontmatter: {
    title: string;
    [key: string]: unknown;
  };
};

/**
 * Recursively builds a tree of notes from the filesystem.
 */
export function getNotesTree(
  dir: string = NOTES_DIR,
  slugPrefix: string[] = [],
  pathPrefix: string[] = [],
): NoteTreeNode[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: NoteTreeNode[] = [];

  // Sort: folders first, then files. Alphabetical within each group.
  const sorted = [...entries].sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name, undefined, { numeric: true });
  });

  for (const entry of sorted) {
    if (entry.name.startsWith('.')) continue;

    if (entry.isDirectory()) {
      const childSlug = [...slugPrefix, slugify(entry.name)];
      const childPath = [...pathPrefix, entry.name];
      const children = getNotesTree(path.join(dir, entry.name), childSlug, childPath);
      nodes.push({
        name: entry.name,
        type: 'folder',
        slug: childSlug,
        pathParts: childPath,
        children,
      });
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      const baseName = entry.name.replace(/\.(md|mdx)$/, '');
      const fileSlug = [...slugPrefix, slugify(baseName)];
      const filePath = [...pathPrefix, baseName];

      const fullPath = path.join(dir, entry.name);
      const raw = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(raw);

      nodes.push({
        name: baseName,
        type: 'file',
        slug: fileSlug,
        pathParts: filePath,
        title: (data.title as string) || baseName,
      });
    }
  }

  return nodes;
}

export function getAllNoteSlugs(nodes?: NoteTreeNode[]): string[][] {
  const tree = nodes ?? getNotesTree();
  const slugs: string[][] = [];

  for (const node of tree) {
    if (node.type === 'file') {
      slugs.push(node.slug);
    } else if (node.children) {
      slugs.push(...getAllNoteSlugs(node.children));
    }
  }

  return slugs;
}

/**
 * Build a map from slugified path to original filesystem path.
 */
function buildSlugToPathMap(nodes?: NoteTreeNode[]): Map<string, string> {
  const tree = nodes ?? getNotesTree();
  const map = new Map<string, string>();

  function walk(nodes: NoteTreeNode[]) {
    for (const node of nodes) {
      if (node.type === 'file') {
        map.set(node.slug.join('/'), node.pathParts.join('/'));
      } else if (node.children) {
        walk(node.children);
      }
    }
  }

  walk(tree);
  return map;
}

export async function getNoteModule(slugParts: string[]): Promise<NoteModule> {
  const slugToPath = buildSlugToPathMap();
  const slugKey = slugParts.join('/');
  const relativePath = slugToPath.get(slugKey) ?? slugKey;
  const mod = await import(`../../content/notes/${relativePath}.mdx`);
  return mod as NoteModule;
}

export function noteExists(slugParts: string[]): boolean {
  const slugToPath = buildSlugToPathMap();
  const slugKey = slugParts.join('/');
  const relativePath = slugToPath.get(slugKey) ?? slugKey;
  const mdxPath = path.join(NOTES_DIR, `${relativePath}.mdx`);
  const mdPath = path.join(NOTES_DIR, `${relativePath}.md`);
  return fs.existsSync(mdxPath) || fs.existsSync(mdPath);
}
