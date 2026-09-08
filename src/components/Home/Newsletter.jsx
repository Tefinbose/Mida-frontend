import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    alert("Thank you for subscribing to Mida Travels!");

    setEmail("");
  };

  return (
    <section className="bg-[#1597A8] px-6 py-20 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row">
        
        {/* Content */}
        <div className="max-w-xl text-center text-white lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Planning Your Next Getaway?
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Discover A Whole New World With Mida Travels
          </h2>

          <p className="mt-4 text-white/80">
            Subscribe to receive travel inspiration, special offers and the
            latest updates from Mida Travels.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full bg-white px-6 py-4 text-gray-700 outline-none"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-[#123B4A] px-6 py-4 font-semibold text-white transition hover:bg-black"
          >
            Subscribe

            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;