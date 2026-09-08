import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ service }) => {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1597A8]/10 text-3xl text-[#1597A8] transition duration-300 group-hover:bg-[#1597A8] group-hover:text-white">
        <FontAwesomeIcon icon={service.icon} />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-[#123B4A]">
        {service.title}
      </h2>

      {/* Description */}
      <p className="mt-4 leading-relaxed text-gray-600">
        {service.description}
      </p>

      {/* Details */}
      <p className="mt-4 text-sm leading-relaxed text-gray-500">
        {service.details}
      </p>

      {/* Features */}
      <div className="mt-6">
        <h3 className="mb-4 font-semibold text-[#123B4A]">
          What's Included
        </h3>

        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm text-gray-600"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1597A8]/10 text-xs text-[#1597A8]">
                <FontAwesomeIcon icon={faCheck} />
              </span>

              {feature}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ServiceCard;