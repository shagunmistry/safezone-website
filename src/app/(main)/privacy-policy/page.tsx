export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground mt-4">
              Effective Date: September 21, 2024
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Your Privacy Matters</h2>
            <p className="mt-4">
              At #SafeZone, we are committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, and safeguard your
              information when you use our location-based safety services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Location Data Collection</h2>
            <p className="mt-4">
              #SafeZone utilizes your device's location services to provide you
              with our safety features. However, we do not store or retain any
              of your location data. Your location information is used solely
              for the purpose of delivering our services and is not shared with
              any third parties.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Anonymity and Data Security</h2>
            <p className="mt-4">
              We understand the importance of your privacy, which is why the
              #Safezone App is designed to be completely anonymous. We do not
              collect or store any personal information, such as your name,
              email address. Your use of our services is entirely anonymous, and
              we have implemented robust security measures to protect your data.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Your Rights and Control</h2>
            <p className="mt-4">
              As a user of #SafeZone, you have the right to control your data.
              You can choose to disable location services at any time, which
              will prevent us from accessing your location information.
              Additionally, you can delete your account and all associated data
              by contacting our support team.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Changes to this Policy</h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or to comply with applicable laws and
              regulations. We will notify you of any material changes by posting
              the updated policy on our website or by other means.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-4">
              If you have any questions or concerns about our Privacy Policy or
              your data, please don\'t hesitate to contact us at{' '}
              <a
                href="mailto:safezonesupport@gmail.com"
                className="text-primary underline"
              >
                safezonesupport@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
