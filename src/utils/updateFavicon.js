// Function to update favicon dynamically
export function updateFavicon() {
  const faviconURL = import.meta.env.VITE_FAVICON // Get from .env
  if (!faviconURL) return

  let link = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement("link")
    link.rel = "icon"
    document.head.appendChild(link)
  }
  link.href = faviconURL
}