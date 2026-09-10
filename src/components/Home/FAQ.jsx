import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const faqs = [
  {
    question: "How do I book a travel package with Mida Travels?",
    answer:
      "You can contact our travel experts through our website, phone, or WhatsApp. Our team will help you choose the right destination and package based on your travel preferences and budget.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes. We offer customized travel packages based on your preferred destinations, travel dates, accommodation choices, activities, and budget.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes. Mida Travels provides visa processing and travel documentation assistance. Our team guides you through the required documents and application process.",
  },
  {
    question: "Do your packages include flights and hotels?",
    answer:
      "Package inclusions depend on the selected travel package. Many packages can include flights, hotels, sightseeing, transfers, and other travel services.",
  },
  {
    question: "Can I book packages for groups or families?",
    answer:
      "Yes. We organize travel experiences for families, friends, corporate teams, educational groups, and other group travellers.",
  },
  {
    question: "Do you provide international and domestic packages?",
    answer:
      "Yes. Mida Travels offers both international and domestic travel packages to a variety of destinations.",
  },
  {
    question: "Can you help with hotel bookings?",
    answer:
      "Yes. We provide hotel and resort booking assistance and help you find accommodation that matches your preferences and budget.",
  },
  {
    question: "How can I contact Mida Travels?",
    answer:
      "You can contact us through our Contact page, phone number, email, or WhatsApp. Our travel experts will be happy to assist you with your journey.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7fafb] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1597A8]">
            Need Help?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
            Frequently Asked
            <span className="block text-[#1597A8]">Questions</span>
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            Find answers to common questions about our travel packages,
            bookings, visa assistance, and travel services.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  isOpen
                    ? "border-[#1597A8] bg-white shadow-lg"
                    : "border-gray-200 bg-white hover:border-[#1597A8]/50 hover:shadow-md"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span
                    className={`text-base font-semibold transition md:text-lg ${
                      isOpen ? "text-[#1597A8]" : "text-[#123B4A]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Animated Icon */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-[#1597A8] text-white"
                        : "bg-[#123B4A] text-white"
                    }`}
                  >
                    <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
                  </motion.div>
                </button>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                        <p className="leading-relaxed text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-[#123B4A] px-6 py-10 text-center text-white sm:px-8 sm:py-12"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#1597A8]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#20B7C8]/10 blur-3xl" />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20B7C8]">
              Need Help Planning?
            </p>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              Still Have Questions?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              Our travel experts are ready to help you plan your perfect
              journey. Get in touch with us and let's start planning your next
              adventure.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {/* Contact Us */}
              <Link
                to="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#1597A8] px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#20B7C8] hover:shadow-lg hover:shadow-[#1597A8]/20"
              >
                <span className="relative block overflow-hidden">
                  {/* Normal */}
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                    Contact Us
                  </span>

                  {/* Hover */}
                  <span className="absolute left-0 top-full block w-full transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                    Contact Us
                  </span>
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/91234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-base transition-transform duration-300 group-hover:scale-110"
                />

                <span>WhatsApp Us</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Small trust text */}
            <p className="mt-5 text-[10px] text-white/40 sm:text-xs">
              Quick response • Personalized assistance • No obligation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
