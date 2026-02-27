import Image from "next/image";
import Link from "next/link";

import type { LogoProps } from "./type";

export default function Logo({ segment, segmentLink }: LogoProps) {
	const shouldShowSegment = segment && segmentLink;

	return (
		<div className="flex items-center gap-2" >
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="Suyash Purwar's Portfolio"
					width={80}
					height={80}
				/>
			</Link>
			{shouldShowSegment && (
				<span className="text-secondary font-semibold" >
					/ <Link href={segmentLink}>{segment}</Link>
				</span>
			)}
		</div>
	);
}