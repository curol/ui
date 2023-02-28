interface SiteConfig {
  name: string
  description: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "curol/ui",
  description:
    "React components built with Radix UI and Tailwind CSS.",
  links: {
    twitter: "https://twitter.com/curoldev",
    github: "https://github.com/curol/ui",
  },
}
