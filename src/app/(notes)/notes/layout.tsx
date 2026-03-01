import { Raleway, Merriweather } from 'next/font/google';

import NotesExplorer from '@/components/NotesExplorer';
import { getNotesTree } from '@/lib/notes';

import "@/app/globals.css";
import "./notes.css";

const primaryFont = Raleway({
  subsets: ['latin'],
  variable: '--primary-font',
});

const secondaryFont = Merriweather({
  subsets: ['latin'],
  variable: '--secondary-font',
});

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tree = getNotesTree();

  return (
    <html lang="en" className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col max-w-6xl p-6 my-0 mx-auto lg:p-0">
          <div className="notes-layout">
            <NotesExplorer tree={tree} />

            <main className="notes-main">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
