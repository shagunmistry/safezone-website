import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-safezone-today"
      className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 py-20 sm:py-28"
    >
      <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <CircleBackground
          color="url(#gradient-radial)"
          className="animate-pulse"
        />
        <svg width="0" height="0">
          <radialGradient id="gradient-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </svg>
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
            Stay Safe with #SafeZone Today
          </h2>
          <p className="mt-4 text-lg text-white text-opacity-90 drop-shadow">
            It takes just 30 seconds to sign up. Download the app and create an
            account today, and we'll help you stay secure wherever you go.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreLink className="transform transition duration-300 ease-in-out hover:scale-105" />
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
