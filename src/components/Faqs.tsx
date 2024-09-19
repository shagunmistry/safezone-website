import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does #SafeZone protect my privacy?',
      answer:
        'We take your privacy seriously. All personal data is encrypted and stored securely. We never share your information with third parties without your explicit consent.',
    },
    {
      question: 'Can #SafeZone track my location?',
      answer:
        'Location tracking is optional and only used for features like real-time alerts and emergency services. You can toggle this feature on or off at any time in the app settings.',
    },
    {
      question: 'How accurate are the safety alerts?',
      answer:
        'Our alerts are based on verified reports from users, local authorities, and trusted partners. We strive for accuracy, but always encourage users to exercise their own judgment and stay aware of their surroundings.',
    },
  ],
  [
    {
      question: 'What should I do if I feel unsafe?',
      answer:
        "If you feel unsafe, use the app's emergency button to alert your contacts and local authorities. Always prioritize getting to a safe location first.",
    },
    {
      question: 'How does the AI Safety Companion work?',
      answer:
        "Our AI Safety Companion uses advanced algorithms to provide personalized safety advice based on your location and situation. It's available 24/7 and can guide you through various scenarios.",
    },
    {
      question: 'Is #SafeZone available worldwide?',
      answer:
        "Currently, #SafeZone is available in select countries. We're constantly expanding our coverage. Check our website for the most up-to-date list of supported regions.",
    },
  ],
  [
    {
      question: 'How can I report a safety concern?',
      answer:
        'Use the "Report Incident" feature in the app. You can provide details, photos, and location. Your report helps keep the community informed and safe.',
    },
    {
      question: 'Does #SafeZone work without an internet connection?',
      answer:
        "Some features require an internet connection, but we've designed key safety functions to work offline. Emergency contacts and basic safety guidelines are always accessible.",
    },
    {
      question: 'How can I get involved in making my community safer?',
      answer:
        'We offer community safety programs through the app. You can volunteer, attend local safety meetings, or become a verified safety ambassador. Check the "Community" section for more information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-20 sm:py-32"
    >
      <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 backdrop-blur-3xl"></div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-4xl font-bold tracking-tight text-gray-900 text-transparent"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            If you have any other questions,{' '}
            <a
              href="mailto:support@safezone.com"
              className="font-semibold text-blue-600 transition duration-300 hover:text-purple-600"
            >
              reach out to our support team
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li
                    key={faqIndex}
                    className="transform rounded-2xl bg-white bg-opacity-50 p-6 shadow-lg backdrop-blur-lg transition duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <h3 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-lg font-semibold leading-6 text-gray-900 text-transparent">
                      {faq.question}
                    </h3>
                    <p className="text-md mt-4 text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
