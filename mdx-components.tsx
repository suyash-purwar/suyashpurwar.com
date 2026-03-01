import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-3xl font-semibold sm:text-4xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-6 mb-4 text-2xl font-semibold sm:text-3xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h2
        className="mt-6 mb-4 text-xl font-semibold sm:text-2xl"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mb-4 text-base/7" {...props} />
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
      <code className="rounded px-1 py-0.5 text-sm" {...props} />
    ),
    pre: (props) => (
      <pre className="mb-4 overflow-x-auto rounded bg-neutral-900 p-4 text-sm text-neutral-50" {...props} />
    ),
    ...components,
  }
}

