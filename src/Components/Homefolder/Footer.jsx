// // import React from 'react'
// import { IoLogoYoutube } from "react-icons/io";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div
//       style={{ fontFamily: "Inter, sans-serif" }}
//       className="lg:mt-32 mt-16  text-white  bg-blue-600 text-base font-light "
//     >
//       <div className="  flex justify-between lg:items-start md:items-start sm:items-center items-start   lg:pt-10 pt-7  lg:flex-row md:flex-row flex-col">
//         {/* left part */}
//         <div className="lg:mx-20 mx-4 ">
//           <h1 className="text-lg font-semibold ">Chartered Accountant </h1>
//           <p className="lg:w-96 md:w-60 w-full mt-3 text-justify">
//           Our team of experienced Chartered Accountants is dedicated to providing comprehensive financial and tax advisory services. We specialize in bookkeeping, auditing, financial statement preparation, and strategic tax planning to help you achieve your financial goals. Whether you're an individual or a business, we offer personalized solutions tailored to your specific needs.
//           </p>
//         </div>

//         {/* midd */}
//         <div>
//           <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-8  mx-4 sm:mx-48 sm:gap-28 lg:mx-0 md:mx-0   mt-6 lg:mt-0 md:mt-0">
//             {/* left first */}
//             <div className="flex flex-col md:ml-10 lg:ml-0 ml-0">
//               <div>
//                 <h1 className="text-lg font-semibold ">ACCOUNT</h1>
//                 <p className="mt-2">Our Policies</p>
//                 <p className="mt-2">My Account</p>
//                 <p className="mt-2">Create an Account</p>
//                 <p className="mt-2">Tata New</p>
//               </div>
//             </div>

//             {/* 2nd */}

//             <div className="flex flex-col">
//               <div>
//                 <h1 className="text-lg font-semibold ">ABOUT US</h1>
//                 <p className="mt-2">About Us</p>
//                 <p className="mt-2">Our Mission</p>
//                 <p className="mt-2">Our Journey</p>
//                 <p className="mt-2">What We Do</p>
//               </div>
//             </div>

//             {/* 3rd */}
//             <div className="flex flex-row gap-28  lg:flex-col ">
//               <div>
//                 <h1 className="text-lg font-semibold ">USEFUL LINKS</h1>
//                 <p className="mt-2">Store Locations</p>
//                 <p className="mt-2">Business Partner</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* right part */}

//         <div className="lg:mx-20 mx-4 md:mx-8 lg:mt-0 md:mt-0 mt-10  flex justify-between gap-32 items-start  ">
//           <div className="">
//             <h1 className="text-lg font-semibold ">SUBSCRIBE OUR NEWSLETTER</h1>
//             <input
//               className="outline-white text-center text-black py-1.5 lg:px-10 rounded-lg text-lg mt-2"
//               type="email"
//               placeholder="Enter Email ID"
//             />
//             <div className="">
//               <h1 className="text-lg font-semibold mt-5">CONNECT WITH US</h1>
//               <div className="flex text-white text-3xl gap-3 mt-2">
//               <Link
//                     to="https://www.youtube.com/channel/YourChannelID"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <IoLogoYoutube />
//                   </Link>
//                 <Link
//                     to="https://www.facebook.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebook />
//                   </Link>
                    
                  
//                   <Link
//                     to="https://www.instagram.com/accounts/login/?hl=en"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagramSquare />
//                   </Link>


//                   <Link
//                     to="https://x.com/i/flow/login"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                    <FaTwitterSquare />
//                   </Link>
              
//               </div>
//               <div className="flex mt-7 gap-4">
//                 <FaPhone className=" text-white text-3xl mt-3" />
//                 <div className="flex-col">
//                   <h1>CALL US ON</h1>
//                   <h1 className="text-xl font-semibold">1800-123-0123</h1>
//                 </div>
//               </div>

//               <div></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="lg:mx-20 mx-4 mt-10 ">
//         <h1 className="text-lg font-semibold ">POPULAR SEARCHES</h1>
//         <p className="w-full text-xs lg:text-base mt-2">
//           Our Policies | My Account | Create an Account | Tata New | About Us
//           Our Mission | Our Journey | What We Do | Store Locations
//         </p>
//       </div>

