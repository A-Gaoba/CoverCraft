"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { FileText } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <FileText className="h-5 w-5" />
          <span>CoverCraft</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${pathname === "/" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
          >
            Home
          </Link>
          <Link
            href="/create"
            className={`text-sm font-medium ${pathname === "/create" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
          >
            Create
          </Link>
          <Link
            href="/examples"
            className={`text-sm font-medium ${pathname === "/examples" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
          >
            Examples
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

