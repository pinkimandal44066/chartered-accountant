// import React, { useEffect, useRef, useState } from "react";
// // import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const Eight = () => {
//   const swiperRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const swiperInstance = swiperRef.current.swiper;

//     swiperInstance.on("slideChange", () => {
//       const newIndex = swiperInstance.realIndex;
//       setCurrentIndex(newIndex);
//       const progressValue =
//         (newIndex / (swiperInstance.slides.length - 1)) * 100;
//       setProgress(progressValue);
//     });

//     return () => {};
//   }, []);

//   return (
//     <div
//       id="services"
//       style={{ fontFamily: "Century Gothic" }}
//       // id="testimonials"
//       className="font-Poppins "
//     >
//       <Swiper
//         ref={swiperRef}
//         slidesPerView={1}
//         spaceBetween={10}
//         navigation={{
//           nextEl: "#next",
//           prevEl: "#prev",
//         }}
//         className="mySwiper"
//       >
//         <div>
//           <SwiperSlide>
//             <div className="swiper-slide">
//               <div className=" gap-8 flex justify-evenly  items-center lg:mt-20 mt-10  mb-10 lg:mb-10">
//                 <div className="flex md:flex-row flex-col justify-center gap-20 items-center mx-5 ">
//                   <div>
//                     <img
//                       className="w-20"
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAb6Cox1JSpl6XsAWYlxfDm7PlwMWwnIW6d3vFVKZpxOLwKS-eD_o8sWmDBIBVvt-PqM&usqp=CAU"
//                     />
//                   </div>
//                   <div className="md:w-[34rem] w-full">
//                     <h1 className="lg:text-4xl text-2xl mt-7 lg:mt-0 md:mt-0">
//                       Tax Advisory Services
//                     </h1>
//                     <p className="font-light  text-justify lg:text-xl text-xl lg:mt-10 mt-6">
//                       Loarm doesnt seem to correspond to any known language or
//                       term. Could you provide more context or clarify what you
//                       mean by loarm. Loarm doesnt seem to correspond to any
//                       known language or term.
//                     </p>
//                     <p className="mt-6 font-semibold lg:text-2xl text-xl text-[#E79F30]">
//                       SystAIO Technologies
//                     </p>

//                     <div
//                       id="sliders-control"
//                       className="flex justify-center gap-3 mt-6 w-full mb-8"
//                     >
//                       <div>
//                         <span
//                           id="card-count"
//                           className="text-gray-700 text-lg mt-2 font-bold"
//                         >
//                           {currentIndex + 1} / 6
//                         </span>
//                       </div>

//                       <div
//                         id="progress-bar"
//                         className=" mt-2 lg:mt-4 w-52 h-1 bg-gray-300 rounded-full overflow-hidden"
//                       >
//                         <div
//                           id="progress"
//                           style={{ width: `${progress}%` }}
//                           className="h-full bg-[#E79F30]"
//                         ></div>
//                       </div>
//                       <div id="controls" className="flex  ">
//                         <button
//                           id="prev"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slidePrev()}
//                         >
//                           <svg
//                             className=" h-6 w-6 text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 19l-7-7 7-7"
//                             />
//                           </svg>
//                         </button>
//                         <button
//                           id="next"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slideNext()}
//                         >
//                           <svg
//                             className=" h-6 w-6  text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="swiper-slide">
//               <div className=" gap-8 flex justify-evenly  items-center lg:mt-20 mt-10  mb-10 lg:mb-10">
//                 <div className="flex md:flex-row flex-col justify-center gap-20 items-center mx-5 ">
//                   <div>
//                     <img
//                       className="w-20"
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAb6Cox1JSpl6XsAWYlxfDm7PlwMWwnIW6d3vFVKZpxOLwKS-eD_o8sWmDBIBVvt-PqM&usqp=CAU"
//                     />
//                   </div>
//                   <div className="md:w-[34rem] w-full">
//                     <h1 className="lg:text-4xl text-2xl mt-7 lg:mt-0 md:mt-0">
//                       Tax Optimization
//                     </h1>
//                     <p className="font-light  text-justify lg:text-xl text-xl lg:mt-10 mt-6">
//                       Loarm doesnt seem to correspond to any known language or
//                       term. Could you provide more context or clarify what you
//                       mean by loarm. Loarm doesnt seem to correspond to any
//                       known language or term.
//                     </p>
//                     <p className="mt-6 font-semibold lg:text-2xl text-xl text-[#E79F30]">
//                       SystAIO Technologies
//                     </p>

