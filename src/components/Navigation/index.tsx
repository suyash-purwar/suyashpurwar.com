import Link from "next/link";

import Logo from "@/components/Logo";

export default function Navigation() {
	return (
		<nav className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:py-8">
			<div>
				<Logo alt="Suyash's Portfolio Logo" />
			</div>
			<div className="flex flex-wrap items-center gap-4 text-gray-600 sm:gap-15">
				<Link href="/articles">articles</Link>
				<Link href="#projects">projects</Link>
				<Link href="#experience">experience</Link>
			</div>
		</nav>
	);
}