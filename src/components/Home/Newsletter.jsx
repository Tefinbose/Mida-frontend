// import { useState } from "react";
// import { motion } from "motion/react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPaperPlane,
//   faEnvelope,
//   faArrowRight,
// } from "@fortawesome/free-solid-svg-icons";

// const Newsletter = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email) {
//       alert("Please enter your email address.");
//       return;
//     }

//     alert("Thank you for subscribing to Mida Travels!");

//     setEmail("");
//   };

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: {
//       opacity: 0,
//       y: 30,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#1597A8] px-6 py-20 lg:px-8 lg:py-24">

//       {/* =====================================================
//           BACKGROUND DECORATION
//       ====================================================== */}

//       {/* Large Left Glow */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.7 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2 }}
//         className="
//           absolute
//           -left-32
//           -top-32
//           h-80
//           w-80
//           rounded-full
//           bg-[#20B7C8]/30
//           blur-3xl
//         "
//       />

//       {/* Large Right Glow */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.7 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 1.2,
//           delay: 0.2,
//         }}
//         className="
//           absolute
//           -bottom-40
//           -right-32
//           h-96
//           w-96
//           rounded-full
//           bg-[#123B4A]/30
//           blur-3xl
//         "
//       />

//       {/* Decorative Circle */}
//       <motion.div
//         animate={{
//           y: [0, -15, 0],
//           rotate: [0, 5, 0],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           right-[15%]
//           top-10
//           hidden
//           h-20
//           w-20
//           rounded-full
//           border
//           border-white/10
//           lg:block
//         "
//       />

//       {/* Decorative Circle */}
//       <motion.div
//         animate={{
//           y: [0, 12, 0],
//           rotate: [0, -5, 0],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           bottom-10
//           left-[10%]
//           hidden
//           h-12
//           w-12
//           rounded-full
//           border
//           border-white/10
//           lg:block
//         "
//       />

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div className="relative z-10 mx-auto max-w-6xl">

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           className="
//             flex
//             flex-col
//             items-center
//             justify-between
//             gap-10
//             lg:flex-row
//             lg:gap-16
//           "
//         >

//           {/* =================================================
//               CONTENT
//           ================================================== */}

//           <div className="max-w-xl text-center text-white lg:text-left">

//             {/* Envelope Icon */}
//             <motion.div
//               variants={fadeUp}
//               className="flex justify-center lg:justify-start"
//             >
//               <motion.div
//                 whileHover={{
//                   scale: 1.08,
//                   rotate: 5,
//                 }}
//                 transition={{ duration: 0.25 }}
//                 className="
//                   flex
//                   h-16
//                   w-16
//                   items-center
//                   justify-center
//                   rounded-2xl
//                   border
//                   border-white/20
//                   bg-white/10
//                   text-2xl
//                   shadow-lg
//                   backdrop-blur-sm
//                 "
//               >
//                 <motion.div
//                   animate={{
//                     y: [0, -4, 0],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FontAwesomeIcon icon={faEnvelope} />
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             {/* Small Heading */}
//             <motion.p
//               variants={fadeUp}
//               className="
//                 mt-6
//                 text-xs
//                 font-semibold
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/80
//               "
//             >
//               Planning Your Next Getaway?
//             </motion.p>

//             {/* Main Heading */}
//             <motion.h2
//               variants={fadeUp}
//               className="
//                 mt-3
//                 text-3xl
//                 font-bold
//                 leading-tight
//                 md:text-4xl
//                 lg:text-5xl
//               "
//             >
//               Discover A Whole New World With Mida Travels
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//               variants={fadeUp}
//               className="
//                 mt-5
//                 max-w-lg
//                 text-sm
//                 leading-7
//                 text-white/75
//                 md:text-base
//               "
//             >
//               Subscribe to receive travel inspiration, special offers and the
//               latest updates from Mida Travels.
//             </motion.p>

//           </div>

//           {/* =================================================
//               NEWSLETTER FORM
//           ================================================== */}

//           <motion.div
//             variants={fadeUp}
//             className="w-full max-w-md"
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="
//                 rounded-3xl
//                 border
//                 border-white/15
//                 bg-white/10
//                 p-3
//                 shadow-[0_20px_60px_rgba(18,59,74,0.18)]
//                 backdrop-blur-md
//               "
//             >

//               {/* Input */}
//               <div className="relative">

//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="
//                     absolute
//                     left-5
//                     top-1/2
//                     -translate-y-1/2
//                     text-gray-400
//                   "
//                 />

//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="
//                     w-full
//                     rounded-2xl
//                     border
//                     border-white/10
//                     bg-white
//                     py-4
//                     pl-12
//                     pr-5
//                     text-sm
//                     text-gray-700
//                     outline-none
//                     transition
//                     duration-300
//                     placeholder:text-gray-400
//                     focus:border-[#20B7C8]
//                     focus:ring-4
//                     focus:ring-[#20B7C8]/20
//                   "
//                 />

//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="
//                   group
//                   mt-3
//                   flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-2xl
//                   bg-[#123B4A]
//                   px-6
//                   py-4
//                   font-semibold
//                   text-white
//                   transition-all
//                   duration-300
//                   hover:bg-[#0d2e3a]
//                   hover:shadow-lg
//                   active:scale-[0.98]
//                 "
//               >
//                 <span>Subscribe</span>

//                 <FontAwesomeIcon
//                   icon={faPaperPlane}
//                   className="
//                     text-sm
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                     group-hover:-translate-y-1
//                   "
//                 />
//               </button>

//             </form>

//             {/* Privacy Text */}
//             <p className="mt-4 text-center text-xs text-white/60">
//               No spam. Just travel inspiration and exclusive offers.
//             </p>

//           </motion.div>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Newsletter;