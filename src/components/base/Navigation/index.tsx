'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

import Logo from "@/components/base/Logo";

export default function Navigation() {
  const pathname = usePathname();
  const section = pathname.split('/')[1];

  const navigationItems = [
    { href: '/', label: 'home', active: pathname === '/' },
    { href: '/articles', label: 'articles', active: section === 'articles' },
    { href: '/notes', label: 'notes', active: section === 'notes' },
  ];

  let segment;
  let segmentLink;

  switch (section) {
    case 'articles': {
      segment = 'articles';
      segmentLink = '/articles';
      break;
    }
    case 'notes': {
      segment = 'notes';
      segmentLink = '/notes';
      break;
    }
  };

  return (
    <nav className="relative">
      <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:py-8">
        <div>
          <Logo />
        </div>
        {true && (
          <div className="flex flex-wrap items-center gap-4 sm:gap-15">
            {navigationItems.map(({ href, label, active }) => (
              <Link
                key={href}
                href={href}
                className={active ? 'font-medium underline decoration-wavy underline-offset-4' : 'opacity-70 hover:opacity-100'}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}