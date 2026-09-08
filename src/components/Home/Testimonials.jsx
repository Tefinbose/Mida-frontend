import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faStar,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Sarah Thomas",
    trip: "Dubai Delights",
    text:
      "Our Dubai vacation with Mida Travel was absolutely fantastic. From airport transfers to hotel bookings and sightseeing tours, everything was perfectly organized.",
  },
  {
    name: "Rajesh Nair",
    trip: "Singapore Symphony",
    text:
      "Mida Travel made our Singapore trip seamless and enjoyable. The itinerary was well planned, the hotel was excellent and the team's support was outstanding.",
  },
  {
    name: "Aisha Mohammed",
    trip: "Bali Blues",
    text:
      "Our honeymoon in Bali was everything we dreamed of and more. Beautiful accommodations, smooth transfers and memorable excursions made it unforgettable.",
  },
  {
    name: "Daniel Mathew",
    trip: "Magical Maldives",
    text:
      "The Maldives package arranged by Mida Travel was amazing. From the luxurious resort to breathtaking ocean views, everything was perfectly coordinated.",
  },
  {
    name: "Priya Menon",
    trip: "Thailand Vibes",
    text:
      "Our family trip to Thailand was wonderfully organized. The hotels, sightseeing tours and local experiences were excellent.",
  },
  {
    name: "Faisal Rahman",
    trip: "Lakshadweep Escape",
    text:
      "Mida Travels helped us discover the stunning beauty of Lakshadweep with a perfectly curated travel package. Everything was managed efficiently.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Memories Made With Mida
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
            Our Happy Travellers
          </h2>

          <p className="mt-5 text-gray-600">
            Real experiences from travellers who explored the world with us.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-white p-7 shadow-md transition hover:shadow-xl"
            >

              {/* Quote */}
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-3xl text-[#1597A8]"
              />

              {/* Stars */}
              <div className="mt-5 flex gap-1 text-yellow-400">

                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                  />
                ))}

              </div>

              {/* Text */}
              <p className="mt-5 text-sm leading-relaxed text-gray-600">
                "{testimonial.text}"
              </p>

              {/* User */}
              <div className="mt-6 border-t pt-5">

                <h3 className="font-bold text-[#123B4A]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-[#1597A8]">
                  {testimonial.trip}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;