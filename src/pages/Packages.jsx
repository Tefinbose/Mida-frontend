import { useEffect, useMemo, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faCheck,
  faPlane,
  faArrowRight,
  faCircleCheck,
  faMagnifyingGlass,
  faHeart,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const PACKAGES = [
  {
    id: 1,
    name: "Dubai Delights",
    location: "Dubai, UAE",
    region: "Middle East",
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
    region: "Southeast Asia",
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
    region: "Southeast Asia",
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
    region: "Southeast Asia",
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
    region: "Southeast Asia",
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
    region: "South Asia",
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
    region: "Indian Ocean",
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
    region: "Africa",
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
    region: "South Asia",
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

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "name-asc", label: "Name: A to Z" },
];

const REGIONS = (() => {
  const seen = new Set();
  const regions = ["All"];
  PACKAGES.forEach((pkg) => {
    if (!seen.has(pkg.region)) {
      seen.add(pkg.region);
      regions.push(pkg.region);
    }
  });
  return regions;
})();

const parsePrice = (price) =>
  price === "Contact Us" ? Infinity : Number(price.replace(/[^\d]/g, ""));

const Packages = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState(() => new Set());
  const [loadedImages, setLoadedImages] = useState(() => new Set());
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [heroInView, setHeroInView] = useState(false);
  const [whyChooseInView, setWhyChooseInView] = useState(false);

  const heroRef = useRef(null);
  const whyChooseRef = useRef(null);

  // One shared IntersectionObserver setup for the two section-level
  // reveal animations — no per-item hooks needed.
  useEffect(() => {
    const heroNode = heroRef.current;
    const whyChooseNode = whyChooseRef.current;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroInView(true);
          heroObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const whyChooseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyChooseInView(true);
          whyChooseObserver.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    if (heroNode) heroObserver.observe(heroNode);
    if (whyChooseNode) whyChooseObserver.observe(whyChooseNode);

    return () => {
      heroObserver.disconnect();
      whyChooseObserver.disconnect();
    };
  }, []);

  // Escape key + body scroll lock while the modal is open
  useEffect(() => {
    if (!selectedPackage) return undefined;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPackage]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const markImageLoaded = (id) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  const openPackage = (pkg) => {
    setIsModalClosing(false);
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    window.setTimeout(() => {
      setSelectedPackage(null);
      setIsModalClosing(false);
    }, 200);
  };

  const filteredPackages = useMemo(() => {
    let result = PACKAGES.filter((pkg) => {
      const matchesRegion = region === "All" || pkg.region === region;
      const matchesQuery =
        query.trim() === "" ||
        pkg.name.toLowerCase().includes(query.toLowerCase()) ||
        pkg.location.toLowerCase().includes(query.toLowerCase());
      return matchesRegion && matchesQuery;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );
    } else if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [query, region, sortBy]);

  // Changing this key remounts the grid, replaying the entrance
  // animation whenever search/filter/sort changes.
  const gridKey = `${query}-${region}-${sortBy}`;

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#123B4A] px-6 py-28 text-white lg:px-8"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className={`relative mx-auto max-w-7xl text-center motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none ${
            heroInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
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

          {/* SEARCH + FILTER TOOLBAR */}
          <div className="mb-10 space-y-5 rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by destination or country..."
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-[#1597A8] focus:ring-2 focus:ring-[#1597A8]/20"
                />
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faSliders} className="text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort packages"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#1597A8]"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  aria-pressed={region === r}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    region === r
                      ? "bg-[#123B4A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-6 text-sm text-gray-500">
            Showing {filteredPackages.length} of {PACKAGES.length} packages
            {favorites.size > 0 &&
              ` · ${favorites.size} saved to your wishlist`}
          </p>

          {/* PACKAGES GRID */}
          {filteredPackages.length > 0 ? (
            <div key={gridKey} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPackages.map((item, index) => {
                const isFavorite = favorites.has(item.id);
                const isImageLoaded = loadedImages.has(item.id);

                return (
                  <div
                    key={item.id}
                    style={{
                      animationDelay: `${(index % 6) * 70}ms`,
                    }}
                    className="group motion-safe:animate-[fadeInUp_0.6s_ease-out_backwards] motion-reduce:animate-none overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* IMAGE */}
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      {!isImageLoaded && (
                        <div className="absolute inset-0 animate-pulse bg-gray-200" />
                      )}

                      <img
                        src={item.image}
                        alt={item.name}
                        onLoad={() => markImageLoaded(item.id)}
                        className={`h-full w-full object-cover transition duration-700 group-hover:scale-110 ${
                          isImageLoaded ? "opacity-100" : "opacity-0"
                        }`}
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

                      {/* FAVORITE */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        aria-label={
                          isFavorite ? "Remove from wishlist" : "Add to wishlist"
                        }
                        aria-pressed={isFavorite}
                        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm transition hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={`transition-transform ${
                            isFavorite ? "scale-110 text-rose-500" : "text-gray-300"
                          }`}
                        />
                      </button>

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

                      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400">
                            Starting From
                          </p>
                          <h4 className="mt-1 text-xl font-bold text-[#123B4A]">
                            {item.price}
                          </h4>
                          {item.price !== "Contact Us" && (
                            <p className="text-xs text-gray-400">Per Person</p>
                          )}
                        </div>

                        <button
                          onClick={() => openPackage(item)}
                          aria-label={`View details for ${item.name}`}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1597A8] text-white transition duration-300 hover:bg-[#123B4A]"
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-16 text-center shadow-sm">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-4xl text-gray-300"
              />
              <h3 className="mt-5 text-xl font-bold text-[#123B4A]">
                No packages match your search
              </h3>
              <p className="mt-2 text-gray-500">
                Try a different destination or clear your filters.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setRegion("All");
                }}
                className="mt-6 rounded-full bg-[#1597A8] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123B4A]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section
        ref={whyChooseRef}
        className="bg-[#123B4A] px-6 py-20 text-white lg:px-8 lg:py-28"
      >
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
                key={item}
                style={{
                  transitionDelay: whyChooseInView ? `${index * 80}ms` : "0ms",
                }}
                className={`flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none ${
                  whyChooseInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1597A8]">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <p className="pt-2 font-medium text-gray-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-20 text-center lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <FontAwesomeIcon icon={faPlane} className="text-5xl text-[#1597A8]" />

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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#123B4A] px-8 py-4 font-semibold text-white transition duration-300 hover:gap-4 hover:bg-[#1597A8]"
          >
            Explore Our Packages
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>

      {/* PACKAGE MODAL */}
      {selectedPackage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="package-modal-title"
          onClick={closeModal}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 motion-safe:transition-opacity motion-safe:duration-200 ${
            isModalClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white motion-safe:transition-all motion-safe:duration-200 motion-reduce:transition-none ${
              isModalClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {/* IMAGE */}
            <div className="relative h-64">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="h-full w-full object-cover"
              />

              <button
                onClick={closeModal}
                autoFocus
                aria-label="Close dialog"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#123B4A] transition hover:rotate-90 motion-safe:duration-300"
              >
                ×
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1597A8]">
                {selectedPackage.location}
              </p>

              <h2
                id="package-modal-title"
                className="mt-3 text-3xl font-bold text-[#123B4A]"
              >
                {selectedPackage.name}
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                {selectedPackage.description}
              </p>

              {/* PRICE */}
              <div className="mt-6 rounded-xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">Package Starting From</p>
                <h3 className="mt-2 text-3xl font-bold text-[#1597A8]">
                  {selectedPackage.price}
                </h3>
                {selectedPackage.price !== "Contact Us" && (
                  <p className="text-sm text-gray-500">Per Person</p>
                )}
              </div>

              {/* HIGHLIGHTS */}
              <h3 className="mt-8 text-2xl font-bold text-[#123B4A]">
                Package Highlights
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {selectedPackage.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    style={{ animationDelay: `${index * 60}ms` }}
                    className="flex motion-safe:animate-[fadeIn_0.4s_ease-out_backwards] motion-reduce:animate-none items-start gap-3"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="mt-1 text-[#1597A8]"
                    />
                    <p className="text-gray-600">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => {
                  closeModal();
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