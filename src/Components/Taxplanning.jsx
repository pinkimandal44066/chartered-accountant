// import React from 'react';

// const services = [
//   {
//     title: 'Tax Planning for Traders',
//     description: `Tax planning for traders involves strategies to minimize tax liability while ensuring compliance 
//     with tax regulations. Our experts analyze your trading activities to develop a personalized tax strategy 
//     that aligns with your financial goals. We help you understand the implications of different trading 
//     methods, such as day trading, swing trading, and long-term investing.`,
//     icon: '📊',
//     benefits: [
//       'Tailored tax strategies that suit your trading style and investment goals.',
//       'In-depth analysis of your trading activity to identify tax-saving opportunities.',
//       'Understanding of capital gains and losses for effective tax management.',
//       'Expert advice on the implications of different trading strategies on your taxes.',
//     ],
//   },
//   {
//     title: 'Preparation of Tax Returns',
//     description: `Our team provides comprehensive tax return preparation services for traders. We ensure that 
//     all relevant income, deductions, and credits are accurately reported, reducing the risk of audits and 
//     penalties. We stay updated on the latest tax laws to provide the best guidance to our clients.`,
//     icon: '📝',
//     benefits: [
//       'Accurate and timely filing of tax returns to avoid penalties.',
//       'Maximization of deductions related to trading activities.',
//       'Expert guidance on the documentation required for tax returns.',
//       'Peace of mind knowing your taxes are handled by professionals.',
//     ],
//   },
//   {
//     title: 'Ongoing Tax Advisory Services',
//     description: `We offer ongoing tax advisory services for traders, ensuring that you stay compliant with 
//     tax laws throughout the year. Our advisors provide updates on any changes in tax legislation that may 
//     affect your trading strategy. We help you plan for estimated tax payments to avoid surprises during tax 
//     season.`,
//     icon: '💼',
//     benefits: [
//       'Regular updates on tax law changes that impact traders.',
//       'Strategic advice on managing your tax obligations throughout the year.',
//       'Assistance with estimated tax payments to prevent underpayment penalties.',
//       'Support in addressing any tax-related questions or concerns as they arise.',
//     ],
//   },
// ];

// const TaxPlanningAndPreparation = () => {
//   return (
//     <div className="container mx-auto p-6 bg-gray-50">
//       <h1 className="text-5xl font-bold text-center text-blue-700 mb-8 animate-bounce">Tax Planning & Preparation for Trading</h1>
//       <p className="text-lg text-gray-600 text-center mb-6 animate-fade-in">
//         Effective tax planning and preparation are crucial for traders to maximize their profits and minimize 
//         their tax liabilities. Our team of experts specializes in providing tailored tax solutions for trading 
//         activities, ensuring compliance with all tax regulations.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div 
//             key={index} 
//             className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-blue-700 animate-fade-in"
//           >
//             <div className="text-4xl mb-4">{service.icon}</div>
//             <h2 className="text-2xl font-semibold text-blue-600 mb-3">{service.title}</h2>
//             <p className="text-gray-600 mb-4">{service.description}</p>
//             <h3 className="font-bold text-lg mb-2">Benefits:</h3>
//             <ul className="list-disc list-inside text-gray-600">
//               {service.benefits.map((benefit, idx) => (
//                 <li key={idx}>{benefit}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-10 animate-fade-in">
//         <h2 className="text-3xl font-bold text-blue-700">Contact Us for Expert Tax Solutions!</h2>
//         <p className="text-lg text-gray-600 mb-4">If you have any questions or need personalized tax planning assistance, reach out to us.</p>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200 transform hover:scale-105">Get in Touch</button>
//       </div>
//     </div>
//   );
// };

// export default TaxPlanningAndPreparation;


























// import React from 'react';
// import img from '../../public/img.png';
// const services = [
//   {
//     title: 'Tax Planning for Traders',
//     description: `Tax planning for traders involves strategies to minimize tax liability while ensuring compliance 
//     with tax regulations. Our experts analyze your trading activities to develop a personalized tax strategy 
//     that aligns with your financial goals.`,
//     benefits: [
//       'Tailored tax strategies that suit your trading style.',
//       'In-depth analysis of your trading activity.',
//       'Understanding of capital gains and losses.',
//       'Expert advice on trading strategies and taxes.',
//     ],
//     icon: '📈',
//   },
//   {
//     title: 'Preparation of Tax Returns',
//     description: `Our team provides comprehensive tax return preparation services for traders. We ensure that 
//     all relevant income, deductions, and credits are accurately reported, reducing the risk of audits and 
//     penalties.`,
//     benefits: [
//       'Accurate and timely filing of tax returns.',
//       'Maximization of deductions related to trading activities.',
//       'Expert guidance on required documentation.',
//       'Peace of mind with professional handling of taxes.',
//     ],
//     icon: '📝',
//   },
//   {
//     title: 'Ongoing Tax Advisory Services',
//     description: `We offer ongoing tax advisory services for traders, ensuring compliance with tax laws throughout 
//     the year. Our advisors provide updates on any changes in tax legislation that may affect your trading strategy.`,
//     benefits: [
//       'Regular updates on tax law changes.',
//       'Strategic advice on tax obligations.',
//       'Assistance with estimated tax payments.',
//       'Support for tax-related questions.',
//     ],
//     icon: '💼',
//   },
// ];

