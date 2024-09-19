import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section
      id="get-safezone-today"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stay Safe with #SafeZone Today
          </h2>
          <p className="mt-4 text-lg text-opacity-90">
            It takes just 30 seconds to sign up. Download the app and create an
            account today, and we'll help you stay secure wherever you go.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              className="group inline-flex transform cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-md ease-in-out hover:scale-125 hover:shadow-lg"
              href="/stay-updated"
            >
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
