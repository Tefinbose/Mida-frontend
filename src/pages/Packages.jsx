import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot, faCheck, faArrowRight, faCircleCheck,
  faMagnifyingGlass, faHeart, faSliders, faPhone, faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const PACKAGES = [
  {
    id: 1, name: "Dubai Delights", location: "Dubai, UAE", region: "Middle East",
    price: "₹19,999",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    description: "Experience the perfect blend of luxury, adventure, culture, and modern attractions with our Dubai Delights package. Discover world-famous landmarks, breathtaking architecture, desert adventures, and vibrant shopping destinations in one of the world's most exciting cities.",
    highlights: ["City sightseeing tours", "Desert safari experiences", "Luxury dhow cruises", "Shopping and entertainment districts", "Family-friendly attractions", "Cultural and heritage experiences"],
  },
  {
    id: 2, name: "Singapore Symphony", location: "Singapore", region: "Southeast Asia",
    price: "₹29,999",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    description: "Discover the harmony of modern innovation, cultural diversity, and natural beauty with our Singapore Symphony package. From futuristic attractions and stunning gardens to world-class shopping and culinary delights, Singapore promises an unforgettable travel experience.",
    highlights: ["City tours and sightseeing", "Theme parks and family attractions", "Marina waterfront experiences", "Shopping and dining adventures", "Gardens and nature attractions", "Cultural heritage districts"],
  },
  {
    id: 3, name: "Thailand Vibes", location: "Thailand", region: "Southeast Asia",
    price: "Contact Us",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    description: "Immerse yourself in the vibrant energy, tropical beauty, and rich traditions of Thailand. Our Thailand Vibes package combines stunning beaches, bustling cities, cultural landmarks, and exciting nightlife to create the perfect holiday experience.",
    highlights: ["Beach escapes and island adventures", "Cultural and temple tours", "Local markets and shopping experiences", "Adventure and water activities", "Nightlife and entertainment", "Authentic Thai cuisine experiences"],
  },
  {
    id: 4, name: "Malaysian Memories", location: "Malaysia", region: "Southeast Asia",
    price: "Contact Us",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    description: "Create lasting memories as you explore the diverse landscapes, modern cities, and cultural treasures of Malaysia. From vibrant urban attractions to lush natural wonders, Malaysia offers the perfect mix of relaxation and discovery.",
    highlights: ["City sightseeing experiences", "Cultural and heritage attractions", "Nature and wildlife encounters", "Family entertainment destinations", "Shopping and culinary tours", "Island and beach getaways"],
  },
  {
    id: 5, name: "Bali Blues", location: "Bali, Indonesia", region: "Southeast Asia",
    price: "Contact Us",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    description: "Escape to the tropical paradise of Bali, where breathtaking beaches, lush landscapes, spiritual traditions, and luxury experiences come together. Our Bali Blues package is perfect for honeymooners, couples, families, and travelers seeking tranquility and adventure.",
    highlights: ["Beach and resort stays", "Temple and cultural tours", "Scenic countryside experiences", "Water sports and adventure activities", "Wellness and spa experiences", "Romantic getaway opportunities"],
  },
  {
    id: 6, name: "Serene Sri Lanka", location: "Sri Lanka", region: "South Asia",
    price: "Contact Us",
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80",
    description: "Discover the timeless beauty of Sri Lanka through a journey filled with pristine beaches, rolling hills, ancient heritage, and incredible wildlife. Our Serene Sri Lanka package showcases the best of this island paradise.",
    highlights: ["Heritage and cultural excursions", "Scenic hill country experiences", "Wildlife and nature tours", "Beach relaxation opportunities", "Tea plantation visits", "Local cuisine and cultural immersion"],
  },
  {
    id: 7, name: "Magical Maldives", location: "Maldives", region: "Indian Ocean",
    price: "Contact Us",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    description: "Step into a world of crystal-clear waters, white sandy beaches, and luxurious island escapes with our Magical Maldives package. Perfect for honeymooners, couples, families, and luxury travelers, the Maldives offers unmatched serenity and natural beauty.",
    highlights: ["Luxury island resort stays", "Overwater villa experiences", "Snorkeling and diving adventures", "Sunset cruises and excursions", "Romantic getaway packages", "Water sports and leisure activities"],
  },
  {
    id: 8, name: "Wild Wild Africa", location: "Africa", region: "Africa",
    price: "Contact Us",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    description: "Embark on an extraordinary journey through Africa's breathtaking landscapes, diverse cultures, and incredible wildlife. Our Wild Wild Africa package offers unforgettable adventures across some of the continent's most remarkable destinations.",
    highlights: ["Wildlife safari adventures", "National parks and nature reserves", "Scenic landscapes and natural wonders", "Cultural and heritage experiences", "Luxury lodge accommodations", "Adventure and exploration activities"],
  },
  {
    id: 9, name: "Indian Melody", location: "India", region: "South Asia",
    price: "Contact Us",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    description: "Celebrate the incredible diversity, culture, history, and natural beauty of India with our Indian Melody package. From majestic monuments and vibrant cities to serene backwaters and breathtaking mountain landscapes, India offers a travel experience like no other.",
    highlights: ["Cultural and heritage tours", "Historical monuments and landmarks", "Spiritual and pilgrimage destinations", "Hill stations and scenic retreats", "Beach and nature experiences", "Authentic local cuisine and traditions"],
  },
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "name-asc", label: "Name: A to Z" },
];

