'use client'

import { useId, useRef, useState, useEffect, Fragment } from 'react'
import {
  motion,
  AnimatePresence,
  Variants,
  Variant,
  MotionProps,
} from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { AppScreen } from '@/components/AppScreen'
import { PhoneFrame } from '@/components/PhoneFrame'
import { CircleBackground } from '@/components/CircleBackground'
import { AlertCircle, Map, MessageCircle, Phone, Shield } from 'lucide-react'
import Image from 'next/image'

import ReportScreen from '@/images/ReportIncidentScreen.png'
import SafetyResourcesScreen from '@/images/SafetyResourcesScreen.png'
import SafezoneCompanionScreen from '@/images/SafeZoneCompanionScreen.png'
import EmergencyContactsScreen from '@/images/EmergencyContactScreen.png'

//#region SVG icons
function DeviceTouchIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceUserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

//#endregion

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

interface CustomAnimationProps {
  isForwards: boolean
  changeCount: number
}

const features = [
  {
    name: 'Instant Incident Reporting',
    description:
      'Quickly document and share safety concerns in your area with just a few taps.',
    icon: AlertCircle,
    screen: ReportScreen,
  },
  {
    name: 'Real-Time Safety Alerts',
    description:
      'Stay informed about nearby incidents and potential safety risks in your vicinity.',
    icon: Map,
    screen: SafetyResourcesScreen,
  },
  {
    name: '24/7 Safety Companion',
    description:
      'Feeling alone, unsafe, or just need a friend? Our AI companion is here to help.',
    icon: MessageCircle,
    screen: SafezoneCompanionScreen,
  },
  {
    name: 'Emergency Contacts',
    description:
      'Quickly reach your trusted allies with one tap in case of emergencies.',
    icon: Shield,
    screen: EmergencyContactsScreen,
  },
]

const headerAnimation: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom: CustomAnimationProps) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

type ScreenProps =
  | {
      animated: true
      custom: CustomAnimationProps
    }
  | { animated?: false }

// function ReportScreen(props: ScreenProps) {
//   return (
//     <AppScreen className="w-full">
//       <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
//         <AppScreen.Title>Report Incident</AppScreen.Title>
//         <AppScreen.Subtitle>Help keep your community safe</AppScreen.Subtitle>
//       </MotionAppScreenHeader>
//       <MotionAppScreenBody
//         {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
//       >
//         <div className="px-4 py-6">
//           <div className="space-y-4">
//             {[
//               { label: 'Incident Type', value: 'Suspicious Activity' },
//               { label: 'Location', value: '123 Main St' },
//               {
//                 label: 'Description',
//                 value: 'Person loitering near the park entrance',
//               },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className="flex justify-between border-b border-gray-100 pb-4"
//               >
//                 <div className="text-sm text-gray-500">{item.label}</div>
//                 <div className="text-sm font-semibold text-gray-900">
//                   {item.value}
//                 </div>
//               </div>
//             ))}
//             <div className="rounded-lg bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white">
//               Submit Report
//             </div>
//           </div>
//         </div>
//       </MotionAppScreenBody>
//     </AppScreen>
//   )
// }

// function AlertScreen(props: ScreenProps) {
//   return (
//     <AppScreen className="w-full">
//       <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
//         <AppScreen.Title>Safety Alerts</AppScreen.Title>
//         <AppScreen.Subtitle>Stay informed, stay safe</AppScreen.Subtitle>
//       </MotionAppScreenHeader>
//       <MotionAppScreenBody
//         {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
//       >
//         <div className="divide-y divide-gray-100">
//           {[
//             {
//               title: 'Suspicious activity reported',
//               location: '2 blocks away',
//               time: '5 min ago',
//             },
//             {
//               title: 'Car break-in',
//               location: 'Oak Street',
//               time: '20 min ago',
//             },
//             {
//               title: 'Lost child found',
//               location: 'Central Park',
//               time: '1 hour ago',
//             },
//           ].map((alert, index) => (
//             <div key={index} className="flex items-center gap-4 px-4 py-3">
//               <div className="flex-none rounded-full bg-red-100 p-2">
//                 <AlertCircle className="h-5 w-5 text-red-500" />
//               </div>
//               <div className="flex-auto">
//                 <div className="text-sm font-medium text-gray-900">
//                   {alert.title}
//                 </div>
//                 <div className="text-sm text-gray-500">{alert.location}</div>
//               </div>
//               <div className="text-xs text-gray-500">{alert.time}</div>
//             </div>
//           ))}
//         </div>
//       </MotionAppScreenBody>
//     </AppScreen>
//   )
// }

