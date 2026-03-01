import FormattedDate from "@/components/base/FormattedDate"

type ArticleInfoProps = {
  date: string;
  duration: string;
}

export default function ArticleInfo({ date, duration }: ArticleInfoProps) {
  return (
    <div className="flex items-center text-secondary font-light text-sm mt-2">
      <FormattedDate date={date} />
      <span
        className="mx-2 h-1 w-1 shrink-0 rounded-full bg-secondary md:mx-4"
        aria-hidden
      />
      <p>{duration}</p>
    </div>
  )
}