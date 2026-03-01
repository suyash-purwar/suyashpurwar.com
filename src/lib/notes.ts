import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ComponentType } from 'react';

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');

export type NoteTreeNode = {
  name: string;
  type: 'folder' | 'file';
  slug: string[];
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
export function getNotesTree(dir: string = NOTES_DIR, slugPrefix: string[] = []): NoteTreeNode[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: NoteTreeNode[] = [];

  // Sort: folders first, then files. Alphabetical within each group.
  const sorted = [...entries].sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  for (const entry of sorted) {
    if (entry.name.startsWith('.')) continue;

    if (entry.isDirectory()) {
      const childSlug = [...slugPrefix, entry.name];
      const children = getNotesTree(path.join(dir, entry.name), childSlug);
      nodes.push({
        name: entry.name,
        type: 'folder',
        slug: childSlug,
        children,
      });
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      const baseName = entry.name.replace(/\.(md|mdx)$/, '');
      const fileSlug = [...slugPrefix, baseName];

      const filePath = path.join(dir, entry.name);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);

      nodes.push({
        name: baseName,
        type: 'file',
        slug: fileSlug,
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

export async function getNoteModule(slugParts: string[]): Promise<NoteModule> {
  const relativePath = slugParts.map((part) => decodeURIComponent(part)).join('/');
  const mod = await import(`../../content/notes/${relativePath}.mdx`);
  return mod as NoteModule;
}

export function noteExists(slugParts: string[]): boolean {
  const relativePath = slugParts.map((part) => decodeURIComponent(part)).join('/');
  const mdxPath = path.join(NOTES_DIR, `${relativePath}.mdx`);
  const mdPath = path.join(NOTES_DIR, `${relativePath}.md`);
  return fs.existsSync(mdxPath) || fs.existsSync(mdPath);
}
