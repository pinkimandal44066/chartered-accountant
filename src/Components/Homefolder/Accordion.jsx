// import React from "react";
// import { useState } from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { NavLink } from "react-router-dom";

// const AccordionItem = ({ title, imageSrc, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-4 border   shadow-2xl rounded-md border-blue-700">
//       <button
//         className="w-full p-2 text-gray-700 text-left rounded-md focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out flex"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-semibold ml-2">{title}</span>
//         <span
//           className={`ml-auto transform ${
//             isOpen ? "rotate-180" : "rotate-0"
//           } transition duration-300 ease-in-out`}
//         >
//           <MdOutlineKeyboardArrowDown size={32} style={{ color: "blue" }} />
//         </span>
//       </button>
//       <div
//         className={`mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${
//           isOpen ? "max-h-screen" : "max-h-0"
//         }`}
//       >
//         <div className="flex justify-center"></div>
//         <p className="text-gray-500 text-left mx-4">{content}</p>
//       </div>
//     </div>
//   );
// };

// const Accordion = () => {
//   return (
//     <>
//       <div className="lg:mt-24 mt-8 ">
//         <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-36 2xl:mx-48 lg:-mt-16">
//           <AccordionItem
//             title="Compliance with Tax Laws"
//             content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
//            Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
//            quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
//           />
//           <AccordionItem
//             title="Review Income Sources"
//             content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
//            Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
//            quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
//           />
//           <AccordionItem
//             title="Maintain Detailed Records"
//             content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
//           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
//           />
//           <AccordionItem
//             title="Verify Form Accuracy"
//             content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
//           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
//           />
//           {/* <AccordionItem
//             title="Utilize Tax Credits"
//             content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
//           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
//           />
//           <AccordionItem
//             title="Stay Informed on Tax Laws"
//             content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
//           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
//           />
//           <AccordionItem
//             title="Consult Tax Professionals"
//             content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
//           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
//           /> */}
//         </div>
//       </div>

//       <NavLink to="/enquiry">
//         <button
//           className="text-blue-700 flex  border-2 
//   border-gray-100 shadow-2xl bg-white 
//   font-semibold py-2.5 px-9  rounded-lg mx-auto   mt-9
//     "
//         >
//           View All
//         </button>
//       </NavLink>
//     </>
//   );
// };

// export default Accordion;















// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const FAQPage = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What services do you offer?",
//       answer: "We offer a range of services including tax preparation, auditing, accounting, and financial consulting tailored to your needs."
//     },
//     {
//       question: "How can I schedule a consultation?",
//       answer: "To schedule a consultation, simply fill out the contact form on our website or call our office directly."
//     },
//     {
//       question: "What documents do I need for tax filing?",
//       answer: "You'll need your income statements, previous tax returns, and any relevant financial documents to ensure accurate filing."
//     },
//     {
//       question: "How do you ensure confidentiality?",
//       answer: "We follow strict confidentiality protocols and use secure systems to protect your personal and financial information."
//     },
//   ];

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className=" py-10">
//       <div className="mx-5 lg:mx-20">
     
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
//               <button
//                 className="flex items-center justify-between w-full p-4 bg-blue-200 hover:bg-blue-300 focus:outline-none transition-colors duration-300 ease-in-out"
//                 onClick={() => handleToggle(index)}
//               >
//                 <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
//                 {openIndex === index ? (
//                   <FaChevronUp className="text-blue-600" />
//                 ) : (
//                   <FaChevronDown className="text-blue-600" />
//                 )}
//               </button>
//               <div
//                 className={`p-4 text-gray-700 border-t transition-max-height duration-300 ease-in-out ${
//                   openIndex === index ? 'max-h-40' : 'max-h-0 overflow-hidden'
//                 }`}
//               >
//                 {openIndex === index && faq.answer}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQPage;

















import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of services including tax preparation, auditing, accounting, and financial consulting tailored to your needs."
    },
    {
      question: "How can I schedule a consultation?",
      answer: "To schedule a consultation, simply fill out the contact form on our website or call our office directly."
    },
    {
      question: "What documents do I need for tax filing?",
      answer: "You'll need your income statements, previous tax returns, and any relevant financial documents to ensure accurate filing."
    },
    {
      question: "How do you ensure confidentiality?",
      answer: "We follow strict confidentiality protocols and use secure systems to protect your personal and financial information."
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-gray-100  mt-6 py-10">
      <div className="mx-5 lg:mx-20">
       
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
              <button
                className="flex items-center justify-between w-full p-4 bg-blue-200 hover:bg-blue-300 focus:outline-none transition-colors duration-300 ease-in-out"
                onClick={() => handleToggle(index)}
              >
                <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </button>
              <div
                className={`p-4 text-gray-700 border-t transition-max-height duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0 overflow-hidden'
                }`}
              >
                {openIndex === index && faq.answer}
              </div>
            </div>
          ))}
        </div>
       
        <div className="mt-8 text-center">
        <NavLink to='/faq'>
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            View All
          </button>
          </NavLink>
        </div>
      
      </div>
    </div>
  );
};

export default FAQPage;
