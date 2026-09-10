import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const columns = [
  [
    {
      name: "Rahul Menon",
      location: "Kochi, Kerala",
      text: "Mida Travels made our Dubai trip completely stress-free. Everything was perfectly arranged, from the hotel to airport transfers. The team was always available whenever we needed help.",
    },
    {
      name: "Anjali Thomas",
      location: "Bangalore, Karnataka",
      text: "We had an amazing experience with Mida Travels. The itinerary was well planned and we got enough time to explore every place without feeling rushed.",
    },
    {
      name: "Arjun Nair",
      location: "Trivandrum, Kerala",
      text: "Very professional service from start to finish. The team helped us choose the right package for our family and handled all the arrangements smoothly.",
    },
    {
      name: "Meera Joseph",
      location: "Ernakulam, Kerala",
      text: "Our Maldives vacation was absolutely beautiful. The resort recommendation was perfect and the entire booking process was very easy. Highly recommended!",
    },
  ],

  [
    {
      name: "Vishnu Krishnan",
      location: "Calicut, Kerala",
      text: "What I liked most was the personal attention. Mida Travels didn't just sell us a package — they actually understood what we wanted from our holiday.",
    },
    {
      name: "Fathima Shirin",
      location: "Malappuram, Kerala",
      text: "Excellent experience! From visa assistance to hotel booking, everything was handled professionally. We didn't have to worry about anything during our trip.",
    },
    {
      name: "Nikhil Varma",
      location: "Kottayam, Kerala",
      text: "We booked our Singapore holiday through Mida Travels and had a wonderful experience. The support team was quick to respond and very helpful.",
    },
    {
      name: "Devika Suresh",
      location: "Thrissur, Kerala",
      text: "A memorable family vacation! The planning was excellent and every detail was taken care of. We will definitely choose Mida Travels again for our next trip.",
    },
  ],

  [
    {
      name: "Akhil Mathew",
      location: "Kannur, Kerala",
      text: "Great service and very transparent communication. They helped us find a package within our budget without compromising on the experience.",
    },
    {
      name: "Neha George",
      location: "Kochi, Kerala",
      text: "The entire booking process was smooth and simple. The team was friendly, responsive and made our family trip really memorable.",
    },
    {
      name: "Adithya Raj",
      location: "Alappuzha, Kerala",
      text: "Mida Travels took care of everything we needed. From planning the itinerary to hotel arrangements, the whole experience was excellent.",
    },
    {
      name: "Sneha Varghese",
      location: "Kottayam, Kerala",
      text: "A wonderful travel experience with a very helpful team. We would definitely recommend Mida Travels to anyone planning an international holiday.",
    },
  ],
];

const allReviews = columns.flat();

const GoogleIcon = () => (
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="h-5 w-5"
  />
);

const ReviewCard = ({ review }) => {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="
        group mb-4 rounded-2xl border border-gray-100
        bg-white p-5
        shadow-[0_6px_25px_rgba(18,59,74,0.05)]
        transition-shadow duration-300
        hover:shadow-[0_15px_35px_rgba(18,59,74,0.10)]
      "
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-10 w-10 shrink-0 items-center
              justify-center rounded-full
              bg-[#123B4A] text-sm font-bold text-white
            "
          >
            {review.name.charAt(0)}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-[#123B4A]">
              {review.name}
            </h3>

            <p className="truncate text-xs text-gray-400">
              {review.location}
            </p>
          </div>
        </div>

        <GoogleIcon />
      </div>

      <div className="mt-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="text-xs text-[#F4B400]"
          />
        ))}
      </div>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {review.text}
      </p>

      <div className="mt-4 h-0.5 w-7 rounded-full bg-[#1597A8]/30 transition-all duration-300 group-hover:w-12" />
    </motion.article>
  );
};

const MarqueeColumn = ({
  items,
  direction,
  duration,
  mobile = false,
}) => {
  const animationName =
    direction === "down" ? "marquee-down" : "marquee-up";

  return (
    <div
      className={`
        group relative overflow-hidden
        ${
          mobile
            ? "h-[55vh] min-h-[400px] max-h-[520px]"
            : "h-[58vh] min-h-[480px] max-h-[620px]"
        }
      `}
    >
      {/* Top fade */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          z-10 h-20
          bg-gradient-to-b from-[#F4F9F9] to-transparent
        "
      />

      {/* Bottom fade */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          z-10 h-20
          bg-gradient-to-t from-[#F4F9F9] to-transparent
        "
      />

      <div
        className="
          flex flex-col
          group-hover:[animation-play-state:paused]
        "
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <ReviewCard
            key={`${item.name}-${index}`}
            review={item}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#F4F9F9]
        px-5 py-20
        sm:px-6
        lg:px-8 lg:py-24
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute -left-32 top-40
          h-72 w-72 rounded-full
          bg-[#20B7C8]/10 blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute -right-32 bottom-20
          h-72 w-72 rounded-full
          bg-[#1597A8]/10 blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto mb-10 max-w-3xl
            text-center sm:mb-12
          "
        >
          <p
            className="
              text-xs font-semibold uppercase
              tracking-[0.2em] text-[#1597A8]
            "
          >
            Traveler Experiences
          </p>

          <h2
            className="
              mt-3 text-3xl font-bold
              leading-tight text-[#123B4A]
              sm:text-4xl
              md:text-5xl
            "
          >
            Trusted By Travelers.
            <span className="block text-[#1597A8]">
              Loved For The Journey.
            </span>
          </h2>

          <p
            className="
              mx-auto mt-4 max-w-2xl
              text-sm leading-6 text-gray-500
              sm:leading-7 md:text-base
            "
          >
            Discover what our travelers have to say about
            their experiences with Mida Travels.
          </p>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden sm:grid sm:grid-cols-3 sm:gap-5">
          <MarqueeColumn
            items={columns[0]}
            direction="down"
            duration={30}
          />

          <MarqueeColumn
            items={columns[1]}
            direction="up"
            duration={26}
          />

          <MarqueeColumn
            items={columns[2]}
            direction="down"
            duration={32}
          />
        </div>

        {/* ================= MOBILE ================= */}
        <div className="sm:hidden">
          <MarqueeColumn
            items={allReviews}
            direction="up"
            duration={45}
            mobile
          />
        </div>
      </div>

      <style>{`
        @keyframes marquee-up {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }

        @keyframes marquee-down {
          from {
            transform: translateY(-50%);
          }

          to {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;