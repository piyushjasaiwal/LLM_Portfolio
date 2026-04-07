'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// Note: If you don't have lucide-react, you can install it 
// with: npm install lucide-react
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex items-center justify-between md:justify-around px-4 py-4">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          Piyush Jasaiwal
        </Link>

        {/* Hamburger Icon (Visible only on Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-4">
          {items.map(i => (
            <NavLink key={i.href} item={i} currentPath={path} />
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu (Visible only when toggled) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t flex flex-col px-4 py-4 space-y-2">
          {items.map(i => (
            <NavLink 
              key={i.href} 
              item={i} 
              currentPath={path} 
              onClick={() => setIsOpen(false)} 
            />
          ))}
        </div>
      )}
    </nav>
  )
}

// Helper component for the links
function NavLink({ item, currentPath, onClick }) {
  const className = `text-sm px-3 py-2 rounded-md block transition-colors ${
    currentPath === item.href
      ? 'bg-[var(--accent)] text-white'
      : 'text-gray-700 hover:bg-gray-100'
  }`

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {item.label}
      </a>
    )
  }

  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  )
}