// function AICompanionScreen(props: ScreenProps) {
//   return (
//     <AppScreen className="w-full">
//       <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
//         <AppScreen.Title>AI Safety Companion</AppScreen.Title>
//         <AppScreen.Subtitle>Your personal safety guide</AppScreen.Subtitle>
//       </MotionAppScreenHeader>
//       <MotionAppScreenBody
//         {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
//       >
//         <div className="flex h-full flex-col">
//           <div className="flex-1 overflow-y-auto px-4 py-6">
//             <div className="space-y-4">
//               <div className="flex justify-start">
//                 <div className="max-w-[75%] rounded-lg bg-gray-200 px-4 py-2">
//                   <p className="text-sm">
//                     Hello! I'm your AI safety companion. How can I assist you
//                     today?
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-end">
//                 <div className="max-w-[75%] rounded-lg bg-blue-500 px-4 py-2 text-white">
//                   <p className="text-sm">
//                     I'm walking alone at night. Any safety tips?
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-start">
//                 <div className="max-w-[75%] rounded-lg bg-gray-200 px-4 py-2">
//                   <p className="text-sm">
//                     Stay in well-lit areas, be aware of your surroundings, and
//                     keep your phone ready. Would you like me to activate live
//                     location sharing with your emergency contacts?
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-200 px-4 py-3">
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Type your message..."
//                 className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button className="ml-2 rounded-full bg-blue-500 p-2 text-white">
//                 <MessageCircle className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </MotionAppScreenBody>
//     </AppScreen>
//   )
// }

// function EmergencyContactsScreen(props: ScreenProps) {
//   return (
//     <AppScreen className="w-full">
//       <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
//         <AppScreen.Title>Emergency Contacts</AppScreen.Title>
//         <AppScreen.Subtitle>Quick access to help</AppScreen.Subtitle>
//       </MotionAppScreenHeader>
//       <MotionAppScreenBody
//         {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
//       >
//         <div className="px-4 py-6">
//           <div className="space-y-4">
//             {[
//               { name: 'Local Police', number: '911' },
//               { name: 'Mom', number: '+1 (555) 123-4567' },
//               { name: 'Dad', number: '+1 (555) 987-6543' },
//               { name: 'Best Friend', number: '+1 (555) 246-8135' },
//             ].map((contact, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between border-b border-gray-100 pb-4"
//               >
//                 <div>
//                   <div className="text-sm font-medium text-gray-900">
//                     {contact.name}
//                   </div>
//                   <div className="text-sm text-gray-500">{contact.number}</div>
//                 </div>
//                 <button className="rounded-full bg-green-500 p-2">
//                   <Phone className="h-5 w-5 text-white" />
//                 </button>
//               </div>
//             ))}
//             <div className="rounded-lg bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white">
//               Add New Contact
//             </div>
//           </div>
//         </div>
//       </MotionAppScreenBody>
//     </AppScreen>
//   )
// }

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <TabGroup
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => {
          const isSelected = featureIndex === selectedIndex
          return (
            <div
              key={feature.name}
              className="relative rounded-2xl transition-all duration-300 ease-in-out"
            >
              {isSelected && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ borderRadius: 16, opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              <div
                className={`relative z-10 p-8 ${isSelected ? 'text-white' : 'text-gray-700'}`}
              >
                <feature.icon
                  className={`h-8 w-8 ${isSelected ? 'text-white' : 'text-blue-500'}`}
                />
                <h3 className="mt-6 text-lg font-semibold">
                  <Tab className="text-left focus:outline-none">
                    <span className="absolute inset-0 rounded-2xl" />
                    {feature.name}
                  </Tab>
                </h3>
                <p
                  className={`mt-2 text-sm ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground
            color="url(#grad1)"
            className="animate-spin-reverse-slow"
          />
          <svg width="0" height="0">
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: '#60A5FA', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#8B5CF6', stopOpacity: 1 }}
              />
            </linearGradient>
          </svg>
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px] rounded-[44px] bg-gray-900">
          <TabPanels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <TabPanel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-none"
                  >
                    <Image
                      src={feature.screen}
                      alt={feature.name}
                      layout="responsive"
                      width={366}
                      height={448}
                      unoptimized
                    />
                  </TabPanel>
                ) : null,
              )}
            </AnimatePresence>
          </TabPanels>
        </PhoneFrame>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef<React.ElementRef<'div'>>(null)
  let slideRefs = useRef<Array<React.ElementRef<'div'>>>([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => {
              if (ref) {
                slideRefs.current[featureIndex] = ref
              }
            }}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-275' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <Image
                  src={feature.screen}
                  alt={feature.name}
                  layout="responsive"
                  width={366}
                  height={448}
                  unoptimized
                />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Primary features of SafeZone"
      className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-purple-100 to-green-100 py-20 sm:py-32"
    >
      <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 backdrop-blur-3xl"></div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-gray-900 text-transparent">
            Every feature you need to stay safe. Try it for yourself.
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-gray-600">
            #SafeZone was built for people like you who prioritize personal
            safety and community well-being. With our comprehensive set of
            features, you'll always have the tools you need to stay secure and
            informed.
          </p>
        </div>
      </Container>
      <div className="relative z-10 mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="relative z-10 hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
