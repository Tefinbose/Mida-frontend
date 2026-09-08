import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faLandmark,
  faPeopleGroup,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const DestinationDetails = ({ destination, onClose }) => {
  if (!destination) return null;

  return (
    <section className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 px-4 py-10">

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#123B4A] shadow-lg transition hover:bg-[#1597A8] hover:text-white"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Hero */}
        <div className="relative h-[350px]">
          <img
            src={destination.image}
            alt={destination.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-10 left-8 text-white">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <FontAwesomeIcon icon={faLocationDot} />

              Explore The World
            </div>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              {destination.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">

          <p className="text-lg leading-relaxed text-gray-600">
            {destination.description}
          </p>

          {/* Attractions + Experiences */}
          <div className="mt-10 grid gap-10 md:grid-cols-2">

            {/* Attractions */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1597A8]/10">
                  <FontAwesomeIcon
                    icon={faLandmark}
                    className="text-xl text-[#1597A8]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#123B4A]">
                  Top Attractions
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {destination.attractions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-sm text-[#1597A8]"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Experiences */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1597A8]/10">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="text-xl text-[#1597A8]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#123B4A]">
                  Cultural Experiences
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {destination.experiences.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 text-sm text-[#1597A8]"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;