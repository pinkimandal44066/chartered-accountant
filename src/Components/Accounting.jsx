// import React from 'react';

// const services = [
//   {
//     title: 'Bookkeeping',
//     description: 'Daily financial transactions ka record rakhna, jisse businesses apne finances ko effectively manage kar sakein.',
//     benefits: [
//       'Accurate financial records',
//       'Time-saving on administrative tasks',
//       'Better financial decision making',
//     ],
//   },
//   {
//     title: 'Tax Preparation',
//     description: 'Clients ke liye tax returns tayar karna aur tax planning, jisse unhe compliance aur benefits mil sakein.',
//     benefits: [
//       'Maximize tax deductions',
//       'Avoid penalties',
//       'Expert advice on tax regulations',
//     ],
//   },
//   {
//     title: 'Financial Consulting',
//     description: 'Business ki financial health ko improve karne ke liye guidance dena aur growth strategies tayar karna.',
//     benefits: [
//       'Tailored financial strategies',
//       'Improved profitability',
//       'Risk management',
//     ],
//   },
//   {
//     title: 'Payroll Management',
//     description: 'Employees ke salaries aur benefits ka management, jisse employees ko timely payments mil sakein.',
//     benefits: [
//       'Accurate salary calculations',
//       'Compliance with labor laws',
//       'Employee satisfaction',
//     ],
//   },
//   {
//     title: 'Auditing Services',
//     description: 'Financial records ki review aur compliance check karna, jisse transparency aur trust build ho sake.',
//     benefits: [
//       'Identify discrepancies',
//       'Enhance financial accuracy',
//       'Strengthen stakeholder confidence',
//     ],
//   },
//   {
//     title: 'Business Advisory',
//     description: 'Business growth aur development ke liye strategic advice dena, jisse companies apne goals achieve kar sakein.',
//     benefits: [
//       'Expert insights',
//       'Long-term planning',
//       'Market analysis',
//     ],
//   },
// ];

// const AccountingServices = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-6">Accounting Services</h1>
//       <p className="mb-4">
//         Hum aapko accounting services ka ek comprehensive range pradaan karte hain, jo aapke financial matters ko
//         manage karne mein madad karte hain.
//       </p>
//       {services.map((service, index) => (
//         <div key={index} className="border rounded-lg p-4 mb-4 shadow-lg">
//           <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
//           <p className="mb-2">{service.description}</p>
//           <h3 className="font-bold mb-1">Benefits:</h3>
//           <ul className="list-disc list-inside mb-2">
//             {service.benefits.map((benefit, idx) => (
//               <li key={idx}>{benefit}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <div className="text-center mt-6">
//         <h2 className="text-2xl font-bold">Contact Us for More Information!</h2>
//         <p className="mb-4">Agar aapko koi sawal hai ya consultation chahiye, toh humse sampark karein.</p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">Get in Touch</button>
//       </div>
//     </div>
//   );
// };

// export default AccountingServices;






















import React from 'react';
import img3 from '../../public/img3.png';
const services = [
  {
    title: 'Bookkeeping',
    description: `Bookkeeping involves systematically recording your daily financial transactions. 
    This process helps you understand your business's financial health, enabling timely decisions. 
    Our professionals provide accurate record-keeping essential for your audits and tax returns.`,
    benefits: [
      'Accurate financial records that reflect your business’s stability.',
      'Time-saving on administrative tasks, allowing you to focus on your core business.',
      'Better financial decision-making with real-time data and insights.',
      'Customized reporting to help you understand specific financial metrics.',
    ],
  },
  {
    title: 'Tax Preparation',
    description: `Our tax preparation services include preparing tax returns for clients while considering 
    applicable tax laws and regulations. Our team also assists you with tax planning to maximize deductions 
    and credits, thereby reducing your tax liability.`,
    benefits: [
      'Maximize tax deductions and credits, reducing your overall tax liability.',
      'Avoid penalties through accurate and timely tax filing.',
      'Expert advice on tax regulations, so you don’t have to worry about compliance.',
      'Representation in case of audits or disputes with tax authorities.',
    ],
  },
  {
    title: 'Financial Consulting',
    description: `Our financial consulting services provide expert guidance to improve your business's 
    financial health. We offer tailored strategies that enhance your business growth and profitability. 
    These services also cover risk management and investment strategies.`,
    benefits: [
      'Tailored financial strategies that address your specific business needs.',
      'Improved profitability through detailed analysis and recommendations.',
      'Risk management techniques to protect you from financial uncertainties.',
      'Long-term planning and market insights to help you achieve sustainable growth.',
    ],
  },
  {
    title: 'Payroll Management',
    description: `Payroll management means accurately calculating and timely paying employees' salaries, 
    wages, bonuses, and deductions. Our team automates and streamlines this process, helping you avoid 
    compliance issues. We also provide employees with detailed payslips and annual statements.`,
    benefits: [
      'Accurate salary calculations that enhance employee satisfaction.',
      'Compliance with labor laws and regulations, protecting you from legal troubles.',
      'Time-saving through automated payroll systems that enhance your operational efficiency.',
      'Increased employee satisfaction and retention through transparent payroll practices.',
    ],
  },
  {
    title: 'Auditing Services',
    description: `Our auditing services focus on thoroughly reviewing your financial records and checking 
    compliance. These services ensure the accuracy of your financial statements and provide transparency 
    for your stakeholders. We offer both internal and external audits.`,
    benefits: [
      'Identify discrepancies in your financial records and resolve them promptly.',
      'Enhance financial accuracy and integrity, building stakeholder trust.',
      'Strengthen stakeholder confidence through thorough auditing processes.',
      'Provide recommendations for improvement to enhance your internal controls and processes.',
    ],
  },
  {
    title: 'Business Advisory',
    description: `Our business advisory services provide strategic advice for your business's growth and 
    development. We analyze market trends and business models to offer tailored recommendations, 
    helping you achieve your goals.`,
    benefits: [
      'Expert insights on industry trends and business opportunities.',
      'Long-term planning that aligns with your business objectives.',
      'Market analysis that helps you make informed decisions.',
      'Improved operational efficiency through process enhancements and cost-reduction strategies.',
    ],
  },
];

const Accounting= () => {
  return (

    <>
     <img src={img3} alt=''/>
 
    <div className="container mx-auto p-4 cursor-pointer">
      <h1 className="text-4xl font-bold mb-6">Accounting Services</h1>
      <p className="mb-4">
        We provide a comprehensive range of accounting services that assist you in managing your financial matters. 
        Our team of experienced professionals specializes in each service, offering customized solutions tailored 
        to your needs.
      </p>
      {services.map((service, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4 shadow-lg shadow-blue-700">
          <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
          <p className="mb-2">{service.description}</p>
          <h3 className="font-bold mb-1">Benefits:</h3>
          <ul className="list-disc list-inside mb-2">
            {service.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}
      {/* <div className="text-center mt-6">
        <h2 className="text-2xl font-bold">Contact Us for More Information!</h2>
        <p className="mb-4">If you have any questions or need a consultation, feel free to contact us.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Get in Touch</button>
      </div> */}
    </div>

    </>
  );
};

export default Accounting;













