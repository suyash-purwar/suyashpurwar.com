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
        {children}
      </body>
    </html>
  );
}
