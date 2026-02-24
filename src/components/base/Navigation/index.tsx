import Link from "next/link";

import Logo from "@/components/base/Logo";

export default function Navigation() {
	return (
		<nav className="relative">
			<div className="w-full flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0 md:absolute lg:py-8">
				<div>
					<Logo alt="Suyash's Portfolio Logo" />
				</div>
				<div className="flex flex-wrap items-center gap-4 sm:gap-15">
					<Link href="/articles">articles</Link>
					<Link href="#projects">projects</Link>
					<Link href="#experience">experience</Link>
				</div>
			</div>
		</nav>
	);
}