'use client'

import { useId } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

import SafezoneHomeScreen from '@/images/SafezoneHomeScreen.png'

import {
  AlertTriangle,
  MapPin,
  Users,
  Brain,
  Book,
  ArrowRight,
} from 'lucide-react'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  const id = useId()

  return (
    <div {...props} className="relative h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-pulse"
      >
        {/* Main circle */}
        <circle
          cx="513"
          cy="513"
          r="512"
          stroke="url(#circleGradient)"
          strokeWidth="2"
          fill="none"
        />

        {/* Apple-inspired shapes */}
        <path
          d="M513 100C734.543 100 915 280.457 915 502C915 723.543 734.543 904 513 904"
          stroke="url(#appleGradient1)"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-spin-slow"
        />
        <path
          d="M513 200C679.731 200 815 335.269 815 502C815 668.731 679.731 804 513 804"
          stroke="url(#appleGradient2)"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-spin-reverse-slower"
        />

        {/* Colorful blobs */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="url(#blob1)"
          className="animate-float"
        />
        <circle
          cx="826"
          cy="826"
          r="100"
          fill="url(#blob2)"
          className="animate-float-reverse"
        />

        <defs>
          {/* Gradients */}
          <linearGradient
            id="circleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF9500" />
            <stop offset="50%" stopColor="#FF2D55" />
            <stop offset="100%" stopColor="#AF52DE" />
          </linearGradient>
          <linearGradient id="appleGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5AC8FA" />
            <stop offset="100%" stopColor="#007AFF" />
          </linearGradient>
          <linearGradient id="appleGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF2D55" />
            <stop offset="100%" stopColor="#FF3B30" />
          </linearGradient>
          <radialGradient
            id="blob1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(200 200) rotate(45) scale(100)"
          >
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#34C759" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="blob2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(826 826) rotate(45) scale(100)"
          >
            <stop stopColor="#5856D6" />
            <stop offset="1" stopColor="#5856D6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
        fill="#4CAF50"
      />
    </svg>
  )
}

const FeatureItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <p className="text-gray-700">{text}</p>
  </div>
)

const ComingSoonButton = () => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg"
    href="/stay-updated"
  >
    <span>Coming Soon</span>
    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
  </motion.a>
)

export const Hero = () => {
  return (
    <div className="overflow-hidden bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">
              Your personal safety companion.
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              #SafeZone empowers you to take control of your personal safety.
              With instant incident reporting, real-time alerts, and a 24/7
              Companion Call, you're never alone in staying secure.
            </p>
            <div className="space-y-4">
              <FeatureItem
                icon={<AlertTriangle className="h-6 w-6 text-red-500" />}
                text="Detailed incident reporting"
              />
              <FeatureItem
                icon={<MapPin className="h-6 w-6 text-blue-500" />}
                text="Location-based safety services"
              />
              <FeatureItem
                icon={<Users className="h-6 w-6 text-green-500" />}
                text="Emergency contacts management"
              />
              <FeatureItem
                icon={<Brain className="h-6 w-6 text-purple-500" />}
                text="AI Companion for 24/7 support"
              />
              <FeatureItem
                icon={<Book className="h-6 w-6 text-orange-500" />}
                text="Comprehensive safety resources"
              />
            </div>
            <div className="mt-10">
              <ComingSoonButton />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <motion.div
              className="absolute rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 p-2 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-[calc(1.5rem-1px)] bg-white">
                <div className="p-8">
                  <Image
                    src={SafezoneHomeScreen}
                    alt="SafeZone app home screen"
                    className="rounded-xl shadow-md"
                    width={375}
                    height={812}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