//                     <div
//                       id="sliders-control"
//                       className="flex justify-center gap-3 mt-6 w-full mb-8"
//                     >
//                       <div>
//                         <span
//                           id="card-count"
//                           className="text-gray-700 text-lg mt-2 font-bold"
//                         >
//                           {currentIndex + 1} / 6
//                         </span>
//                       </div>

//                       <div
//                         id="progress-bar"
//                         className=" mt-2 lg:mt-4 w-52 h-1 bg-gray-300 rounded-full overflow-hidden"
//                       >
//                         <div
//                           id="progress"
//                           style={{ width: `${progress}%` }}
//                           className="h-full bg-[#E79F30]"
//                         ></div>
//                       </div>
//                       <div id="controls" className="flex  ">
//                         <button
//                           id="prev"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slidePrev()}
//                         >
//                           <svg
//                             className=" h-6 w-6 text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 19l-7-7 7-7"
//                             />
//                           </svg>
//                         </button>
//                         <button
//                           id="next"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slideNext()}
//                         >
//                           <svg
//                             className=" h-6 w-6  text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="swiper-slide">
//               <div className=" gap-8 flex justify-evenly  items-center lg:mt-20 mt-10  mb-10 lg:mb-10">
//                 <div className="flex md:flex-row flex-col justify-center gap-20 items-center mx-5 ">
//                   <div>
//                     <img
//                       className="w-20"
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAb6Cox1JSpl6XsAWYlxfDm7PlwMWwnIW6d3vFVKZpxOLwKS-eD_o8sWmDBIBVvt-PqM&usqp=CAU"
//                     />
//                   </div>
//                   <div className="md:w-[34rem] w-full">
//                     <h1 className="lg:text-4xl text-2xl mt-7 lg:mt-0 md:mt-0">
//                       Tax Education and Training
//                     </h1>
//                     <p className="font-light  text-justify lg:text-xl text-xl lg:mt-10 mt-6">
//                       Loarm doesnt seem to correspond to any known language or
//                       term. Could you provide more context or clarify what you
//                       mean by loarm. Loarm doesnt seem to correspond to any
//                       known language or term.
//                     </p>
//                     <p className="mt-6 font-semibold lg:text-2xl text-xl text-[#E79F30]">
//                       SystAIO Technologies
//                     </p>

//                     <div
//                       id="sliders-control"
//                       className="flex justify-center gap-3 mt-6 w-full mb-8"
//                     >
//                       <div>
//                         <span
//                           id="card-count"
//                           className="text-gray-700 text-lg mt-2 font-bold"
//                         >
//                           {currentIndex + 1} / 6
//                         </span>
//                       </div>

//                       <div
//                         id="progress-bar"
//                         className=" mt-2 lg:mt-4 w-52 h-1 bg-gray-300 rounded-full overflow-hidden"
//                       >
//                         <div
//                           id="progress"
//                           style={{ width: `${progress}%` }}
//                           className="h-full bg-[#E79F30]"
//                         ></div>
//                       </div>
//                       <div id="controls" className="flex  ">
//                         <button
//                           id="prev"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slidePrev()}
//                         >
//                           <svg
//                             className=" h-6 w-6 text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 19l-7-7 7-7"
//                             />
//                           </svg>
//                         </button>
//                         <button
//                           id="next"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slideNext()}
//                         >
//                           <svg
//                             className=" h-6 w-6  text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="swiper-slide">
//               <div className=" gap-8 flex justify-evenly  items-center lg:mt-20 mt-10  mb-10 lg:mb-10">
//                 <div className="flex md:flex-row flex-col justify-center gap-20 items-center mx-5 ">
//                   <div>
//                     <img
//                       className="w-20"
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAb6Cox1JSpl6XsAWYlxfDm7PlwMWwnIW6d3vFVKZpxOLwKS-eD_o8sWmDBIBVvt-PqM&usqp=CAU"
//                     />
//                   </div>
//                   <div className="md:w-[34rem] w-full">
//                     <h1 className="lg:text-4xl text-2xl mt-7 lg:mt-0 md:mt-0">
//                       Tax Technology Solutions
//                     </h1>
//                     <p className="font-light text-justify lg:text-xl text-xl lg:mt-10 mt-6">
//                       Loarm doesnt seem to correspond to any known language or
//                       term. Could you provide more context or clarify what you
//                       mean by loarm. Loarm doesnt seem to correspond to any
//                       known language or term.
//                     </p>
//                     <p className="mt-6 font-semibold lg:text-2xl text-xl text-[#E79F30]">
//                       SystAIO Technologies
//                     </p>

