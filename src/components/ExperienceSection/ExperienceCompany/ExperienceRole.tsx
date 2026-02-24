import type { ExperienceRole as ExperienceRoleType } from "@/components/ExperienceSection/type";

type ExperienceRoleProps = ExperienceRoleType;

export default function ExperienceRole({ title, dateRange, highlights }: ExperienceRoleProps) {
  return (
    <div className="sm:flex sm:gap-4">
      <span
        className="hidden sm:block sm:mt-2 sm:h-2 sm:w-2 sm:shrink-0 sm:rounded-full sm:bg-secondary"
        aria-hidden
      />

      <div className="min-w-0 sm:flex-1">
        <h4 className="font-medium text-secondary md:text-lg">{title}</h4>
        <p className="mt-1 text-sm font-light text-gray-600">{dateRange}</p>

        <ul className="mt-2 list-inside list-disc space-y-2 font-light text-secondary sm:list-outside sm:space-y-3 sm:pl-8">
          {highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

