'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, MapPin, Phone, Bot, Book, X, Loader2 } from 'lucide-react'

const SafeZoneSupport = () => {
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null,
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    try {
      const API_URL = 'https://safezoneapi-768362579861.us-east1.run.app'
      const response = await fetch(`${API_URL}/contact_support`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      console.log('Form submitted:', { name, email, message })
      setSubmitStatus('success')
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8 font-sans">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-4xl font-bold text-transparent">
          Welcome to #SafeZone Support
        </h1>

        <p className="mb-8 text-center text-lg text-gray-700">
          Your personal safety hub, always by your side.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FeatureCard
            icon={<AlertCircle className="h-8 w-8 text-red-500" />}
            title="Report Incidents"
            description="Easily report incidents with detailed information to ensure swift and appropriate responses."
          />
          <FeatureCard
            icon={<MapPin className="h-8 w-8 text-green-500" />}
            title="Location Services"
            description="Utilize precise location services for accurate incident reporting and faster assistance."
          />
          <FeatureCard
            icon={<Phone className="h-8 w-8 text-blue-500" />}
            title="Emergency Contacts"
            description="Quick access to your emergency contacts when you need them most."
          />
          <FeatureCard
            icon={<Bot className="h-8 w-8 text-purple-500" />}
            title="AI Companion"
            description="24/7 AI-powered support to guide you through any situation."
          />
          <FeatureCard
            icon={<Book className="h-8 w-8 text-yellow-500" />}
            title="Safety Resources"
            description="Access a comprehensive library of safety resources and guides at your fingertips."
          />
        </div>

        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Need More Help?
          </h2>
          <p className="mb-4 text-gray-700">
            Our support team is here for you 24/7.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:from-blue-600 hover:to-purple-600"
            onClick={() => setShowForm(true)}
          >
            Contact Support
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
            >
              <button
                onClick={() => {
                  setShowForm(false)
                  setSubmitStatus(null)
                }}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Contact Support
              </h3>
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="mb-4 text-lg font-semibold text-green-600">
                    Thank you for contacting us! We'll get back to you soon.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowForm(false)
                      setSubmitStatus(null)
                    }}
                    className="rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 font-bold text-white shadow-lg transition duration-300 hover:from-green-600 hover:to-green-700"
                  >
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  {submitStatus === 'error' && (
                    <p className="text-sm text-red-600">
                      There was an error submitting your message. Please try
                      again.
                    </p>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white shadow-lg transition duration-300 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="mx-auto h-5 w-5 animate-spin" />
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl"
    >
      <div className="mb-4 flex items-center">
        {icon}
        <h3 className="ml-2 text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default SafeZoneSupport
