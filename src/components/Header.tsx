'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-blur-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a
              href="/"
              className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-2xl font-semibold text-transparent"
            >
              #SafeZone
            </a>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <NavLink href="/#features">Features</NavLink>
            {/* <NavLink href="/#reviews">Reviews</NavLink>
            <NavLink href="/#pricing">Pricing</NavLink>
            <NavLink href="/#faqs">FAQs</NavLink> */}
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            {/* <Button variant="outline">Log in</Button> */}
            <Button>Stay Updated</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-b-2xl bg-white shadow-lg md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <MobileNavLink href="/#features">Features</MobileNavLink>
              <MobileNavLink href="/#reviews">Reviews</MobileNavLink>
              <MobileNavLink href="/#pricing">Pricing</MobileNavLink>
              <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
            </div>
            <div className="space-y-2 px-4 py-4">
              {/* <Button fullWidth variant="outline">
                Log in
              </Button> */}
              <Button fullWidth>Stay Updated</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-900"
  >
    {children}
  </a>
)

const MobileNavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
  >
    {children}
  </a>
)

const Button = ({
  children,
  variant = 'default',
  fullWidth = false,
}: {
  children: React.ReactNode
  variant?: 'default' | 'outline'
  fullWidth?: boolean
}) => (
  <Link
    className={` ${fullWidth ? 'w-full' : ''} ${
      variant === 'outline'
        ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
        : 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600'
    } rounded-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out`}
    href="/stay-updated"
  >
    {children}
  </Link>
)

export default Header