//       <hr className="border border-white lg:mx-20 mx-4 lg:mt-10 mt-5" />

//       <div className="lg:mx-20 mx-4 mt-5 mb-20  ">
//         <h1 className="text-xl font-medium mb-40">POWERED BY Pinki Kumari</h1>
//       </div>
//     </div>
//   );
// };

// export default Footer;












// import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="lg:mt-32 mt-16 text-white bg-blue-600 text-base font-light "
    >
      <div className="flex justify-between lg:items-start md:items-start sm:items-center items-start lg:pt-10 pt-7 lg:flex-row md:flex-row flex-col">
        {/* left part */}
        <div className="lg:mx-20 mx-4">
          <h1 className="text-lg font-semibold">Chartered Accountant</h1>
          <p className="lg:w-96 md:w-60 w-full mt-3 text-justify">
            Our firm is committed to delivering top-notch accounting and financial services. We excel in financial planning, tax compliance, auditing, and business consulting. With our deep expertise and personalized approach, we ensure that your financial needs are met with precision and care.
          </p>
        </div>

        {/* midd */}
        <div>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-8 mx-4 sm:mx-48 sm:gap-28 lg:mx-0 md:mx-0 mt-6 lg:mt-0 md:mt-0">
            {/* left first */}
            <div className="flex flex-col md:ml-10 lg:ml-0 ml-0">
              <div>
                <h1 className="text-lg font-semibold">SERVICES</h1>
                <p className="mt-2">Tax Planning</p>
                <p className="mt-2">Auditing</p>
                <p className="mt-2">Financial Reporting</p>
                <p className="mt-2">Consulting</p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex flex-col">
              <div>
                <h1 className="text-lg font-semibold">COMPANY</h1>
                <NavLink to='/'>
                <p className="mt-2">Home</p>
                </NavLink>
                <NavLink to='/about-us'>
                <p className="mt-2">About Us</p>
                </NavLink>

                <NavLink to='/service'>
                <p className="mt-2">Services</p>
                </NavLink>
                <NavLink to='/contact-us'>
                <p className="mt-2">Contact Us</p>
                </NavLink>
                <p className="mt-2">Careers</p>
              </div>
            </div>

            {/* 3rd */}
            <div className="flex flex-row gap-28 lg:flex-col">
              <div>
                <h1 className="text-lg font-semibold">RESOURCES</h1>
                <p className="mt-2">Blog</p>
                <NavLink to='/faq'>
                <p className="mt-2">FAQs</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="lg:mx-20 mx-4 md:mx-8 lg:mt-0 md:mt-0 mt-10 flex justify-between gap-32 items-start">
          <div className="">
            <h1 className="text-lg font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <input
              className="outline-white text-center text-black py-1.5 lg:px-10 rounded-lg text-lg mt-2"
              type="email"
              placeholder="Enter Email ID"
            />
            <div className="">
              <h1 className="text-lg font-semibold mt-5">CONNECT WITH US</h1>
              <div className="flex text-white text-3xl gap-3 mt-2">
                <Link
                  to="https://www.youtube.com/channel/YourChannelID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube />
                </Link>
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare />
                </Link>
                <Link
                  to="https://x.com/i/flow/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitterSquare />
                </Link>
              </div>
              <div className="flex mt-7 gap-4">
                <FaPhone className="text-white text-3xl mt-3" />
                <div className="flex-col">
                  <h1>CALL US ON</h1>
                  <h1 className="text-xl font-semibold">1800-123-4567</h1>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-20 mx-4 mt-10">
        <h1 className="text-lg font-semibold">POPULAR SEARCHES</h1>
        <p className="w-full text-xs lg:text-base mt-2">
          Tax Planning | Auditing | Financial Reporting | Consulting | About Us | Our Team | Careers | Blog | FAQs
        </p>
      </div>

      <hr className="border border-white lg:mx-20 mx-4 lg:mt-10 mt-5" />

      <div className="lg:mx-20 mx-4 mt-5 mb-20">
        <h1 className="text-xl font-medium mb-40">POWERED BY aaaaaaaaaaaaaaaaaaaa</h1>
      </div>
    </div>
  );
};

export default Footer;
