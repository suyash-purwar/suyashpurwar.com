import { Raleway, Merriweather } from 'next/font/google';

import Footer from '@/components/base/Footer';
import Navigation from '@/components/base/Navigation';

import "@/app/globals.css";

const primaryFont = Raleway({
  subsets: ['latin'],
  variable: '--primary-font',
});

const secondaryFont = Merriweather({
  subsets: ['latin'],
  variable: '--secondary-font',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col max-w-4xl p-6 my-0 mx-auto lg:p-0">
          <Navigation />

          <main className="flex-1">
            {children}
          </main>

          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
