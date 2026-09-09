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

const VerifiedTag = () => (
  <span
    className="inline-flex items-center gap-1 text-xs font-medium"
    style={{ color: BRAND.teal }}
  >
    <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />
    Verified traveller
  </span>
);

const TestimonialCard = ({ testimonial }) => {
  const { name, trip, text, rating, verified } = testimonial;

  return (
    <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          aria-hidden="true"
          className="text-2xl opacity-20"
          style={{ color: BRAND.navy }}
        />
        <StarRating rating={rating} />
      </div>

      <p className="mt-5 line-clamp-5 flex-1 text-sm leading-relaxed text-gray-600">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: BRAND.teal }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold" style={{ color: BRAND.navy }}>
              {name}
            </h3>
            {verified && (
              <FontAwesomeIcon
                icon={faCircleCheck}
                aria-hidden="true"
                title="Verified traveller"
                className="text-sm"
                style={{ color: BRAND.teal }}
              />
            )}
          </div>
          <p className="mt-0.5 text-sm" style={{ color: BRAND.teal }}>
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
      className="relative overflow-hidden bg-gray-50 px-6 py-24 lg:px-8"
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
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: BRAND.teal }}
          >
            Memories Made With Mida
          </p>

          <h2
            id="testimonials-heading"
            className="mt-4 text-4xl font-bold md:text-5xl"
            style={{ color: BRAND.navy }}
          >
            Our Happy Travellers
          </h2>

          <p className="mt-5 text-gray-600">
            Real experiences from travellers who explored the world with us.
          </p>

          {/* Ratings summary — built from the testimonials data itself, not a separate invented stat */}
          <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm">
            <span
              className="text-3xl font-bold"
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

        {/* Featured testimonial — a single larger quote instead of every review carrying equal visual weight */}
        <article className="relative mt-14 overflow-hidden rounded-3xl px-8 py-10 sm:px-14 sm:py-14" style={{ backgroundColor: BRAND.navy }}>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            aria-hidden="true"
            className="text-5xl opacity-10"
            style={{ color: "#fff" }}
          />

          <p className="mt-4 max-w-3xl text-xl font-medium leading-relaxed text-white sm:text-2xl">
            {featured.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: BRAND.teal }}
                aria-hidden="true"
              >
                {getInitials(featured.name)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white">{featured.name}</h3>
                  {featured.verified && (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      aria-hidden="true"
                      title="Verified traveller"
                      className="text-sm"
                      style={{ color: BRAND.gold }}
                    />
                  )}
                </div>
                <p className="mt-0.5 text-sm text-white/70">{featured.trip}</p>
              </div>
            </div>
            <StarRating rating={featured.rating} size="text-base" />
          </div>
        </article>

        {/* Remaining reviews */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;