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
//     {
//       question: "What are your fees?",
//       answer: "Our fees vary based on the specific services provided. Please reach out for a detailed and personalized quote."
//     },
//   ];

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="mx-5 lg:mx-20">
//         <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 text-center mb-8">
//           Frequently Asked Questions (FAQs)
//         </h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
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
//                 {faq.answer}
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
    {
      question: "What are your fees?",
      answer: "Our fees vary based on the specific services provided. Please reach out for a detailed and personalized quote."
    },
    {
      question: "What is the difference between a Chartered Accountant and a regular accountant?",
      answer: "A Chartered Accountant (CA) has completed additional qualifications and training, making them more adept at handling complex financial matters and providing expert advice."
    },
    {
      question: "How often should I meet with my accountant?",
      answer: "It's advisable to meet with your accountant at least once a year for tax planning and review, but more frequent meetings may be beneficial depending on your financial situation."
    },
    {
      question: "Can you assist with business startup services?",
      answer: "Yes, we provide comprehensive business startup services, including entity selection, business plans, and financial projections."
    },
    {
      question: "What should I do if I receive a tax notice?",
      answer: "If you receive a tax notice, contact us immediately. We can help you understand the notice and guide you on the necessary steps to respond."
    },
    {
      question: "How can I improve my financial situation?",
      answer: "We can provide financial consulting services that include budgeting, cash flow analysis, and investment advice to help improve your financial situation."
    },
    {
      question: "What is an audit, and why is it important?",
      answer: "An audit is an examination of financial records to ensure accuracy and compliance with regulations. It provides assurance to stakeholders and can enhance credibility."
    },
    {
      question: "Do you provide services for non-profits?",
      answer: "Yes, we specialize in accounting and tax services for non-profit organizations, ensuring compliance with regulations and proper reporting."
    },
    {
      question: "What are the benefits of hiring a Chartered Accountant?",
      answer: "Hiring a CA provides expert knowledge, tax efficiency, strategic financial advice, and peace of mind regarding compliance and regulations."
    },
    {
      question: "How can I prepare for a tax audit?",
      answer: "To prepare for a tax audit, keep organized records, review your financial statements, and consult with us for guidance on what to expect."
    }
  ];
  
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="mx-5 lg:mx-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 text-center mb-8">
          Frequently Asked Questions (FAQs)
        </h2>
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
      </div>
    </div>
  );
};

export default FAQPage;
