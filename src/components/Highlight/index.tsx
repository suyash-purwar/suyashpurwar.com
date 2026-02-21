export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-primary font-medium">
      {children}
    </span>
  )
}