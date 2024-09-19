import React from 'react'
import { AlertCircle, MapPin, Phone, Bot, Book } from 'lucide-react'

const SafeZoneSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
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
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white transition duration-300 hover:from-blue-600 hover:to-purple-600">
            Contact Support
          </button>
        </div>
      </div>
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
    <div className="rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl">
      <div className="mb-4 flex items-center">
        {icon}
        <h3 className="ml-2 text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default SafeZoneSupport
