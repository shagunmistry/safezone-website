import React from 'react'
import { ArrowRight, Clock, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500">
                <span className="text-xl font-bold text-white">#</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  #SafeZone
                </h3>
                <p className="text-sm text-gray-600">
                  Stay safe, stay connected.
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-6">
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/privacy-policy">Privacy Policy</NavLink>
              {/* <NavLink href="/#pricing">Pricing</NavLink> */}
              {/* <NavLink href="/#faqs">FAQs</NavLink> */}
            </nav>
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-gray-900">Coming Soon</h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-3 text-blue-500">
                <Clock size={24} />
              </div>
              <p className="mt-3 text-gray-600">
                We're working hard to bring you the #SafeZone app. It will be
                available for download very soon on both iOS and Android
                platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} #SafeZone. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <SocialLink href="#" icon="facebook" />
            <SocialLink href="#" icon="twitter" />
            <SocialLink href="#" icon="instagram" />
          </div>
        </div>
      </div>
    </footer>
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
    className="text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
  >
    {children}
  </a>
)

const AppStoreButton = () => (
  <a
    href="#"
    className="inline-flex items-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-gray-800"
  >
    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" />
    </svg>
    App Store
  </a>
)

const GooglePlayButton = () => (
  <a
    href="#"
    className="inline-flex items-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-gray-800"
  >
    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" />
    </svg>
    Google Play
  </a>
)

const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
  <a
    href={href}
    className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
  >
    <span className="sr-only">{icon}</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      {icon === 'facebook' && (
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      )}
      {icon === 'twitter' && (
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      )}
      {icon === 'instagram' && (
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
      )}
    </svg>
  </a>
)

export default Footer
