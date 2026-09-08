import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    question: "What services does Mida Travels offer?",
    answer:
      "Mida Travels provides international and domestic tour packages, visa assistance, hotel reservations, group tours, destination weddings, luxury holidays, travel insurance, airport transfers and car rental services.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes. We create personalized travel experiences based on your budget, interests, travel dates and preferred destinations.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes. We provide professional visa processing support including guidance for documentation, application procedures and submission requirements.",
  },
  {
    question: "How early should I book my holiday package?",
    answer:
      "We recommend booking at least 4 to 8 weeks in advance for international travel and 2 to 4 weeks in advance for domestic trips.",
  },
  {
    question: "Are flights included in your tour packages?",
    answer:
      "Flight inclusion depends on the selected package. We offer both land-only packages and complete packages that include flights, accommodation, transfers and sightseeing.",
  },
  {
    question: "Do you arrange honeymoon packages?",
    answer:
      "Yes. We offer specially curated honeymoon packages to destinations such as Maldives, Bali, Dubai, Thailand, Singapore and Sri Lanka.",
  },
  {
    question: "Do you provide travel insurance?",
    answer:
      "Yes. We can arrange travel insurance coverage for unexpected situations such as medical emergencies, trip cancellations, delays and lost baggage.",
  },
  {
    question: "Can you arrange group tours and corporate travel?",
    answer:
      "Yes. We organize group tours for families, educational institutions, corporate teams and organizations.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Find answers to some of the most common questions about travelling
            with Mida Travels.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
              >
                <span className="font-semibold text-[#123B4A]">
                  {faq.question}
                </span>

                <FontAwesomeIcon
                  icon={
                    openIndex === index
                      ? faChevronUp
                      : faChevronDown
                  }
                  className="shrink-0 text-[#1597A8]"
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-6 py-5 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;