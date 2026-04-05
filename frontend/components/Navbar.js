'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()
  const items = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Personal Projects' },
    {
      href: 'https://drive.google.com/file/d/173DfvGKsehda89LeBkRcVqQ3gd2biKNT/view?usp=sharing',
      label: 'Resume',
      external: true
    },
    { href: '/engineering_hub', label: 'Engineering Hub' },
    { href: '/contact', label: 'How To Reach Me' }
  ]

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex items-center justify-around px-4 py-4">
        <Link href="/" className="font-semibold text-lg">
          Piyush Jasaiwal
        </Link>
        <div className="flex items-center gap-4">
          {items.map(i =>
            i.external ? (
              <a
                key={i.href}
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {i.label}
              </a>
            ) : (
              <Link
                key={i.href}
                href={i.href}
                className={`text-sm px-3 py-2 rounded-md ${
                  path === i.href
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {i.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  )
}
