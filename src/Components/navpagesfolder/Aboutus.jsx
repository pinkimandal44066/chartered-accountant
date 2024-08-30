// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// const Aboutus = () => {
//   return (
//     <div className="bg-whiteh">
//       <div className="flex justify-evenly lg:flex-row md:flex-row flex-col mt-10 mb-10 bg-white items-center font-Poppins">
//         <div>
//           <h1 className="lg:text-6xl text-3xl font-medium text-[#E79F30]">
//             About Us
//           </h1>
//         </div>
//         <div className="lg:w-[916px] md:w-96 w-80 text-justify sm:w-96 mt-2 font-light text-lg">
//           <p>
//             ShareTax is a leading accounting firm dedicated to providing
//             exceptional tax, audit, and advisory services. Our team of
//             experienced professionals is committed to delivering personalized
//             solutions to meet the unique financial needs of individuals and
//             businesses, ensuring compliance and optimizing financial
//             performance.
//           </p>
//         </div>
//       </div>

//       <div className="flex bg-white items-center font-Poppins justify-center">
//         <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           spaceBetween={170}
//           centeredSlides={true}
//           slidesPerView={"auto"}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 0,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           navigation={true}
//           loop={true}
//           pagination={true}
//           modules={[EffectCoverflow, Pagination, Navigation]}
//           className="about-swiper"
//           breakpoints={{
//             1800: { spaceBetween: 140 },
//             1600: { spaceBetween: 120 },
//             1400: { spaceBetween: 100 },
//             1200: { spaceBetween: 80 },
//             1020: { spaceBetween: 60 },
//             992: { spaceBetween: 60 },
//             768: { spaceBetween: 40 },
//             576: { spaceBetween: 40 },
//             575: { spaceBetween: 40 },
//             320: { spaceBetween: 20 },
//             0: { spaceBetween: 10 },
//           }}
//         >
//           <SwiperSlide>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlintyIfLy3N8aI0LqUAfRW5_Msft1E4389noG0XOSMg&s"
//               alt="Nature 2"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrkUSIuR2aphIU9yTDLTL6BvdhCfu2yUC8Q5pMCPFxg&s"
//               alt="Nature 3"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m8nRquJdm6egP4mT_cw2YVIhirdBOYyhitFpqBwXBWcjejzwl2FPhRi2qBoRbjTtji4&usqp=CAU"
//               alt="Nature 4"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yUurIQwnkWX2zMopXVDAoB_BnJAG5rS5AAk_PTdcoA&s"
//               alt="Nature 2"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAn_uOgKrPNfGYQApoajPLzVenMDvnTYI52MtGSPC-bw&s"
//               alt="Nature 3"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWauK6MII9Ke1pMWQdrv0A3qi59lPJ_mv--PHmzrWpHQ&s"
//               alt="Nature 4"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       <div className="flex justify-evenly lg:flex-row md:flex-row flex-col bg-white items-center font-Poppins">
//         <div>
//           <h1 className="lg:text-5xl text-3xl font-medium text-[#E79F30]">
//             Company Info
//           </h1>
//         </div>
//         <div className="lg:w-[816px] mb-8 text-justify md:w-96 sm:w-96 w-80 mt-2 font-light text-lg">
//           <p>
//             ShareTax is a premier accounting firm offering expert tax planning,
//             compliance, and advisory services. With a focus on personalized
//             client solutions, we ensure optimal tax strategies and financial
//             efficiency. Our dedicated team of professionals is committed to
//             excellence, integrity, and client satisfaction, making ShareTax a
//             trusted partner for all your accounting needs.
//           </p>
//         </div>
//       </div>

