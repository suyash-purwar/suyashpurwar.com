import Image from "next/image";
import Link from "next/link";

type LogoProps = {
	alt: string;
	segment?: string;
	segmentLink?: string;
}

export default function Logo({ alt, segment, segmentLink }: LogoProps) {
	const shouldShowSegment = segment && segmentLink;

	return (
		<div className="flex items-center gap-2" >
			<Link href="/">
				<Image
					src="/logo.svg"
					alt={alt}
					width={80}
					height={80}
				/>
			</Link>
			{shouldShowSegment && (
				<span className="text-gray-600 text-base font-bold" >
					/ <Link href={segmentLink}>{segment}</Link>
				</span>
			)}
		</div>
	);
}