// const TaxPlanningAndPreparation = () => {
//   return (
//     <>
//     <div>
//         <img src={img} alt=''/>
//     </div>
    
//     <div className="container mx-auto p-6 ">
     
      
    
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-5xl font-bold text-blue-800 mb-4">Our Expertise in Tax Services</h2>
//           <p className="text-lg text-gray-700 mb-8">Expert tax planning and preparation services tailored for traders.</p>
//         </div>

//         <div className="bg-blue-100 rounded-lg p-6">
//           <h3 className="text-3xl font-semibold text-blue-700 mb-3">Services We Offer</h3>
//           <ul className="list-disc list-inside">
//             {services.map((service, index) => (
//               <li key={index} className="flex items-center mb-3">
//                 <span className="text-4xl mr-4">{service.icon}</span>
//                 <span className="font-semibold">{service.title}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Service Details Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//         {services.map((service, index) => (
//           <div 
//             key={index} 
//             className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
//           >
//             <h3 className="text-2xl font-semibold text-blue-700 mb-3">{service.title}</h3>
//             <p className="text-gray-600 mb-4">{service.description}</p>
//             <h4 className="font-bold text-lg mb-2">Benefits:</h4>
//             <div className="grid grid-cols-1 gap-2">
//               {service.benefits.map((benefit, idx) => (
//                 <span key={idx} className="bg-blue-700 text-white px-2 py-1 rounded-full text-sm">{benefit}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Call-to-Action Section */}
//       <div className="mt-10 text-center bg-blue-700 text-white p-8 rounded-lg shadow-md">
//         <h2 className="text-4xl font-bold">Contact Us for Personalized Tax Solutions!</h2>
//         <p className="text-lg mb-4">Have questions or need assistance? Our experts are here to help.</p>
//         <button className="bg-white text-blue-700 hover:bg-gray-200 px-8 py-4 rounded-lg transition duration-200 shadow-lg">Get in Touch</button>
//       </div>
//     </div>
//   </>
//   );
// };

// export default TaxPlanningAndPreparation;



















// import React from 'react';
// import img from '../../public/img.png';

// const services = [
//   {
//     title: 'Tax Planning for Traders',
//     description: `Tax planning for traders involves strategies to minimize tax liability while ensuring compliance 
//     with tax regulations. Our experts analyze your trading activities to develop a personalized tax strategy 
//     that aligns with your financial goals.`,
//     benefits: [
//       'Tailored tax strategies that suit your trading style.',
//       'In-depth analysis of your trading activity.',
//       'Understanding of capital gains and losses.',
//       'Expert advice on trading strategies and taxes.',
//     ],
//     icon: '📈',
//   },
//   {
//     title: 'Preparation of Tax Returns',
//     description: `Our team provides comprehensive tax return preparation services for traders. We ensure that 
//     all relevant income, deductions, and credits are accurately reported, reducing the risk of audits and 
//     penalties.`,
//     benefits: [
//       'Accurate and timely filing of tax returns.',
//       'Maximization of deductions related to trading activities.',
//       'Expert guidance on required documentation.',
//       'Peace of mind with professional handling of taxes.',
//     ],
//     icon: '📝',
//   },
//   {
//     title: 'Ongoing Tax Advisory Services',
//     description: `We offer ongoing tax advisory services for traders, ensuring compliance with tax laws throughout 
//     the year. Our advisors provide updates on any changes in tax legislation that may affect your trading strategy.`,
//     benefits: [
//       'Regular updates on tax law changes.',
//       'Strategic advice on tax obligations.',
//       'Assistance with estimated tax payments.',
//       'Support for tax-related questions.',
//     ],
//     icon: '💼',
//   },
// ];

// const TaxPlanningAndPreparation = () => {
//   return (
//     <>
//       <div className="relative">
//         <img src={img} alt='' className="w-full h-auto object-cover" />
//       </div>
      
