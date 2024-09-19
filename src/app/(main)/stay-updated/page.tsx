'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  ArrowRight,
  Loader,
  AlertTriangle,
  MapPin,
  Phone,
  Brain,
  Shield,
} from 'lucide-react'
import Head from 'next/head'

const StayUpdatedPage = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const API_URL = 'https://safezoneapi-768362579861.us-east1.run.app'
      const response = await fetch(`${API_URL}/stay_updated`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      console.log('Email submitted:', email)
      setIsSubmitted(true)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>
          Be First to Experience #SafeZone | Redefining Personal Safety
        </title>
        <meta
          name="description"
          content="Join the #SafeZone revolution. Be among the first to experience a new era of personal safety technology. Sign up for exclusive updates and priority access."
        />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg space-y-8 rounded-3xl bg-white p-10 shadow-xl"
        >
          <div>
            <h1 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Experience
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {' '}
                #SafeZone{' '}
              </span>
              First
            </h1>
            <p className="mt-2 text-center text-lg text-gray-600">
              Join the #SafeZone Alpha Program to be among the first to
              experience a new era of personal safety technology.
            </p>
          </div>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {isLoading ? (
                      <Loader className="h-5 w-5 animate-spin text-white" />
                    ) : (
                      <Mail className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" />
                    )}
                  </span>
                  {isLoading ? 'Submitting...' : 'Keep Me Updated'}
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                Thank you!
              </h2>
              <p className="text-gray-600">
                You're now on the list to experience #SafeZone first-hand.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why Use #SafeZone?
          </h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-center">
              <AlertTriangle className="mr-3 h-6 w-6 text-red-500" />
              <span>Report incidents with detailed information</span>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-3 h-6 w-6 text-blue-500" />
              <span>Use location services for precise reporting</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 h-6 w-6 text-green-500" />
              <span>Quick access to emergency contacts</span>
            </li>
            <li className="flex items-center">
              <Brain className="mr-3 h-6 w-6 text-purple-500" />
              <span>AI-powered companionship for 24/7 support</span>
            </li>
            <li className="flex items-center">
              <Shield className="mr-3 h-6 w-6 text-orange-500" />
              <span>Comprehensive safety resources at your fingertips</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  )
}

export default StayUpdatedPage
