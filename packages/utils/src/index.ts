// URL
export { toSlug } from "./toSlug"
export { cn } from "./cn"

// DATE
export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

// Class Variance Authority
export { cva, cx } from "class-variance-authority"

// Types
export * from './types'

