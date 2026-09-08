import PolicyLayout from "../components/common/PolicyLayout";

const TermsConditions = () => {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle="Please read these terms and conditions carefully before using our travel services."
    >
      <div className="space-y-12">

        {/* Booking Policy */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Booking Policy
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            All bookings made through Mida Travels are subject to availability
            and confirmation from airlines, hotels, tour operators, embassies,
            transportation providers, and other travel suppliers.
          </p>

          <p className="mt-4 font-medium text-gray-700">
            A booking shall be considered confirmed only upon:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Receipt of the required payment or deposit.</li>
            <li>Issuance of booking confirmation by Mida Travels.</li>
            <li>Confirmation from the respective travel service provider.</li>
          </ul>

          <p className="mt-4 leading-relaxed text-gray-600">
            Mida Travels reserves the right to refuse or cancel any booking in
            circumstances where accurate information is not provided or where
            supplier requirements are not met.
          </p>
        </section>

        {/* Payment Terms */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Payment Terms
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Full or partial payment may be required at the time of booking
            depending on the service selected.
          </p>

          <p className="mt-4 font-medium text-gray-700">
            By making a payment, the customer confirms acceptance of:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Applicable package inclusions and exclusions.</li>
            <li>Supplier-specific conditions.</li>
            <li>Cancellation and refund policies.</li>
            <li>Travel documentation requirements.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Prices are subject to change until full payment and booking
            confirmation are received.
          </p>
        </section>

        {/* Passport Visa */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Passport, Visa & Travel Documentation
          </h2>

          <p className="mt-4 text-gray-600">
            Travelers are solely responsible for ensuring they possess:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Valid passport with sufficient validity.</li>
            <li>Required visas and permits.</li>
            <li>Vaccination certificates where applicable.</li>
            <li>Travel insurance documentation.</li>
            <li>
              Any additional documents required by immigration authorities.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed text-gray-600">
            Visa assistance provided by Mida Travels does not guarantee visa
            approval. Approval or rejection remains solely at the discretion of
            the relevant embassy or immigration authority.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            Mida Travels shall not be held responsible for losses resulting from
            visa refusals, delayed approvals, incomplete documentation, or
            immigration-related decisions.
          </p>
        </section>

        {/* Flight Bookings */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Flight Bookings & Airline Policies
          </h2>

          <p className="mt-4 text-gray-600">
            Flight reservations are governed by the rules and conditions of the
            respective airline.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Flight schedules may change without prior notice.</li>
            <li>Airlines may cancel, delay, reschedule, or modify flights.</li>
            <li>Baggage allowances vary by airline and fare category.</li>
            <li>
              Additional charges may apply for changes, upgrades, or special
              services.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed text-gray-600">
            Mida Travels acts only as an intermediary between the traveler and
            airline and shall not be liable for operational decisions made by
            airlines.
          </p>
        </section>

        {/* Flight Cancellation */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Flight Cancellations & Amendments
          </h2>

          <p className="mt-4 text-gray-600">
            Any request for flight cancellation, date change, or itinerary
            modification is subject to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Airline policies and fare conditions.</li>
            <li>Applicable cancellation charges.</li>
            <li>Service fees imposed by airlines and travel suppliers.</li>
            <li>Administrative charges where applicable.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Certain promotional or discounted fares may be non-refundable and
            non-changeable. Refund eligibility will be determined strictly
            according to the airline's cancellation policy.
          </p>
        </section>

        {/* Hotel */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Hotel Booking Terms
          </h2>

          <p className="mt-4 text-gray-600">
            Hotel reservations are subject to individual hotel policies and
            availability.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Early check-in and late check-out are subject to availability.</li>
            <li>Additional charges may apply for extra guests or services.</li>
            <li>
              Hotels reserve the right to refuse accommodation under certain
              circumstances.
            </li>
            <li>Cancellation charges vary by hotel and booking type.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Mida Travels shall not be responsible for hotel-specific operational
            decisions.
          </p>
        </section>

        {/* Tour Packages */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Tour Packages
          </h2>

          <p className="mt-4 text-gray-600">
            Tour package itineraries may be modified due to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Weather conditions.</li>
            <li>Government regulations.</li>
            <li>Safety concerns.</li>
            <li>Transportation disruptions.</li>
            <li>Supplier operational issues.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Mida Travels reserves the right to substitute services of equivalent
            value when necessary.
          </p>

          <p className="mt-4 text-gray-600">
            No refunds shall be provided for unused services voluntarily skipped
            by travelers during the trip.
          </p>
        </section>

        {/* Travel Insurance */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Travel Insurance
          </h2>

          <p className="mt-4 text-gray-600">
            Travel insurance is strongly recommended for all travelers.
          </p>

          <p className="mt-4 text-gray-600">
            Insurance may cover:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Medical emergencies.</li>
            <li>Trip cancellations.</li>
            <li>Flight delays.</li>
            <li>Lost baggage.</li>
            <li>Personal accidents.</li>
            <li>Travel interruptions.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Coverage depends entirely on the policy purchased from the insurance
            provider.
          </p>
        </section>

        {/* Customer Responsibilities */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Customer Responsibilities
          </h2>

          <p className="mt-4 text-gray-600">
            Travelers are responsible for:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Providing accurate booking information.</li>
            <li>Carrying valid travel documents.</li>
            <li>Arriving at airports and departure points on time.</li>
            <li>Complying with local laws and regulations.</li>
            <li>
              Following health and safety requirements of destinations visited.
            </li>
          </ul>

          <p className="mt-4 text-gray-600">
            Any expenses arising from failure to meet these responsibilities
            shall be borne by the traveler.
          </p>
        </section>

        {/* Force Majeure */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Force Majeure
          </h2>

          <p className="mt-4 text-gray-600">
            Mida Travels shall not be liable for delays, cancellations, losses,
            or disruptions caused by circumstances beyond reasonable control,
            including but not limited to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Natural disasters</li>
            <li>Severe weather conditions</li>
            <li>Pandemics</li>
            <li>Government restrictions</li>
            <li>Political unrest</li>
            <li>Acts of terrorism</li>
            <li>Transportation strikes</li>
            <li>Airline operational issues</li>
          </ul>

          <p className="mt-4 text-gray-600">
            In such cases, refunds and compensation shall depend solely on the
            policies of the respective service providers.
          </p>
        </section>

        {/* Liability */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Limitation of Liability
          </h2>

          <p className="mt-4 text-gray-600">
            Mida Travels acts as an intermediary for airlines, hotels,
            transportation companies, tour operators, embassies, and other
            travel service providers.
          </p>

          <p className="mt-4 text-gray-600">
            We shall not be liable for:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Flight delays or cancellations.</li>
            <li>Visa refusals.</li>
            <li>Hotel overbookings.</li>
            <li>Supplier service failures.</li>
            <li>Lost baggage.</li>
            <li>Personal injuries.</li>
            <li>Travel interruptions beyond our control.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Our liability shall be limited to the amount paid directly to Mida
            Travels for the affected service.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-bold text-[#123B4A]">
            Governing Law
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            These Terms & Conditions shall be governed and interpreted in
            accordance with the applicable laws of the jurisdiction in which
            Mida Travels operates.
          </p>
        </section>

      </div>
    </PolicyLayout>
  );
};

export default TermsConditions;