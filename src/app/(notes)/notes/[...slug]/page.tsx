import { notFound } from 'next/navigation';

import { getNoteModule, getAllNoteSlugs, noteExists } from '@/lib/notes';

type NotePageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const slugs = getAllNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;

  if (!noteExists(slug)) {
    notFound();
  }

  try {
    const mod = await getNoteModule(slug);
    const NoteContent = mod.default;
    const { frontmatter } = mod;

    if (!NoteContent) {
      notFound();
    }

    return (
      <article className="note-content">
        <header className="note-header">
          <h1 className="note-title">{frontmatter?.title || slug[slug.length - 1]}</h1>
        </header>

        <div className="note-body">
          <NoteContent />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
