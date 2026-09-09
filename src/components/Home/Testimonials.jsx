import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const BRAND = {
  teal: "#1597A8",
  navy: "#123B4A",
};

const testimonials = [
  {
    id: "sarah-thomas",
    name: "Sarah Thomas",
    trip: "Dubai Delights",
    rating: 5,
    text: "Our Dubai vacation with Mida Travel was absolutely fantastic. From airport transfers to hotel bookings and sightseeing tours, everything was perfectly organized.",
  },
  {
    id: "rajesh-nair",
    name: "Rajesh Nair",
    trip: "Singapore Symphony",
    rating: 5,
    text: "Mida Travel made our Singapore trip seamless and enjoyable. The itinerary was well planned, the hotel was excellent and the team's support was outstanding.",
  },
  {
    id: "aisha-mohammed",
    name: "Aisha Mohammed",
    trip: "Bali Blues",
    rating: 5,
    text: "Our honeymoon in Bali was everything we dreamed of and more. Beautiful accommodations, smooth transfers and memorable excursions made it unforgettable.",
  },
  {
    id: "daniel-mathew",
    name: "Daniel Mathew",
    trip: "Magical Maldives",
    rating: 5,
    text: "The Maldives package arranged by Mida Travel was amazing. From the luxurious resort to breathtaking ocean views, everything was perfectly coordinated.",
  },
  {
    id: "priya-menon",
    name: "Priya Menon",
    trip: "Thailand Vibes",
    rating: 5,
    text: "Our family trip to Thailand was wonderfully organized. The hotels, sightseeing tours and local experiences were excellent.",
  },
  {
    id: "faisal-rahman",
    name: "Faisal Rahman",
    trip: "Lakshadweep Escape",
    rating: 5,
    text: "Mida Travels helped us discover the stunning beauty of Lakshadweep with a perfectly curated travel package. Everything was managed efficiently.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const StarRating = ({ rating }) => (
  <div
    className="mt-5 flex gap-1 text-yellow-400"
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
  const { name, trip, text, rating } = testimonial;

  return (
    <article className="flex flex-col rounded-2xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <FontAwesomeIcon
        icon={faQuoteLeft}
        aria-hidden="true"
        className="text-3xl"
        style={{ color: BRAND.teal }}
      />

      <StarRating rating={rating} />

      <p className="mt-5 line-clamp-5 flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;{text}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t pt-5">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: BRAND.teal }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </div>

        <div>
          <h3 className="font-bold" style={{ color: BRAND.navy }}>
            {name}
          </h3>
          <p className="mt-0.5 text-sm" style={{ color: BRAND.teal }}>
            {trip}
          </p>
        </div>
      </div>
    </article>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-gray-50 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
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
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;  