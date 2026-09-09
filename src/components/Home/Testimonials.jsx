import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faQuoteLeft,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const BRAND = {
  teal: "#1597A8",
  navy: "#123B4A",
  gold: "#D9A441",
};

const testimonials = [
  {
    id: "sarah-thomas",
    name: "Sarah Thomas",
    trip: "Dubai Delights",
    rating: 5,
    verified: true,
    text: "Our Dubai vacation with Mida Travel was absolutely fantastic. From airport transfers to hotel bookings and sightseeing tours, everything was perfectly organized.",
  },
  {
    id: "rajesh-nair",
    name: "Rajesh Nair",
    trip: "Singapore Symphony",
    rating: 5,
    verified: true,
    text: "Mida Travel made our Singapore trip seamless and enjoyable. The itinerary was well planned, the hotel was excellent and the team's support was outstanding.",
  },
  {
    id: "aisha-mohammed",
    name: "Aisha Mohammed",
    trip: "Bali Blues",
    rating: 5,
    verified: true,
    text: "Our honeymoon in Bali was everything we dreamed of and more. Beautiful accommodations, smooth transfers and memorable excursions made it unforgettable. Every detail, down to the small welcome gift at our villa, felt considered.",
  },
  {
    id: "daniel-mathew",
    name: "Daniel Mathew",
    trip: "Magical Maldives",
    rating: 5,
    verified: true,
    text: "The Maldives package arranged by Mida Travel was amazing. From the luxurious resort to breathtaking ocean views, everything was perfectly coordinated.",
  },
  {
    id: "priya-menon",
    name: "Priya Menon",
    trip: "Thailand Vibes",
    rating: 5,
    verified: true,
    text: "Our family trip to Thailand was wonderfully organized. The hotels, sightseeing tours and local experiences were excellent.",
  },
  {
    id: "faisal-rahman",
    name: "Faisal Rahman",
    trip: "Lakshadweep Escape",
    rating: 5,
    verified: true,
    text: "Mida Travels helped us discover the stunning beauty of Lakshadweep with a perfectly curated travel package. Everything was managed efficiently.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const StarRating = ({ rating, size = "text-sm" }) => (
  <div
    className={`flex gap-1 ${size}`}
    style={{ color: BRAND.gold }}
    role="img"
    aria-label={`${rating} out of 5 stars`}
  >
    {[...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        aria-hidden="true"
        className={index < rating ? "" : "text-gray-200"}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  const { name, trip, text, rating, verified } = testimonial;

  return (
    <article className="flex w-[82%] shrink-0 snap-center flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 sm:w-[320px] sm:p-6 md:w-auto md:shrink md:snap-none md:p-7 md:hover:-translate-y-1 md:hover:shadow-lg">
      <div className="flex items-start justify-between">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          aria-hidden="true"
          className="text-xl opacity-20 sm:text-2xl"
          style={{ color: BRAND.navy }}
        />
        <StarRating rating={rating} size="text-xs sm:text-sm" />
      </div>

      <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 sm:mt-5 sm:line-clamp-5">
        {text}
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4 sm:mt-6 sm:pt-5">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white sm:h-10 sm:w-10 sm:text-sm"
          style={{ backgroundColor: BRAND.teal }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold sm:text-base" style={{ color: BRAND.navy }}>
              {name}
            </h3>
            {verified && (
              <FontAwesomeIcon
                icon={faCircleCheck}
                aria-hidden="true"
                title="Verified traveller"
                className="text-xs sm:text-sm"
                style={{ color: BRAND.teal }}
              />
            )}
          </div>
          <p className="mt-0.5 text-xs sm:text-sm" style={{ color: BRAND.teal }}>
            {trip}
          </p>
        </div>
      </div>
    </article>
  );
};

const Testimonials = () => {
  const reviewCount = testimonials.length;
  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / reviewCount
  ).toFixed(1);

  const [featured, ...rest] = testimonials;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-gray-50 px-6 py-14 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* soft ambient background, not decoration for its own sake — separates this section from the flat white/gray blocks around it */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: BRAND.teal }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
            style={{ color: BRAND.teal }}
          >
            Memories Made With Mida
          </p>

          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl"
            style={{ color: BRAND.navy }}
          >
            Our Happy Travellers
          </h2>

          <p className="mt-3 text-sm text-gray-600 sm:mt-5 sm:text-base">
            Real experiences from travellers who explored the world with us.
          </p>

          {/* Ratings summary — built from the testimonials data itself, not a separate invented stat */}
          <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-sm sm:mt-8 sm:gap-4 sm:px-6 sm:py-4">
            <span
              className="text-2xl font-bold sm:text-3xl"
              style={{ color: BRAND.navy }}
            >
              {averageRating}
            </span>
            <div className="text-left">
              <StarRating rating={Math.round(averageRating)} size="text-xs" />
              <p className="mt-1 text-xs text-gray-500">
                Based on {reviewCount} traveller reviews
              </p>
            </div>
          </div>
        </div>

        {/* Featured testimonial — condensed on mobile so it doesn't dominate the screen */}
        <article
          className="relative mt-8 overflow-hidden rounded-3xl px-6 py-7 sm:mt-14 sm:px-14 sm:py-14"
          style={{ backgroundColor: BRAND.navy }}
        >
          <FontAwesomeIcon
            icon={faQuoteLeft}
            aria-hidden="true"
            className="text-3xl opacity-10 sm:text-5xl"
            style={{ color: "#fff" }}
          />

          <p className="mt-3 line-clamp-3 max-w-3xl text-base font-medium leading-relaxed text-white sm:mt-4 sm:line-clamp-none sm:text-xl md:text-2xl">
            {featured.text}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 sm:mt-8 sm:gap-6">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white sm:h-11 sm:w-11 sm:text-sm"
                style={{ backgroundColor: BRAND.teal }}
                aria-hidden="true"
              >
                {getInitials(featured.name)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white sm:text-base">{featured.name}</h3>
                  {featured.verified && (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      aria-hidden="true"
                      title="Verified traveller"
                      className="text-xs sm:text-sm"
                      style={{ color: BRAND.gold }}
                    />
                  )}
                </div>
                <p className="mt-0.5 text-xs text-white/70 sm:text-sm">{featured.trip}</p>
              </div>
            </div>
            <StarRating rating={featured.rating} size="text-sm sm:text-base" />
          </div>
        </article>

        {/* Remaining reviews — horizontal swipe on mobile, grid from md up */}
        <div className="mt-6 sm:mt-8">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:grid md:snap-none md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-gray-400 md:hidden">
            Swipe to read more reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;