const REGIONS = ["All", ...new Set(PACKAGES.map((p) => p.region))];
const WHATSAPP_NUMBER = "2345654586";
const CALL_NUMBER = "+5645123645";
const parsePrice = (p) => p === "Contact Us" ? Infinity : Number(p.replace(/[^\d]/g, ""));
const contactClass = "flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all duration-300";

const PackageCard = ({ pkg, index, favorite, imageLoaded, onFavorite, onImageLoad, onOpen }) => (
  <motion.article
    initial={{ opacity: 0, y: 35, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8 }}
    className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl"
  >
    <div className="relative h-60 overflow-hidden bg-gray-100">
      {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
      <img
        src={pkg.image}
        alt={pkg.name}
        onLoad={onImageLoad}
        className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#123B4A] shadow-sm backdrop-blur-sm">
        <FontAwesomeIcon icon={faLocationDot} className="text-[#1597A8]" />
        {pkg.location}
      </div>

      <motion.button
        type="button"
        onClick={(e) => { e.stopPropagation(); onFavorite(); }}
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.1 }}
        aria-label={favorite ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm"
      >
        <FontAwesomeIcon icon={faHeart} className={`transition-all duration-300 ${favorite ? "scale-110 text-rose-500" : "text-gray-300"}`} />
      </motion.button>

      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white sm:text-2xl">{pkg.name}</h3>
    </div>

    <div className="p-5">
      <p className="line-clamp-3 text-sm leading-6 text-gray-600">{pkg.description}</p>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Starting From</p>
          <h4 className="mt-1 text-lg font-bold text-[#123B4A]">{pkg.price}</h4>
          {pkg.price !== "Contact Us" && <p className="text-xs text-gray-400">Per Person</p>}
        </div>

        <motion.button
          type="button"
          onClick={() => onOpen(pkg)}
          whileHover={{ scale: 1.08, rotate: -3 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1597A8] text-white transition-colors duration-300 hover:bg-[#123B4A]"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </motion.button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <a href={`tel:${CALL_NUMBER}`} className={`${contactClass} border border-gray-200 text-[#123B4A] hover:border-[#1597A8] hover:bg-[#1597A8] hover:text-white`}>
          <FontAwesomeIcon icon={faPhone} /> Call
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Mida Travels, I'm interested in the ${pkg.name} package.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${contactClass} bg-[#123B4A] text-white hover:bg-[#1597A8]`}
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-base" /> WhatsApp
        </a>
      </div>
    </div>
  </motion.article>
);

const Filters = ({ query, setQuery, region, setRegion, sortBy, setSortBy }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-8 space-y-4 rounded-2xl bg-white p-4 shadow-sm sm:p-5"
  >
    <div className="flex flex-col gap-3 md:flex-row">
      <div className="relative flex-1">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search destination or country..."
          className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#1597A8] focus:ring-2 focus:ring-[#1597A8]/20"
        />
      </div>

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faSliders} className="text-gray-400" />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1597A8] md:w-auto"
        >
          {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {REGIONS.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setRegion(item)}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm ${region === item ? "bg-[#123B4A] text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-[#1597A8]/10 hover:text-[#123B4A]"}`}
        >
          {item}
        </button>
      ))}
    </div>
  </motion.div>
);

const PackageModal = ({ pkg, closing, onClose }) => {
  if (!pkg) return null;

  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Mida Travels, I'm interested in the ${pkg.name} package.`)}`;

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white"
          >
            <div className="relative h-56 sm:h-64">
              <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#123B4A] shadow-md transition hover:rotate-90"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1597A8]">{pkg.location}</p>
              <h2 className="mt-2 text-3xl font-bold text-[#123B4A]">{pkg.name}</h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">{pkg.description}</p>

              <div className="mt-5 rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Package Starting From</p>
                <h3 className="mt-1 text-2xl font-bold text-[#1597A8]">{pkg.price}</h3>
                {pkg.price !== "Contact Us" && <p className="text-xs text-gray-500">Per Person</p>}
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#123B4A]">Package Highlights</h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faCircleCheck} className="mt-0.5 text-[#1597A8]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 rounded-xl border border-[#123B4A] py-3 font-semibold text-[#123B4A] transition hover:bg-[#123B4A] hover:text-white">
                  <FontAwesomeIcon icon={faPhone} /> Call Us
                </a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#1597A8] py-3 font-semibold text-white transition hover:bg-[#123B4A]">
                  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                </a>
              </div>

              <button
                type="button"
                onClick={() => { onClose(); window.location.href = "/contact"; }}
                className="mt-2 w-full rounded-xl bg-[#123B4A] py-3 font-semibold text-white transition hover:bg-[#1597A8]"
              >
                Enquire About This Package
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const WhyChoose = () => {
  const reasons = [
    "Carefully crafted itineraries", "Comfortable accommodation options",
    "Expert travel planning and support", "Customizable holiday experiences",
    "Visa assistance and travel guidance", "Competitive pricing with exceptional value",
    "Dedicated customer support throughout your journey",
  ];

  return (
   <section className="bg-[#F4F9F9] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Travel With Confidence
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#123B4A] sm:text-4xl md:text-5xl">
            Why Choose Our Packages?
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            Every journey is carefully designed for comfort, convenience,
            unforgettable experiences, and exceptional value.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#1597A8]/30 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1597A8] text-sm text-white transition-transform duration-300 group-hover:scale-110">
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <p className="text-sm font-medium text-gray-700">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Packages = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState(new Set());
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const toggleFavorite = (id) => setFavorites((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const filteredPackages = useMemo(() => {
    const search = query.toLowerCase().trim();
    const result = PACKAGES.filter((p) =>
      (region === "All" || p.region === region) &&
      (!search || p.name.toLowerCase().includes(search) || p.location.toLowerCase().includes(search))
    );

    return sortBy === "price-asc"
      ? result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
      : sortBy === "name-asc"
        ? result.sort((a, b) => a.name.localeCompare(b.name))
        : result;
  }, [query, region, sortBy]);

  const openPackage = (pkg) => {
    setIsModalClosing(false);
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedPackage(null);
      setIsModalClosing(false);
    }, 200);
  };

  useEffect(() => {
    if (!selectedPackage) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPackage]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#123B4A] px-5 py-24 text-white sm:px-6 sm:py-28 lg:px-8">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#123B4A]/70" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#1597A8]/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#20B7C8] sm:text-sm">Explore The World</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">Travel Packages</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7">
            Discover unforgettable destinations with carefully curated travel experiences designed to create memories that last a lifetime.
          </p>
        </motion.div>
      </section>

      {/* PACKAGES */}
      <section className="bg-gray-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center sm:mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1597A8] sm:text-sm">Our Best Packages</p>
            <h2 className="mt-3 text-3xl font-bold text-[#123B4A] sm:text-4xl md:text-5xl">Find Your Perfect Journey</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600">
              From luxury escapes and romantic honeymoons to adventure trips and family vacations, we have the perfect journey waiting for you.
            </p>
          </motion.div>

          <Filters {...{ query, setQuery, region, setRegion, sortBy, setSortBy }} />

          <p className="mb-5 text-xs text-gray-500 sm:text-sm">
            Showing {filteredPackages.length} of {PACKAGES.length} packages
            {favorites.size > 0 && ` · ${favorites.size} saved to your wishlist`}
          </p>

          {filteredPackages.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPackages.map((pkg, index) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  index={index}
                  favorite={favorites.has(pkg.id)}
                  imageLoaded={loadedImages.has(pkg.id)}
                  onFavorite={() => toggleFavorite(pkg.id)}
                  onImageLoad={() => setLoadedImages((prev) => new Set(prev).add(pkg.id))}
                  onOpen={openPackage}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-white p-12 text-center shadow-sm"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl text-gray-300" />
              <h3 className="mt-4 font-bold text-[#123B4A]">No packages match your search</h3>
              <p className="mt-2 text-sm text-gray-500">Try a different destination or clear your filters.</p>
              <button
                type="button"
                onClick={() => { setQuery(""); setRegion("All"); setSortBy("featured"); }}
                className="mt-5 rounded-full bg-[#1597A8] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#123B4A]"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <WhyChoose />

      <PackageModal
        pkg={selectedPackage}
        closing={isModalClosing}
        onClose={closeModal}
      />
    </>
  );
};

export default Packages;