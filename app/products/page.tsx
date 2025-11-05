"use client"

import { useEffect } from "react"

export default function ProductsPage() {
  useEffect(() => {
    // Redirect to home
    window.location.href = "/"
  }, [])

  return null
}
