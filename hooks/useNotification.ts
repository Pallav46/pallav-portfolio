"use client"

import { useCallback } from "react"

type NotificationType = "success" | "error" | "info"

export const useNotification = () => {
  const showNotification = useCallback((message: string, type: NotificationType = "info") => {
    const notification = document.createElement("div")
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg text-white transform translate-x-full transition-transform duration-300 ${
      type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"
    }`
    notification.textContent = message

    document.body.appendChild(notification)

    // Slide in
    setTimeout(() => {
      notification.classList.remove("translate-x-full")
    }, 100)

    // Slide out and remove
    setTimeout(() => {
      notification.classList.add("translate-x-full")
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }, [])

  return { showNotification }
}
