const PolicyLayout = ({ title, subtitle, children }) => {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#123B4A] px-6 py-24 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Mida Travels
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10 lg:p-14">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyLayout;