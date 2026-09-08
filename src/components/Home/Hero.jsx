import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1920&q=85"
        alt="Travel destination"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#082B3A]/90 via-[#082B3A]/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 lg:px-8">

        <div className="max-w-3xl text-white">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#20B7C8]">
            Discover A Different World
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            Your Next Great Journey Begins Here
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200">
            Explore dreamy destinations and create unforgettable memories with
            Mida Travels.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              to="/destinations"
              className="rounded-full bg-[#1597A8] px-7 py-3 font-semibold text-white transition hover:bg-[#20B7C8]"
            >
              Explore Destinations
            </Link>

            <Link
              to="/packages"
              className="rounded-full border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-[#082B3A]"
            >
              View Packages
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;