//       <div className="container mx-auto p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
//             <h2 className="text-5xl font-bold text-blue-800 mb-4">Our Expertise in Tax Services</h2>
//             <p className="text-lg text-gray-700 mb-8">Expert tax planning and preparation services tailored for traders.</p>
//           </div>

//           <div className="bg-blue-100 rounded-lg p-6 transition-transform transform hover:scale-105">
//             <h3 className="text-3xl font-semibold text-blue-700 mb-3">Services We Offer</h3>
//             <ul className="list-disc list-inside">
//               {services.map((service, index) => (
//                 <li key={index} className="flex items-center mb-3">
//                   <span className="text-4xl mr-4">{service.icon}</span>
//                   <span className="font-semibold">{service.title}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Service Details Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
//             >
//               <h3 className="text-2xl font-semibold text-blue-700 mb-3">{service.title}</h3>
//               <p className="text-gray-600 mb-4">{service.description}</p>
//               <h4 className="font-bold text-lg mb-2">Benefits:</h4>
//               <div className="grid grid-cols-1 gap-2">
//                 {service.benefits.map((benefit, idx) => (
//                   <span key={idx} className="bg-blue-700 text-white px-2 py-1 rounded-full text-sm">{benefit}</span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call-to-Action Section */}
//         {/* <div className="mt-10 text-center bg-blue-700 text-white p-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
//           <h2 className="text-4xl font-bold">Contact Us for Personalized Tax Solutions!</h2>
//           <p className="text-lg mb-4">Have questions or need assistance? Our experts are here to help.</p>
//           <button className="bg-white text-blue-700 hover:bg-gray-200 px-8 py-4 rounded-lg transition duration-200 shadow-lg">Get in Touch</button>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default TaxPlanningAndPreparation;















import React from 'react';
import img3 from '../../public/img3.png';

const services = [
  {
    title: 'Tax Planning for Traders',
    description: `Tax planning for traders involves strategies to minimize tax liability while ensuring compliance 
    with tax regulations. Our experts analyze your trading activities to develop a personalized tax strategy 
    that aligns with your financial goals.`,
    benefits: [
      'Tailored tax strategies that suit your trading style.',
      'In-depth analysis of your trading activity.',
      'Understanding of capital gains and losses.',
      'Expert advice on trading strategies and taxes.',
    ],
    icon: '📈',
  },
  {
    title: 'Preparation of Tax Returns',
    description: `Our team provides comprehensive tax return preparation services for traders. We ensure that 
    all relevant income, deductions, and credits are accurately reported, reducing the risk of audits and 
    penalties.`,
    benefits: [
      'Accurate and timely filing of tax returns.',
      'Maximization of deductions related to trading activities.',
      'Expert guidance on required documentation.',
      'Peace of mind with professional handling of taxes.',
    ],
    icon: '📝',
  },
  {
    title: 'Ongoing Tax Advisory Services',
    description: `We offer ongoing tax advisory services for traders, ensuring compliance with tax laws throughout 
    the year. Our advisors provide updates on any changes in tax legislation that may affect your trading strategy.`,
    benefits: [
      'Regular updates on tax law changes.',
      'Strategic advice on tax obligations.',
      'Assistance with estimated tax payments.',
      'Support for tax-related questions.',
    ],
    icon: '💼',
  },
];

const TaxPlanningAndPreparation = () => {
  return (
    <>

<img src={img3} alt=''/>
      {/* <div className="relative">
        <img src={img3} alt='' className="w-full h-auto object-cover" />
      </div> */}
      
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-5xl font-bold text-blue-800 mb-4">Our Expertise in Tax Services</h2>
            <p className="text-lg text-gray-700 mb-8">Expert tax planning and preparation services tailored for traders.</p>
          </div>

          <div className="bg-blue-100 rounded-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-semibold text-blue-700 mb-3">Services We Offer</h3>
            <ul className="list-disc list-inside">
              {services.map((service, index) => (
                <li key={index} className="flex items-center mb-3">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <span className="font-semibold">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <h4 className="font-bold text-lg mb-2">Benefits:</h4>
              <div className="grid grid-cols-1 gap-2">
                {service.benefits.map((benefit, idx) => (
                  <span key={idx} className="bg-blue-700 text-white px-2 py-1 rounded-full text-sm">{benefit}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        {/* <div className="mt-10 text-center bg-blue-700 text-white p-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-4xl font-bold">Contact Us for Personalized Tax Solutions!</h2>
          <p className="text-lg mb-4">Have questions or need assistance? Our experts are here to help.</p>
          <button className="bg-white text-blue-700 hover:bg-gray-200 px-8 py-4 rounded-lg transition duration-200 shadow-lg">Get in Touch</button>
        </div> */}
      </div>
    </>
  );
};

export default TaxPlanningAndPreparation;
