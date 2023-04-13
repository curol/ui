export function toAbsoluteUrl(url: string, path: string) {
  // Url: process.env.NEXT_PUBLIC_URL
  return `${url}${path}`
}

export default toAbsoluteUrl
