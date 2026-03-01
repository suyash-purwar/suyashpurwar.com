'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NoteTreeNode } from '@/lib/notes';

import './styles.css';

type NotesExplorerProps = {
  tree: NoteTreeNode[];
};

export default function NotesExplorer({ tree }: NotesExplorerProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="notes-explorer" id="notes-explorer">
      <button
        className="explorer-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="explorer-tree"
      >
        <span className="explorer-title">Explorer</span>
        <svg
          className={`explorer-chevron ${isOpen ? 'open' : ''}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <nav id="explorer-tree" className="explorer-tree" aria-label="Notes navigation">
          <ul className="tree-root" role="tree">
            {tree.map((node) => (
              <TreeItem key={node.name} node={node} level={0} />
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}

type TreeItemProps = {
  node: NoteTreeNode;
  level: number;
};

function TreeItem({ node, level }: TreeItemProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(() => {
    // Auto-expand folders that contain the active note
    if (node.type === 'folder') {
      const nodePath = '/notes/' + node.slug.join('/');
      return pathname.startsWith(nodePath);
    }
    return false;
  });

  const href = '/notes/' + node.slug.map(encodeURIComponent).join('/');
  const isActive = pathname === href;

  if (node.type === 'file') {
    return (
      <li className="tree-item" role="treeitem" style={{ paddingLeft: `${level * 16 + 8}px` }}>
        <Link
          href={href}
          className={`tree-link ${isActive ? 'active' : ''}`}
          aria-current={isActive ? 'page' : undefined}
        >
          <span className="tree-label">{node.title || node.name}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="tree-item" role="treeitem" aria-expanded={isExpanded} style={{ paddingLeft: `${level * 16 + 8}px` }}>
      <button
        className="tree-folder"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${node.name}`}
      >
        <svg
          className={`folder-chevron ${isExpanded ? 'open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="tree-label">{node.name}</span>
      </button>

      {isExpanded && node.children && (
        <ul className="tree-children" role="group">
          {node.children.map((child) => (
            <TreeItem key={child.name} node={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
