export default function FormattedDate({ date }: { date: string }) {
  if (!date) return;

  return (
    <time dateTime={date}>
      {new Date(date).toLocaleDateString(
        "en-IN",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}
    </time>
  )
}