//                     <div
//                       id="sliders-control"
//                       className="flex justify-center gap-3 mt-6 w-full mb-8"
//                     >
//                       <div>
//                         <span
//                           id="card-count"
//                           className="text-gray-700 text-lg mt-2 font-bold"
//                         >
//                           {currentIndex + 1} / 6
//                         </span>
//                       </div>

//                       <div
//                         id="progress-bar"
//                         className=" mt-2 lg:mt-4 w-52 h-1 bg-gray-300 rounded-full overflow-hidden"
//                       >
//                         <div
//                           id="progress"
//                           style={{ width: `${progress}%` }}
//                           className="h-full bg-[#E79F30]"
//                         ></div>
//                       </div>
//                       <div id="controls" className="flex  ">
//                         <button
//                           id="prev"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slidePrev()}
//                         >
//                           <svg
//                             className=" h-6 w-6 text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 19l-7-7 7-7"
//                             />
//                           </svg>
//                         </button>
//                         <button
//                           id="next"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slideNext()}
//                         >
//                           <svg
//                             className=" h-6 w-6  text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="swiper-slide">
//               <div className=" gap-8 flex justify-evenly  items-center lg:mt-20 mt-10  mb-10 lg:mb-10">
//                 <div className="flex md:flex-row flex-col justify-center gap-20 items-center mx-5 ">
//                   <div>
//                     <img
//                       className="w-20"
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAb6Cox1JSpl6XsAWYlxfDm7PlwMWwnIW6d3vFVKZpxOLwKS-eD_o8sWmDBIBVvt-PqM&usqp=CAU"
//                     />
//                   </div>
//                   <div className="md:w-[34rem] w-full">
//                     <h1 className="lg:text-4xl text-2xl mt-7 lg:mt-0 md:mt-0">
//                       Tax Representation
//                     </h1>
//                     <p className="font-light   text-justify lg:text-xl text-xl lg:mt-10 mt-6">
//                       Loarm doesnt seem to correspond to any known language or
//                       term. Could you provide more context or clarify what you
//                       mean by loarm. Loarm doesnt seem to correspond to any
//                       known language or term.
//                     </p>
//                     <p className="mt-6 font-semibold lg:text-2xl text-xl text-[#E79F30]">
//                       SystAIO Technologies
//                     </p>

//                     <div
//                       id="sliders-control"
//                       className="flex justify-center gap-3 mt-6 w-full mb-8"
//                     >
//                       <div>
//                         <span
//                           id="card-count"
//                           className="text-gray-700 text-lg mt-2 font-bold"
//                         >
//                           {currentIndex + 1} / 6
//                         </span>
//                       </div>

//                       <div
//                         id="progress-bar"
//                         className=" mt-2 lg:mt-4 w-52 h-1 bg-gray-300 rounded-full overflow-hidden"
//                       >
//                         <div
//                           id="progress"
//                           style={{ width: `${progress}%` }}
//                           className="h-full bg-[#E79F30]"
//                         ></div>
//                       </div>
//                       <div id="controls" className="flex  ">
//                         <button
//                           id="prev"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slidePrev()}
//                         >
//                           <svg
//                             className=" h-6 w-6 text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 19l-7-7 7-7"
//                             />
//                           </svg>
//                         </button>
//                         <button
//                           id="next"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slideNext()}
//                         >
//                           <svg
//                             className=" h-6 w-6  text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="swiper-slide">
//               <div className=" gap-8 flex justify-evenly  items-center lg:mt-20 mt-10  mb-10 lg:mb-10">
//                 <div className="flex md:flex-row flex-col justify-center gap-20 items-center mx-5 ">
//                   <div>
//                     <img
//                       className="w-20 "
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAb6Cox1JSpl6XsAWYlxfDm7PlwMWwnIW6d3vFVKZpxOLwKS-eD_o8sWmDBIBVvt-PqM&usqp=CAU"
//                     />
//                   </div>
//                   <div className="md:w-[34rem] w-full">
//                     <h1 className="lg:text-4xl text-2xl mt-7 lg:mt-0 md:mt-0">
//                       Tax Risk Management:
//                     </h1>
//                     <p className="font-light   text-justify lg:text-xl text-xl lg:mt-10 mt-6">
//                       Loarm doesnt seem to correspond to any known language or
//                       term. Could you provide more context or clarify what you
//                       mean by loarm. Loarm doesnt seem to correspond to any
//                       known language or term.
//                     </p>
//                     <p className="mt-6 font-semibold lg:text-2xl text-xl text-[#E79F30]">
//                       SystAIO Technologies
//                     </p>

