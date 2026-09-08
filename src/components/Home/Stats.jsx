import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGlobe,
  faPlane,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    icon: faGlobe,
    number: "20+",
    label: "Destinations",
  },
  {
    icon: faPlane,
    number: "500+",
    label: "Tours",
  },
  {
    icon: faSmile,
    number: "1000+",
    label: "Happy Customers",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#123B4A] px-6 py-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <FontAwesomeIcon
              icon={stat.icon}
              className="text-4xl text-[#20B7C8]"
            />

            <h2 className="mt-4 text-5xl font-bold">
              {stat.number}
            </h2>

            <p className="mt-2 text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;