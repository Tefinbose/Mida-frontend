import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const WhoWeAre = () => {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Images */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
            alt="Mida Travels"
            className="h-[450px] w-full rounded-3xl object-cover"
          />

          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#1597A8] p-6 text-white shadow-xl md:right-6">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-3xl"
            />

            <h3 className="mt-3 text-2xl font-bold">
              Around The Globe
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Creating unforgettable journeys worldwide.
            </p>
          </div>

        </div>

        {/* Content */}
        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Who We Are
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#123B4A] md:text-5xl">
            Around The Globe,
            <span className="block text-[#1597A8]">
              One Journey At A Time
            </span>
          </h2>

          <p className="mt-6 leading-relaxed text-gray-600">
            From weekend getaways to a fun-packed trip calendar, adventure
            and amazement are the essence of life. Let us help you tick off
            your bucket list, one unforgettable journey at a time.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            At Mida Travels, we are passionate about creating extraordinary
            travel experiences that connect people with destinations, cultures,
            and unforgettable memories.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            Our experienced travel consultants combine industry expertise with
            a deep understanding of global travel trends to design journeys
            that inspire and delight.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#123B4A] px-7 py-3 font-semibold text-white transition hover:bg-[#1597A8]"
          >
            Discover Our Story

            <FontAwesomeIcon icon={faArrowRight} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;