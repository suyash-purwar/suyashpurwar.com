'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

import Logo from "@/components/base/Logo";

export default function Navigation() {
	const pathname = usePathname();
	const section = pathname.split('/')[1];

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
					<Logo segment={segment} segmentLink={segmentLink} />
				</div>
				<div className="flex flex-wrap items-center gap-4 sm:gap-15">
					<Link href="/articles">articles</Link>
					<Link href="/#projects">projects</Link>
					<Link href="/#experience">experience</Link>
					<Link href="/notes">notes</Link>
				</div>
			</div>
		</nav>
	);
}