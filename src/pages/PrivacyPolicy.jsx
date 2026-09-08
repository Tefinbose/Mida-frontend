import PolicyLayout from "../components/common/PolicyLayout";

const PrivacyPolicy = () => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="Your privacy and personal information are important to us. Learn how Mida Travels collects, uses, and protects your information."
    >
      <div className="space-y-12">

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Introduction
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            At <strong>Mida Travels</strong>, we respect and protect your
            privacy. This Privacy Policy explains how we collect, use, store,
            and safeguard your personal information when you use our website
            or services.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            By using our website or providing personal information, you consent
            to the practices described in this Privacy Policy.
          </p>
        </section>

        {/* Information */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Information We Collect
          </h2>

          <h3 className="mt-6 text-xl font-semibold text-[#1597A8]">
            Personal Information
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Full name</li>
            <li>Date of birth</li>
            <li>Nationality</li>
            <li>Passport details</li>
            <li>Contact number</li>
            <li>Email address</li>
            <li>Residential address</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-[#1597A8]">
            Travel Information
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Flight preferences</li>
            <li>Hotel preferences</li>
            <li>Travel itineraries</li>
            <li>Visa documentation</li>
            <li>Emergency contact information</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-[#1597A8]">
            Payment Information
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Billing details</li>
            <li>Transaction information</li>
          </ul>

          <p className="mt-4 leading-relaxed text-gray-600">
            Sensitive payment information is processed through secure
            third-party payment gateways and is not stored by Mida Travels
            unless required by law.
          </p>
        </section>

        {/* How We Use */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            How We Use Your Information
          </h2>

          <p className="mt-4 text-gray-600">
            Your information may be used for:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Processing travel bookings.</li>
            <li>Hotel reservations.</li>
            <li>Flight ticket issuance.</li>
            <li>Visa application assistance.</li>
            <li>Customer support services.</li>
            <li>Sending booking confirmations.</li>
            <li>Travel updates and notifications.</li>
            <li>Compliance with legal obligations.</li>
            <li>Improving our services and website.</li>
          </ul>
        </section>

        {/* Sharing */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Sharing of Information
          </h2>

          <p className="mt-4 text-gray-600">
            We may share your information with:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Airlines</li>
            <li>Hotels</li>
            <li>Visa processing authorities</li>
            <li>Government agencies where legally required</li>
            <li>Insurance providers</li>
            <li>Tour operators</li>
            <li>Transportation partners</li>
            <li>Payment processors</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Information is shared only as necessary for delivering requested
            travel services.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Data Security
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            We implement reasonable administrative, technical, and physical
            safeguards to protect personal information against unauthorized
            access, disclosure, alteration, or destruction.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            However, no internet transmission or electronic storage system can
            be guaranteed as completely secure.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Cookies & Website Analytics
          </h2>

          <p className="mt-4 text-gray-600">
            Our website may use cookies and analytics technologies to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Improve user experience.</li>
            <li>Analyze website traffic.</li>
            <li>Remember user preferences.</li>
            <li>Enhance website functionality.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Users may modify browser settings to manage cookie preferences.
          </p>
        </section>

        {/* Marketing */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Marketing Communications
          </h2>

          <p className="mt-4 text-gray-600">
            With your consent, we may send:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Promotional offers</li>
            <li>Travel packages</li>
            <li>Holiday deals</li>
            <li>Newsletters</li>
            <li>Service updates</li>
          </ul>

          <p className="mt-4 text-gray-600">
            You may unsubscribe from marketing communications at any time using
            the provided opt-out options.
          </p>
        </section>

        {/* Retention */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Data Retention
          </h2>

          <p className="mt-4 text-gray-600">
            Personal information shall be retained only for as long as necessary
            to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Provide requested services.</li>
            <li>Meet legal obligations.</li>
            <li>Resolve disputes.</li>
            <li>Maintain business records.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            After the retention period, information may be securely deleted or
            anonymized.
          </p>
        </section>

        {/* Third Party */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Third-Party Websites
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Our website may contain links to external websites. Mida Travels is
            not responsible for the privacy practices or content of third-party
            websites. Users are encouraged to review the privacy policies of
            any external websites they visit.
          </p>
        </section>

        {/* User Rights */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            User Rights
          </h2>

          <p className="mt-4 text-gray-600">
            Subject to applicable laws, users may have the right to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Access personal information.</li>
            <li>Correct inaccurate information.</li>
            <li>Request deletion of personal information.</li>
            <li>Withdraw consent where applicable.</li>
            <li>Request information regarding data processing activities.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Requests may be submitted through our official contact channels.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Changes to This Policy
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Mida Travels reserves the right to update or modify these Terms &
            Conditions and Privacy Policy at any time. Updated versions will be
            published on this website with immediate effect upon posting.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Contact Us
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            For questions regarding these Terms & Conditions or Privacy Policy,
            please contact <strong>Mida Travels</strong> through the contact
            details provided on our website. We will make reasonable efforts to
            address your concerns and respond to your inquiries promptly.
          </p>
        </section>

      </div>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;