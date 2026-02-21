import { Raleway, Merriweather_Sans } from 'next/font/google';

import "@/app/globals.css";

const primaryFont = Raleway({
  subsets: ['latin'],
  variable: '--primary-font',
});

const secondaryFont = Merriweather_Sans({
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
        <div className="max-w-4xl p-6 my-0 mx-auto lg:p-0">
          {children}
        </div>
      </body>
    </html>
  );
}
