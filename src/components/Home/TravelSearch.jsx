// import { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   faLocationDot,
//   faCalendarDays,
//   faUsers,
//   faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icons";

// const TravelSearch = () => {
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [travelers, setTravelers] = useState(2);

//   const handleSearch = (e) => {
//     e.preventDefault();

//     console.log({
//       destination,
//       date,
//       travelers,
//     });

//     alert(
//       `Searching trips for ${destination || "all destinations"}`
//     );
//   };

//   return (
//     <section className="relative z-20 -mt-16 px-6">
//       <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-2xl">

//         <form
//           onSubmit={handleSearch}
//           className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
//         >

//           {/* Destination */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">

//             <FontAwesomeIcon
//               icon={faLocationDot}
//               className="text-xl text-[#1597A8]"
//             />

//             <div className="flex-1">
//               <label className="text-xs text-gray-500">
//                 Destination
//               </label>

//               <input
//                 type="text"
//                 placeholder="Where do you want to go?"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//                 className="mt-1 w-full border-none text-sm outline-none"
//               />
//             </div>

//           </div>

//           {/* Date */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">

//             <FontAwesomeIcon
//               icon={faCalendarDays}
//               className="text-xl text-[#1597A8]"
//             />

//             <div className="flex-1">
//               <label className="text-xs text-gray-500">
//                 Travel Date
//               </label>

//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="mt-1 w-full border-none text-sm outline-none"
//               />
//             </div>

//           </div>

//           {/* Travelers */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">

//             <FontAwesomeIcon
//               icon={faUsers}
//               className="text-xl text-[#1597A8]"
//             />

//             <div className="flex-1">

//               <label className="text-xs text-gray-500">
//                 Travelers
//               </label>

//               <select
//                 value={travelers}
//                 onChange={(e) =>
//                   setTravelers(e.target.value)
//                 }
//                 className="mt-1 w-full border-none bg-white text-sm outline-none"
//               >
//                 <option value="1">1 Traveler</option>
//                 <option value="2">2 Travelers</option>
//                 <option value="3">3 Travelers</option>
//                 <option value="4">4 Travelers</option>
//                 <option value="5">5+ Travelers</option>
//               </select>

//             </div>

//           </div>

//           {/* Search Button */}
//           <button
//             type="submit"
//             className="flex items-center justify-center gap-3 rounded-xl bg-[#1597A8] px-6 py-4 font-semibold text-white transition hover:bg-[#123B4A]"
//           >
//             <FontAwesomeIcon icon={faMagnifyingGlass} />

//             Search Trips
//           </button>

//         </form>

//       </div>
//     </section>
//   );
// };

// export default TravelSearch;