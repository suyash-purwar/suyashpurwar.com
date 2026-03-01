import Link from 'next/link';
import { getNotesTree } from '@/lib/notes';
import type { NoteTreeNode } from '@/lib/notes';

export default function NotesPage() {
  const tree = getNotesTree();

  return (
    <div className="notes-landing">
      <h1 className="notes-landing-title">Notes</h1>
      <p className="notes-landing-desc">
        Rough technical notes I jot down as I learn. Use the explorer on the left to browse through topics, or pick a category below.
      </p>

      <div className="notes-categories">
        {tree.map((node) => (
          <CategoryCard key={node.name} node={node} />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ node }: { node: NoteTreeNode }) {
  const noteCount = countNotes(node);
  const href = node.type === 'file'
    ? `/notes/${node.slug.map(encodeURIComponent).join('/')}`
    : `/notes/${node.slug.map(encodeURIComponent).join('/')}/${getFirstFileSlug(node)}`;

  // For folders, just show the category name and count
  if (node.type === 'folder') {
    const firstFile = findFirstFile(node);
    const link = firstFile
      ? `/notes/${firstFile.slug.map(encodeURIComponent).join('/')}`
      : '#';

    return (
      <Link href={link} className="category-card">
        <span className="category-name">{node.name}</span>
        <span className="category-count">{noteCount} {noteCount === 1 ? 'note' : 'notes'}</span>
      </Link>
    );
  }

  return (
    <Link href={href} className="category-card">
      <span className="category-name">{node.title || node.name}</span>
    </Link>
  );
}

function countNotes(node: NoteTreeNode): number {
  if (node.type === 'file') return 1;
  return (node.children ?? []).reduce((sum, child) => sum + countNotes(child), 0);
}

function findFirstFile(node: NoteTreeNode): NoteTreeNode | null {
  if (node.type === 'file') return node;
  for (const child of node.children ?? []) {
    const found = findFirstFile(child);
    if (found) return found;
  }
  return null;
}

function getFirstFileSlug(node: NoteTreeNode): string {
  const file = findFirstFile(node);
  return file ? file.slug[file.slug.length - 1] : '';
}