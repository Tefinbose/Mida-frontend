import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

// Official Google "G" mark, reproduced from Google's published brand
// guidelines (four-color G). Use this instead of a monochrome icon font
// glyph when representing Google specifically, per Google's brand rules.
const GoogleLogo = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    />
    <path
      fill="#34A853"
      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88z"
    />
    <path
      fill="#EA4335"
      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
    />
  </svg>
);

const BRAND = {
  teal: "#1597A8",
  navy: "#123B4A",
  gold: "#D9A441",
};

/**
 * Replace this with real data pulled from the Google Places "Place Details"
 * API (fields: rating, user_ratings_total, reviews[], url) or from your
 * Google Business Profile. Hardcoded names/quotes read as fabricated and
 * undermine the trust this section is meant to build — the whole point of
 * a Google reviews block is that the reviews are independently verifiable.
 *
 * googlePlaceUrl should be the "Write a review" / profile link for your
 * Google Business listing, e.g. https://g.page/r/<your-place-id>/review
 */
const GOOGLE_REVIEWS_DATA = {
  rating: 5.0,
  reviewCount: 128,
  googlePlaceUrl: "https://www.google.com/maps/place/?q=place_id:YOUR_PLACE_ID",
  reviews: [
    {
      author: "Sarah Thomas",
      rating: 5,
      trip: "Dubai Delights",
      relativeTime: "", // fill with the real "X weeks ago" from Google
      text: "Our Dubai vacation with Mida Travel was absolutely fantastic. From airport transfers to hotel bookings and sightseeing tours, everything was perfectly organized.",
    },
    {
      author: "Rajesh Nair",
      rating: 5,
      trip: "Singapore Symphony",
      relativeTime: "",
      text: "Mida Travel made our Singapore trip seamless and enjoyable. The itinerary was well planned, the hotel was excellent and the team's support was outstanding.",
    },
    {
      author: "Aisha Mohammed",
      rating: 5,
      trip: "Bali Blues",
      relativeTime: "",
      text: "Our honeymoon in Bali was everything we dreamed of and more. Beautiful accommodations, smooth transfers and memorable excursions made it unforgettable. Every detail, down to the small welcome gift at our villa, felt considered.",
    },
    {
      author: "Daniel Mathew",
      rating: 5,
      trip: "Magical Maldives",
      relativeTime: "",
      text: "The Maldives package arranged by Mida Travel was amazing. From the luxurious resort to breathtaking ocean views, everything was perfectly coordinated.",
    },
    {
      author: "Priya Menon",
      rating: 5,
      trip: "Thailand Vibes",
      relativeTime: "",
      text: "Our family trip to Thailand was wonderfully organized. The hotels, sightseeing tours and local experiences were excellent.",
    },
    {
      author: "Faisal Rahman",
      rating: 5,
      trip: "Lakshadweep Escape",
      relativeTime: "",
      text: "Mida Travels helped us discover the stunning beauty of Lakshadweep with a perfectly curated travel package. Everything was managed efficiently.",
    },
  ],
};

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
        icon={faStarSolid}
        aria-hidden="true"
        className={index < Math.round(rating) ? "" : "text-gray-200"}
      />
    ))}
  </div>
);

const GoogleReviewCard = ({ review }) => (
  <article className="flex w-[82%] shrink-0 snap-center flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 sm:w-[320px] sm:p-6 md:w-auto md:shrink md:snap-none md:p-7 md:hover:-translate-y-1 md:hover:shadow-lg">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-2">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white sm:h-10 sm:w-10 sm:text-sm"
          style={{ backgroundColor: BRAND.teal }}
          aria-hidden="true"
        >
          {getInitials(review.author)}
        </div>
        <div>
          <h3 className="text-sm font-bold sm:text-base" style={{ color: BRAND.navy }}>
            {review.author}
          </h3>
          <p className="text-xs" style={{ color: BRAND.teal }}>{review.trip}</p>
        </div>
      </div>
      <GoogleLogo className="h-5 w-5" />
    </div>

    <StarRating rating={review.rating} size="mt-3 text-xs" />

    <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-gray-600 sm:mt-4">
      {review.text}
    </p>
  </article>
);

const Testimonials = () => {
  const { rating, reviewCount, googlePlaceUrl, reviews } = GOOGLE_REVIEWS_DATA;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-gray-50 px-6 py-14 sm:py-20 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: BRAND.teal }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm" style={{ color: BRAND.teal }}>
            Memories Made With Mida
          </p>

          <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl" style={{ color: BRAND.navy }}>
            Our Happy Travellers
          </h2>

          <p className="mt-3 text-sm text-gray-600 sm:mt-5 sm:text-base">
            Real experiences from travellers who explored the world with us.
          </p>

          {/* Google rating summary — third-party sourced, verifiable, links out to the live profile */}
          <a
            href={googlePlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-sm transition hover:shadow-md sm:mt-8 sm:gap-4 sm:px-6 sm:py-4"
          >
            <GoogleLogo className="h-7 w-7 sm:h-8 sm:w-8" />
            <div className="h-8 w-px bg-gray-200" aria-hidden="true" />
            <span className="text-2xl font-bold sm:text-3xl" style={{ color: BRAND.navy }}>
              {rating.toFixed(1)}
            </span>
            <div className="text-left">
              <StarRating rating={rating} size="text-xs" />
              <p className="mt-1 text-xs text-gray-500">
                {reviewCount} Google reviews &middot; tap to read them
              </p>
            </div>
          </a>
        </div>

        {/* Individual Google reviews — swipe on mobile, grid from md up */}
        {reviews.length > 0 && (
          <div className="mt-8 sm:mt-14">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:grid md:snap-none md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <GoogleReviewCard key={index} review={review} />
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-gray-400 md:hidden">
              Swipe to read more reviews
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;