'use client'

import { useState, useCallback } from 'react';

import NotesExplorer from '@/components/NotesExplorer';
import type { NoteTreeNode } from '@/lib/notes';

import './styles.css';

type NotesLayoutClientProps = {
  tree: NoteTreeNode[];
  children: React.ReactNode;
};

export default function NotesLayoutClient({ tree, children }: NotesLayoutClientProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileClose = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      <button
        className="mobile-explorer-trigger mt-6"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open notes explorer"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1.5 2.5h5l1.5 2H14.5v9h-13v-11z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Explorer</span>
        <svg
          className="mobile-explorer-chevron"
          width="14"
          height="14"
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

      <div className="notes-layout mt-6 lg:mt-0">
        {isMobileOpen && (
          <div
            className="mobile-explorer-backdrop"
            onClick={handleMobileClose}
            aria-hidden="true"
          />
        )}

        <NotesExplorer
          tree={tree}
          isMobileOpen={isMobileOpen}
          onMobileClose={handleMobileClose}
        />

        <main className="notes-main">
          {children}
        </main>
      </div>
    </>
  );
}
