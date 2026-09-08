import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlane,
  faPassport,
  faHotel,
  faUsers,
  faHeart,
  faGem,
  faCar,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faMapLocationDot,
    title: "Inbound Tour Packages",
    description:
      "Explore incredible destinations with perfectly planned travel experiences.",
  },
  {
    icon: faPlane,
    title: "Outbound Tour Packages",
    description:
      "Discover the world with international journeys designed for you.",
  },
  {
    icon: faPassport,
    title: "Visa Processing",
    description:
      "Professional assistance for a smooth and stress-free visa process.",
  },
  {
    icon: faHotel,
    title: "Hotel Bookings",
    description:
      "Comfortable stays and premium accommodation around the world.",
  },
  {
    icon: faUsers,
    title: "Group Tours",
    description:
      "Memorable journeys designed for families, friends and groups.",
  },
  {
    icon: faHeart,
    title: "Destination Wedding",
    description:
      "Turn your dream wedding into an unforgettable destination experience.",
  },
  {
    icon: faGem,
    title: "Luxury Packages",
    description:
      "Experience premium travel with our exclusive luxury holidays.",
  },
  {
    icon: faCar,
    title: "Rent a Car",
    description:
      "Convenient and comfortable transportation for every journey.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
            Everything You Need
            <span className="block text-[#1597A8]">
              For The Perfect Journey
            </span>
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            From planning your trip to creating unforgettable memories,
            Mida Travels takes care of every detail.
          </p>

        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1597A8]/10 text-2xl text-[#1597A8] transition group-hover:bg-[#1597A8] group-hover:text-white">

                <FontAwesomeIcon icon={service.icon} />

              </div>

              <h3 className="mt-6 text-xl font-bold text-[#123B4A]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;