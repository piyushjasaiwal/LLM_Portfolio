'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()
  const items = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'My Personal Projects' },
    { href: '/contact', label: 'How To Reach Me' }
  ]

  return (
    <nav className="w-full border-b bg-white">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-lg">
          Piyush
        </Link>
        <div className="flex items-center gap-4">
          {items.map(i => (
            <Link
              key={i.href}
              href={i.href}
              className={`text-sm px-3 py-2 rounded-md ${path === i.href ? 'bg-[var(--accent)] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
