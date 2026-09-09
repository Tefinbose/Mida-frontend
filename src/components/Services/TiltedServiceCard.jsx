import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const TiltedServiceCard = ({ service, number }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex h-full min-h-[310px] flex-col overflow-hidden border border-[#d9e5e7] bg-white p-7 transition-transform duration-200 ease-out md:p-8"
      >
        {/* Top line */}

        <div className="absolute left-0 top-0 h-[3px] w-full bg-[#123B4A]" />

        {/* Number */}

        <div className="flex items-start justify-between">
          <span className="text-4xl font-light text-[#dcebed]">
            {number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center bg-[#e8f5f7] text-[#1597A8]">
            <FontAwesomeIcon
              icon={service.icon}
              className="text-xl"
            />
          </div>
        </div>

        {/* Content */}

        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#123B4A]">
            {service.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            {service.description}
          </p>
        </div>

        {/* Bottom */}

        <div className="mt-auto pt-8">
          <div className="h-px w-10 bg-[#1597A8]" />

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#123B4A]">
            Explore Service

            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs text-[#1597A8]"
            />
          </div>
        </div>

        {/* Subtle light */}

        <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#1597A8]/5" />
      </div>
    </motion.article>
  );
};

export default TiltedServiceCard;