//                     <div
//                       id="sliders-control"
//                       className="flex justify-center gap-3 mt-6 w-full mb-8"
//                     >
//                       <div>
//                         <span
//                           id="card-count"
//                           className="text-gray-700 text-lg mt-2 font-bold"
//                         >
//                           {currentIndex + 1} / 6
//                         </span>
//                       </div>

//                       <div
//                         id="progress-bar"
//                         className=" mt-2 lg:mt-4 w-52 h-1 bg-gray-300 rounded-full overflow-hidden"
//                       >
//                         <div
//                           id="progress"
//                           style={{ width: `${progress}%` }}
//                           className="h-full bg-[#E79F30]"
//                         ></div>
//                       </div>
//                       <div id="controls" className="flex  ">
//                         <button
//                           id="prev"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slidePrev()}
//                         >
//                           <svg
//                             className=" h-6 w-6 text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 19l-7-7 7-7"
//                             />
//                           </svg>
//                         </button>
//                         <button
//                           id="next"
//                           className="focus:outline-none"
//                           onClick={() => swiperRef.current.swiper.slideNext()}
//                         >
//                           <svg
//                             className=" h-6 w-6  text-[#E79F30]"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </div>
//       </Swiper>

//       <div className="max-w-screen-xl  mx-7 lg:mx-64 md:mx-28 sm:mx-12 ">
//         <h1 className="lg:text-3xl text-xl font-semibold text-[#E79F30]">
//           Services
//         </h1>
//       </div>

//       <div className="max-w-screen-xl lg:mx-auto  ">
//         <div
//           className=" lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid sm:grid-cols-2 sm:grid grid-cols-1
      
//       lg:mx-52  md:mx-24 md:gap-10  sm:mx-10 sm:gap-10 mt-6 mx-6 mb-8"
//         >
//           {/* LINE PART1 */}

//           <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
//             <h1 className="text-xl text-[#E79F30]   font-semibold lg:mt-10 md:mt-4 lg:mx-16 md:mx-7">
//               Tax Planning:
//             </h1>
//             <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
//               veritatis enim minus non debitis quo unde iure ...
//             </p>
//           </div>

//           {/* PART2 */}

//           <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
//             <h1 className="text-xl text-[#E79F30]  font-semibold lg:mt-10 md:mt-4 lg:mx-12 md:mx-7">
//               Tax Preparation:
//             </h1>
//             <p className="lg:w-60 text-xs  md:mx-2  lg:mx-5 mt-2">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
//               veritatis enim minus non debitis quo unde iure ...
//             </p>
//           </div>

//           {/* PART3 */}

//           <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
//             <h1 className="text-xl  text-[#E79F30] font-semibold lg:mt-10 md:mt-4 lg:mx-10 md:mx-7">
//               Tax Compliance:
//             </h1>
//             <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
//               veritatis enim minus non debitis quo unde iure ...
//             </p>
//           </div>

//           <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
//             <h1 className="text-xl  text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-10 md:mx-7">
//               Tax Consultation:
//             </h1>
//             <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
//               veritatis enim minus non debitis quo unde iure ...
//             </p>
//           </div>

//           <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
//             <h1 className="text-xl text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-12 md:mx-7">
//               Tax Assessment:
//             </h1>
//             <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
//               veritatis enim minus non debitis quo unde iure ...
//             </p>
//           </div>

//           <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
//             <h1 className="text-xl text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-12 md:mx-7">
//               Tax Advocacy:
//             </h1>
//             <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
//               veritatis enim minus non debitis quo unde iure ...
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Eight;
















