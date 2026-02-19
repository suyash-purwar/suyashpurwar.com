export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1>From Blog Root</h1>
            {children}
        </div>
    );
}
