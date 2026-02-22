type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="shrink-0 text-2xl font-light text-secondary md:text-4xl">
        {title}
      </h2>
      <span
        className="hidden h-0.5 min-w-8 flex-1 bg-primary md:block"
        aria-hidden
      />
    </div>
  );
}