import React from 'react';
import { NavLink } from 'react-router-dom';
import img3 from '../../../public/img3.png';
const ServicesOverview = () => {
  return (
    <>
    
    <img src={img3} alt=''/>
    

    <div className="bg-blue-600 p-6 md:p-8">
     
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">Our Comprehensive Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Accounting Services */}
          <NavLink to='/accounting' >
            <div className="text-center">
              <img 
                src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
                alt="Tax Preparation" 
                className="rounded-lg shadow-md w-full object-cover mb-4 md:w-11/12 lg:w-11/12 mx-auto" 
              />
              <h2 className="text-3xl font-bold text-black mb-4">Accounting Services</h2>
              <p className="text-xl text-white">
                We offer tailored accounting services, including financial statement preparation, bookkeeping, and strategic tax planning to meet your business needs. Our audit support ensures accuracy and facilitates a smooth audit process.
              </p>
            </div>
          </NavLink>
          
          {/* Tax Planning & Preparation */}
          <NavLink to='/Taxplanning'>
            <div className="text-center">
              <img 
                src="https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-351.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
                alt="Tax Planning & Preparation" 
                className="rounded-lg shadow-md w-full object-cover mb-4 md:w-11/12 lg:w-11/12 mx-auto" 
              />
              <h2 className="text-3xl font-bold text-black mb-4">Tax Planning & Preparation for Trading</h2>
              <p className="text-xl text-white">
                Our Tax Planning & Preparation services are tailored for traders and investors, ensuring you effectively manage your tax obligations related to trading activities. We help you navigate the complexities of tax laws specific to trading, so you can focus on maximizing your investments.
              </p>
            </div>
          </NavLink>

          {/* Auditing */}
          <NavLink to='/Auditing'>
            <div className="text-center">
              <img 
                src="https://img.freepik.com/free-photo/paperwork_1098-18063.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
                alt="Auditing" 
                className="rounded-lg shadow-md w-full object-cover mb-4 md:w-11/12 lg:w-11/12 mx-auto" 
              />
              <h2 className="text-3xl font-bold text-black mb-4">Auditing</h2>
              <p className="text-xl text-white">
                Our auditing and assurance services provide independent evaluations of financial statements to ensure accuracy and compliance. We help identify risks and improve operational efficiency for better business decision-making.
              </p>
            </div>
          </NavLink>

          {/* Consulting */}
          <div className="text-center">
            <img 
              src="https://img.freepik.com/free-photo/businessmen-elegant-suits-business-meeting-discussing-new-project-office_181624-47022.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
              alt="Consulting" 
              className="rounded-lg shadow-md w-full object-cover mb-4 md:w-11/12 lg:w-11/12 mx-auto" 
            />
            <h2 className="text-3xl font-bold text-black mb-4">Consulting</h2>
            <p className="text-xl text-white">
              Our consulting services provide expert guidance in financial planning, tax strategy, and compliance to help businesses optimize their operations. We work closely with clients to identify opportunities for growth and enhance overall performance.
            </p>
          </div>

          {/* GST Registration & Compliance */}
          <div className="text-center">
            <img 
              src="https://img.freepik.com/free-photo/tax-credits-claim-return-deduction-refund-concept_53876-132748.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
              alt="GST Registration & Compliance" 
              className="rounded-lg shadow-md w-full object-cover mb-4 md:w-11/12 lg:w-11/12 mx-auto" 
            />
            <h2 className="text-3xl font-bold text-black mb-4">GST Registration & Compliance</h2>
            <p className="text-xl text-white">
              We offer comprehensive GST registration and compliance services to ensure your business meets all regulatory requirements. Our experts guide you through the complexities of GST laws to minimize risks and maximize efficiency.
            </p>
          </div>

          {/* Business Advisory Services */}
          <div className="text-center">
            <img 
              src="https://img.freepik.com/free-photo/settlement-statement-form-financial-concept_53876-127792.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
              alt="Business Advisory Services" 
              className="rounded-lg shadow-md w-full object-cover mb-4 md:w-11/12 lg:w-11/12 mx-auto" 
            />
            <h2 className="text-3xl font-bold text-black mb-4">Business Advisory Services</h2>
            <p className="text-xl text-white">
              Our Business Advisory Services provide strategic insights and practical solutions to help businesses grow and succeed. We work closely with you to understand your unique challenges and opportunities, delivering tailored advice that drives your business forward.
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ServicesOverview;
  




























// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const ServicesOverview = () => {
//   return (
//     <div className="bg-blue-600 p-8">
//       <div className="container mx-auto">
//         <h1 className="text-5xl font-bold text-white mb-12 text-center">Our Comprehensive Services</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
//           {/* Accounting Services */}
//           <NavLink to='/accounting' >
//           <div className="text-center">
//             <img 
//               src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
//               alt="Tax Preparation" 
//               className="rounded-lg shadow-md w-full object-cover mb-4" 
//             />
//             <h2 className="text-3xl font-bold text-black mb-4">Accounting Services</h2>
//             <p className="text-xl text-white">
//               We offer tailored accounting services, including financial statement preparation, bookkeeping, and strategic tax planning to meet your business needs. Our audit support ensures accuracy and facilitates a smooth audit process.
//             </p>
//           </div>
//           </NavLink>
//           {/* Tax Planning & Preparation */}
//           <NavLink to='/Taxplanning'>
//           <div className="text-center">
//             <img 
//               src="https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-351.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
//               alt="Tax Planning & Preparation" 
//               className="rounded-lg shadow-md w-full object-cover mb-4" 
//             />
//             <h2 className="text-3xl font-bold text-black mb-4">Tax Planning & Preparation for Trading</h2>
//             <p className="text-xl text-white">
//               Our Tax Planning & Preparation services are tailored for traders and investors, ensuring you effectively manage your tax obligations related to trading activities. We help you navigate the complexities of tax laws specific to trading, so you can focus on maximizing your investments.
//             </p>
//           </div>
// </NavLink>
//           {/* Auditing */}
//           <NavLink to='/Auditing'>
//           <div className="text-center">
//             <img 
//               src="https://img.freepik.com/free-photo/paperwork_1098-18063.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
//               alt="Auditing" 
//               className="rounded-lg shadow-md w-full object-cover mb-4" 
//             />
//             <h2 className="text-3xl font-bold text-black mb-4">Auditing</h2>
//             <p className="text-xl text-white">
//               Our auditing and assurance services provide independent evaluations of financial statements to ensure accuracy and compliance. We help identify risks and improve operational efficiency for better business decision-making.
//             </p>
//           </div>
//           </NavLink>
//           {/* Consulting */}
//           <div className="text-center">
//             <img 
//               src="https://img.freepik.com/free-photo/businessmen-elegant-suits-business-meeting-discussing-new-project-office_181624-47022.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
//               alt="Consulting" 
//               className="rounded-lg shadow-md w-full object-cover mb-4" 
//             />
//             <h2 className="text-3xl font-bold text-black mb-4">Consulting</h2>
//             <p className="text-xl text-white">
//               Our consulting services provide expert guidance in financial planning, tax strategy, and compliance to help businesses optimize their operations. We work closely with clients to identify opportunities for growth and enhance overall performance.
//             </p>
//           </div>

//           {/* GST Registration & Compliance */}
//           <div className="text-center">
//             <img 
//               src="https://img.freepik.com/free-photo/tax-credits-claim-return-deduction-refund-concept_53876-132748.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
//               alt="GST Registration & Compliance" 
//               className="rounded-lg shadow-md w-full object-cover mb-4" 
//             />
//             <h2 className="text-3xl font-bold text-black mb-4">GST Registration & Compliance</h2>
//             <p className="text-xl text-white">
//               We offer comprehensive GST registration and compliance services to ensure your business meets all regulatory requirements. Our experts guide you through the complexities of GST laws to minimize risks and maximize efficiency.
//             </p>
//           </div>

//           {/* Business Advisory Services */}
//           <div className="text-center">
//             <img 
//               src="https://img.freepik.com/free-photo/settlement-statement-form-financial-concept_53876-127792.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid" 
//               alt="Business Advisory Services" 
//               className="rounded-lg shadow-md w-full object-cover mb-4" 
//             />
//             <h2 className="text-3xl font-bold text-black mb-4">Business Advisory Services</h2>
//             <p className="text-xl text-white">
//               Our Business Advisory Services provide strategic insights and practical solutions to help businesses grow and succeed. We work closely with you to understand your unique challenges and opportunities, delivering tailored advice that drives your business forward.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesOverview;
