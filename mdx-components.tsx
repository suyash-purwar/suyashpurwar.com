import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-xl mb-4 mt-8 font-semibold"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-6 mb-4 text-lg font-semibold"
        {...props}
      />
    ),
    h3: (props) => (
      <h2
        className="mt-6 mb-4 text-md font-semibold"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mb-2" {...props} />
    ),
    a: (props) => (
      <a
        className="text-blue-600 underline-offset-2 hover:underline"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="mb-4 list-disc space-y-1 pl-6" {...props} />
    ),
    ol: (props) => (
      <ol className="mb-4 list-decimal space-y-1 pl-6" {...props} />
    ),
    code: (props) => (
      <code className="rounded px-1 py-0.5" {...props} />
    ),
    pre: (props) => (
      <pre className="mb-4 overflow-x-auto rounded bg-neutral-900 p-4 text-sm text-neutral-50" {...props} />
    ),
    table: (props) => (
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props} />
      </div>
    ),
    thead: (props) => (
      <thead className="border-b-2 border-[var(--quaternary-color)]" {...props} />
    ),
    th: (props) => (
      <th className="px-4 py-2 text-left font-semibold" {...props} />
    ),
    td: (props) => (
      <td className="border-b border-[var(--quaternary-color)] px-4 py-2" {...props} />
    ),
    ...components,
  }
}