//       <div
//         style={{ fontFamily: "Century Gothic" }}
//         className="font-Poppins mt-10"
//       >
//         <div id="PASSION AT WORK" className="">
//           <div className="flex justify-evenly flex-col lg:flex-row md:flex-row items-center lg:mt-28 mt-0">
//             <div className="">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzopYDgRFkbjJWkfMu5DFb7LdJoKA3CrOokdQj2ef5YCITK-DEErPwloYCRDBbfRMb28&usqp=CAU"
//                 className=""
//               />
//             </div>
//             <div>
//               <h1 className="lg:text-5xl text-3xl font-medium lg:text-start text-center lg:mt-0 md:mt-0 mt-6 text-[#E79F30]">
//                 Passion at work
//               </h1>
//               <div className="max-h-48 overflow-y-auto mt-8">
//                 <p className="lg:w-[628px] w-80 text-justify sm:w-96 text-xl mt-5 lg:mt-8 font-light">
//                   Passion in accounting fuels precision, diligence, and
//                   innovation, transcending numbers into narratives of success.
//                   It's the relentless pursuit of accuracy, ensuring each digit
//                   aligns with integrity and transparency. Beyond balance sheets,
//                   passion ignites curiosity, prompting accountants to unravel
//                   financial puzzles and offer strategic insights. It's the drive
//                   to not just meet standards but exceed them, turning mundane
//                   tasks into opportunities for excellence. Passion in accounting
//                   fosters collaboration, as professionals unite to tackle
//                   challenges and achieve common goals. It's the commitment to
//                   lifelong learning, adapting to evolving regulations and
//                   technologies with enthusiasm. This fervor for the craft
//                   transforms routine tasks into fulfilling endeavors, where each
//                   calculation tells a story of dedication and expertise.
//                   Ultimately, passion in accounting isn't just about
//                   numbers—it's about making a meaningful impact, empowering
//                   businesses to thrive and flourish in an ever-changing
//                   financial landscape.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* second part */}
//         <div>
//           <div className="flex justify-evenly flex-col lg:flex-row md:flex-row items-center lg:mt-28 mt-16">
//             <div>
//               <h1 className="lg:text-5xl text-3xl font-medium lg:text-start text-center text-[#E79F30]">
//                 The ShareTax
//               </h1>
//               <p className="lg:w-[628px] text-justify w-80 sm:w-96 text-xl mt-5 font-light">
//                 Taxation, a cornerstone of fiscal policy, funds public services,
//                 infrastructure, and social welfare. It serves as a mechanism for
//                 wealth redistribution, economic regulation, and incentivizing
//                 behavior. Understanding tax codes, deductions, and credits is
//                 crucial for individuals and businesses to optimize financial
//                 planning and compliance. Taxation impacts investment decisions,
//                 consumer behavior, and overall economic activity, influencing
//                 market dynamics and wealth distribution. Effective tax
//                 management involves strategic planning, risk assessment, and
//                 compliance to minimize liabilities and maximize benefits. Tax
//                 policies evolve in response to socio-economic trends,
//                 technological advancements, and political priorities, shaping
//                 the fiscal landscape and influencing economic growth and
//                 societal well-being.
//               </p>
//             </div>

//             <div className="lg:mt-0 md:mt-0 mt-5">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoiOPr8zNCNG_-n5XdMron9rhDbolkb1KnKesk4frEengxFNjjWelcGFnkJFgYUhqznU&usqp=CAU"
//                 className=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;









// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
//       <p className="text-lg leading-7 mb-6">
//         Welcome to <strong>[Your Firm's Name]</strong>, where we believe in delivering excellence through our professional accounting and financial services. Led by a Chartered Accountant with years of experience, our firm is dedicated to helping businesses and individuals navigate the complexities of financial management, tax planning, and compliance.
//       </p>
//       <p className="text-lg leading-7 mb-6">
//         Our expertise spans a wide range of services, including auditing, taxation, financial advisory, and business consulting. We are committed to providing personalized solutions that align with your unique financial goals and objectives.
//       </p>
//       <p className="text-lg leading-7 mb-6">
//         At <strong>[Your Firm's Name]</strong>, integrity, transparency, and professionalism are at the core of everything we do. Our team of qualified professionals is passionate about helping our clients succeed by offering insights and strategies that drive growth and sustainability.
//       </p>
//       <p className="text-lg leading-7">
//         Thank you for choosing <strong>[Your Firm's Name]</strong> as your trusted financial partner. We look forward to working with you and helping you achieve your financial goals.
//       </p>
//     </div>
//   );
// };

// export default AboutUs;









// import React from "react";

// const images = [
//   {
//     src: "https://via.placeholder.com/100", // Replace with actual image URL
//     alt: "Auditing",
//     description: "Ensuring compliance through accurate and thorough auditing services.",
//   },
//   {
//     src: "https://via.placeholder.com/100", // Replace with actual image URL
//     alt: "Taxation",
//     description: "Expert tax strategies tailored to optimize your financial outcomes.",
//   },
//   {
//     src: "https://via.placeholder.com/100", // Replace with actual image URL
//     alt: "Advisory",
//     description: "Strategic advice to guide your business toward sustainable growth.",
//   },
//   {
//     src: "https://via.placeholder.com/100", // Replace with actual image URL
//     alt: "Bookkeeping",
//     description: "Efficient bookkeeping solutions to maintain accurate financial records.",
//   },
// ];

