import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faCheck,
  faPlane,
  faArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Dubai Delights",
      location: "Dubai, UAE",
      price: "₹19,999",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Experience the perfect blend of luxury, adventure, culture, and modern attractions with our Dubai Delights package. Discover world-famous landmarks, breathtaking architecture, desert adventures, and vibrant shopping destinations in one of the world's most exciting cities.",
      highlights: [
        "City sightseeing tours",
        "Desert safari experiences",
        "Luxury dhow cruises",
        "Shopping and entertainment districts",
        "Family-friendly attractions",
        "Cultural and heritage experiences",
      ],
    },

    {
      id: 2,
      name: "Singapore Symphony",
      location: "Singapore",
      price: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
      description:
        "Discover the harmony of modern innovation, cultural diversity, and natural beauty with our Singapore Symphony package. From futuristic attractions and stunning gardens to world-class shopping and culinary delights, Singapore promises an unforgettable travel experience.",
      highlights: [
        "City tours and sightseeing",
        "Theme parks and family attractions",
        "Marina waterfront experiences",
        "Shopping and dining adventures",
        "Gardens and nature attractions",
        "Cultural heritage districts",
      ],
    },

    {
      id: 3,
      name: "Thailand Vibes",
      location: "Thailand",
      price: "Contact Us",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
      description:
        "Immerse yourself in the vibrant energy, tropical beauty, and rich traditions of Thailand. Our Thailand Vibes package combines stunning beaches, bustling cities, cultural landmarks, and exciting nightlife to create the perfect holiday experience.",
      highlights: [
        "Beach escapes and island adventures",
        "Cultural and temple tours",
        "Local markets and shopping experiences",
        "Adventure and water activities",
        "Nightlife and entertainment",
        "Authentic Thai cuisine experiences",
      ],
    },

    {
      id: 4,
      name: "Malaysian Memories",
      location: "Malaysia",
      price: "Contact Us",
      image:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
      description:
        "Create lasting memories as you explore the diverse landscapes, modern cities, and cultural treasures of Malaysia. From vibrant urban attractions to lush natural wonders, Malaysia offers the perfect mix of relaxation and discovery.",
      highlights: [
        "City sightseeing experiences",
        "Cultural and heritage attractions",
        "Nature and wildlife encounters",
        "Family entertainment destinations",
        "Shopping and culinary tours",
        "Island and beach getaways",
      ],
    },

    {
      id: 5,
      name: "Bali Blues",
      location: "Bali, Indonesia",
      price: "Contact Us",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      description:
        "Escape to the tropical paradise of Bali, where breathtaking beaches, lush landscapes, spiritual traditions, and luxury experiences come together. Our Bali Blues package is perfect for honeymooners, couples, families, and travelers seeking tranquility and adventure.",
      highlights: [
        "Beach and resort stays",
        "Temple and cultural tours",
        "Scenic countryside experiences",
        "Water sports and adventure activities",
        "Wellness and spa experiences",
        "Romantic getaway opportunities",
      ],
    },

    {
      id: 6,
      name: "Serene Sri Lanka",
      location: "Sri Lanka",
      price: "Contact Us",
      image:
        "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80",
      description:
        "Discover the timeless beauty of Sri Lanka through a journey filled with pristine beaches, rolling hills, ancient heritage, and incredible wildlife. Our Serene Sri Lanka package showcases the best of this island paradise.",
      highlights: [
        "Heritage and cultural excursions",
        "Scenic hill country experiences",
        "Wildlife and nature tours",
        "Beach relaxation opportunities",
        "Tea plantation visits",
        "Local cuisine and cultural immersion",
      ],
    },

    {
      id: 7,
      name: "Magical Maldives",
      location: "Maldives",
      price: "Contact Us",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      description:
        "Step into a world of crystal-clear waters, white sandy beaches, and luxurious island escapes with our Magical Maldives package. Perfect for honeymooners, couples, families, and luxury travelers, the Maldives offers unmatched serenity and natural beauty.",
      highlights: [
        "Luxury island resort stays",
        "Overwater villa experiences",
        "Snorkeling and diving adventures",
        "Sunset cruises and excursions",
        "Romantic getaway packages",
        "Water sports and leisure activities",
      ],
    },

    {
      id: 8,
      name: "Wild Wild Africa",
      location: "Africa",
      price: "Contact Us",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      description:
        "Embark on an extraordinary journey through Africa's breathtaking landscapes, diverse cultures, and incredible wildlife. Our Wild Wild Africa package offers unforgettable adventures across some of the continent's most remarkable destinations.",
      highlights: [
        "Wildlife safari adventures",
        "National parks and nature reserves",
        "Scenic landscapes and natural wonders",
        "Cultural and heritage experiences",
        "Luxury lodge accommodations",
        "Adventure and exploration activities",
      ],
    },

    {
      id: 9,
      name: "Indian Melody",
      location: "India",
      price: "Contact Us",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      description:
        "Celebrate the incredible diversity, culture, history, and natural beauty of India with our Indian Melody package. From majestic monuments and vibrant cities to serene backwaters and breathtaking mountain landscapes, India offers a travel experience like no other.",
      highlights: [
        "Cultural and heritage tours",
        "Historical monuments and landmarks",
        "Spiritual and pilgrimage destinations",
        "Hill stations and scenic retreats",
        "Beach and nature experiences",
        "Authentic local cuisine and traditions",
      ],
    },
  ];

  return (
    <>
      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#123B4A] px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt="Travel"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1597A8]">
            Explore The World
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl lg:text-7xl">
            Travel Packages
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
            Discover unforgettable destinations with carefully curated travel
            experiences designed to create memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* PACKAGES */}

      <section className="bg-gray-50 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}

          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Our Best Packages
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Find Your Perfect Journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
              From luxury escapes and romantic honeymoons to adventure trips
              and family vacations, we have the perfect journey waiting for
              you.
            </p>
          </div>

          {/* PACKAGES GRID */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* IMAGE */}

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* LOCATION */}

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#123B4A]">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[#1597A8]"
                    />

                    {item.location}
                  </div>

                  {/* TITLE */}

                  <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
                    {item.name}
                  </h3>
                </div>

                {/* CONTENT */}

                <div className="p-6">

                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description.substring(0, 150)}...
                  </p>

                  {/* PRICE */}

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        Starting From
                      </p>

                      <h4 className="mt-1 text-xl font-bold text-[#123B4A]">
                        {item.price}
                      </h4>

                      {item.price !== "Contact Us" && (
                        <p className="text-xs text-gray-400">
                          Per Person
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedPackage(item)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1597A8] text-white transition duration-300 hover:bg-[#123B4A]"
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section className="bg-[#123B4A] px-6 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Travel With Confidence
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Why Choose Our Packages?
            </h2>

            <p className="mt-5 leading-relaxed text-gray-300">
              Every journey is carefully designed to provide comfort,
              convenience, unforgettable experiences, and exceptional value.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Carefully crafted itineraries",
              "Comfortable accommodation options",
              "Expert travel planning and support",
              "Customizable holiday experiences",
              "Visa assistance and travel guidance",
              "Competitive pricing with exceptional value",
              "Dedicated customer support throughout your journey",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1597A8]">
                  <FontAwesomeIcon icon={faCheck} />
                </div>

                <p className="pt-2 font-medium text-gray-100">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-white px-6 py-20 text-center lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">

          <FontAwesomeIcon
            icon={faPlane}
            className="text-5xl text-[#1597A8]"
          />

          <h2 className="mt-6 text-4xl font-bold text-[#123B4A] md:text-5xl">
            Your Next Adventure Awaits
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Whether you're planning a romantic honeymoon, a family vacation,
            a group adventure, or a luxury escape, our destination packages
            are designed to deliver seamless travel experiences and
            unforgettable memories across the world.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#123B4A] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#1597A8]"
          >
            Explore Our Packages

            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>

      {/* PACKAGE MODAL */}

      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white">

            {/* IMAGE */}

            <div className="relative h-64">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="h-full w-full object-cover"
              />

              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#123B4A]"
              >
                ×
              </button>
            </div>

            {/* MODAL CONTENT */}

            <div className="p-8">

              <p className="text-sm font-semibold uppercase tracking-widest text-[#1597A8]">
                {selectedPackage.location}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#123B4A]">
                {selectedPackage.name}
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                {selectedPackage.description}
              </p>

              {/* PRICE */}

              <div className="mt-6 rounded-xl bg-gray-50 p-5">

                <p className="text-sm text-gray-500">
                  Package Starting From
                </p>

                <h3 className="mt-2 text-3xl font-bold text-[#1597A8]">
                  {selectedPackage.price}
                </h3>

                {selectedPackage.price !== "Contact Us" && (
                  <p className="text-sm text-gray-500">
                    Per Person
                  </p>
                )}
              </div>

              {/* HIGHLIGHTS */}

              <h3 className="mt-8 text-2xl font-bold text-[#123B4A]">
                Package Highlights
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                {selectedPackage.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="mt-1 text-[#1597A8]"
                    />

                    <p className="text-gray-600">
                      {highlight}
                    </p>
                  </div>
                ))}

              </div>

              {/* BUTTON */}

              <button
                onClick={() => {
                  setSelectedPackage(null);

                  window.location.href = "/contact";
                }}
                className="mt-8 w-full rounded-xl bg-[#123B4A] py-4 font-semibold text-white transition hover:bg-[#1597A8]"
              >
                Enquire About This Package
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Packages;