// const ContentPageWithTwoRows = () => {
//   return (
//     <div className="max-w-4xl mx-auto py-12">
//       <p className="text-lg text-gray-800 mb-8">
//         We are committed to providing comprehensive financial solutions tailored to meet your unique needs. Our expertise spans across various domains, ensuring that every aspect of your financial management is handled with precision and care. From detailed auditing to strategic advisory services, we focus on delivering results that drive growth and stability. Partner with us to navigate the complexities of finance and achieve your business goals with confidence.
//       </p>
//       <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//         {images.map((item, index) => (
//           <div key={index} className="flex items-center">
//             <img src={item.src} alt={item.alt} className="w-20 h-20 object-cover rounded-lg mr-4" />
//             <p className="text-gray-700">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContentPageWithTwoRows;














import React from 'react';
import img3 from '../../../public/img3.png' ;
import { NavLink } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      
      {/* Hero Section */}
      <img src={img3} alt=''/>
      {/* <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to [Your Firm's Name]</h1>
        <p className="text-lg mb-6">Expert Accounting and Financial Services</p>
        <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100">
          Learn More
        </button>
      </section> */}
      
      {/* About Section */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-lg text-gray-700 leading-7 mb-8">
          At [Your Firm's Name], we offer comprehensive accounting and financial services tailored to meet the diverse needs of businesses and individuals. Our firm is led by a seasoned Chartered Accountant with a wealth of experience in the field, ensuring that our clients receive the highest level of professional service.
        </p>
        <p className="text-lg text-gray-700 leading-7 mb-8">
          Integrity, professionalism, and personalized service are at the heart of our practice. We are committed to building long-term relationships with our clients, delivering solutions that are both reliable and growth-oriented. 
        </p>
        <p className="text-lg text-gray-700 leading-7 mb-8">
          Our team is dedicated to helping you achieve your financial goals, whether through tax planning, auditing, financial advisory, or business consulting. We take pride in our ability to tailor our services to meet your unique needs.
        </p>
      </section>
      
      {/* Key Services Section */}
      {/* <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Accounting & Bookkeeping</h3>
              <p className="text-gray-700">
                Accurate and timely financial records to help you manage your business with confidence.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Tax Planning & Compliance</h3>
              <p className="text-gray-700">
                Expert tax strategies to minimize liabilities and ensure full compliance with regulations.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Auditing & Assurance</h3>
              <p className="text-gray-700">
                Comprehensive audits that provide clarity and accuracy in your financial statements.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Financial Advisory</h3>
              <p className="text-gray-700">
                Strategic financial guidance to help you make informed decisions for your future.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Business Consulting</h3>
              <p className="text-gray-700">
                Practical solutions to enhance your business's efficiency, profitability, and growth.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Payroll Management</h3>
              <p className="text-gray-700">
                Streamlined payroll services to ensure your employees are paid accurately and on time.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission Statement Section */}
      <section className="bg-blue-700  text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-7">
            Our mission is to empower our clients with the knowledge and tools they need to achieve financial success. We are dedicated to delivering services that are rooted in integrity, professionalism, and a deep understanding of our clients' needs.
          </p>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" alt="Team Member 1" className="w-full h-64 object-cover rounded-lg mb-4"/>
              <h3 className="text-2xl font-semibold">John Doe</h3>
              <p className="text-gray-700">Chartered Accountant</p>
            </div>
            <div>
              <img src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" alt="Team Member 2" className="w-full h-64 object-cover rounded-lg mb-4"/>
              <h3 className="text-2xl font-semibold">Jane Smith</h3>
              <p className="text-gray-700">Tax Specialist</p>
            </div>
            <div>
              <img src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393647.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" alt="Team Member 3" className="w-full h-64 object-cover rounded-lg mb-4"/>
              <h3 className="text-2xl font-semibold">Alex Johnson</h3>
              <p className="text-gray-700">Audit Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-7 mb-4">
                "The team at [Your Firm's Name] has been instrumental in helping our business navigate complex financial challenges. Their expertise and dedication are unmatched."
              </p>
              <h4 className="font-semibold">- Client Name</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-7 mb-4">
                "I am extremely satisfied with the services provided by [Your Firm's Name]. Their personalized approach and attention to detail have made a significant impact on my financial planning."
              </p>
              <h4 className="font-semibold">- Client Name</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-7 mb-4">
                "Professional, reliable, and trustworthy – [Your Firm's Name] is the best partner we could have asked for in managing our finances."
              </p>
              <h4 className="font-semibold">- Client Name</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg leading-7 mb-8">
            Ready to take your financial management to the next level? Contact us today to schedule a consultation and discover how we can help you achieve your financial goals.
          </p>
          <NavLink to='/contact-us'>
          <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100">
            Contact Us
          </button>

          </NavLink>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
