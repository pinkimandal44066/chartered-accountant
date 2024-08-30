
import React, { useState } from 'react';
import img3 from '../../public/img3.png';
const auditingServices = [
  {
    title: 'Internal Audits',
    description: `Internal audits evaluate the effectiveness of an organization’s internal controls and governance processes. 
    This process involves systematically reviewing operations to ensure compliance with laws, regulations, and internal policies. 
    By conducting internal audits, organizations can identify inefficiencies and areas for improvement, helping to enhance their operations. 
    The goal is to provide management with insights into risk management and control processes, ultimately leading to better decision-making. 
    Internal audits are crucial for maintaining organizational integrity and can help in fraud prevention and detection. 
    Regular internal audits can also facilitate continuous improvement and foster a culture of accountability within the organization. 
    This service provides clients with peace of mind knowing that their internal processes are functioning as intended. 
    By establishing a regular internal audit schedule, businesses can proactively manage risks and ensure compliance with applicable laws.`,
  },
  {
    title: 'External Audits',
    description: `External audits provide an independent assessment of an organization's financial statements and processes. 
    Conducted by certified auditors, these audits verify the accuracy and fairness of financial reporting, ensuring stakeholders have reliable information. 
    External audits are typically required for public companies and can significantly impact investor confidence. 
    The audit process includes evaluating the company's internal controls, assessing risk management practices, and testing financial transactions. 
    By identifying discrepancies, external audits help organizations improve their financial reporting processes. 
    Furthermore, these audits enhance credibility with stakeholders, including investors, regulators, and clients. 
    The ultimate objective of an external audit is to provide an unbiased opinion on the financial statements, which can lead to better financial governance. 
    Organizations that undergo external audits often see increased trust from their stakeholders and can improve operational efficiency through recommendations.`,
  },
  {
    title: 'Compliance Audits',
    description: `Compliance audits assess an organization's adherence to regulatory guidelines and internal policies. 
    This type of audit is critical for organizations that operate in regulated industries, such as healthcare, finance, and manufacturing. 
    The audit process involves reviewing policies, procedures, and practices to ensure compliance with laws and regulations. 
    Non-compliance can result in significant financial penalties, reputational damage, and legal consequences. 
    Compliance audits identify potential gaps in compliance and provide actionable recommendations for improvement. 
    Additionally, these audits help organizations stay up-to-date with changing regulations, reducing the risk of non-compliance. 
    By proactively addressing compliance issues, organizations can enhance their operational integrity and stakeholder trust. 
    Regular compliance audits are essential for maintaining good standing with regulatory bodies and fostering a culture of ethical practices.`,
  },
  {
    title: 'Forensic Audits',
    description: `Forensic audits are specialized audits focused on detecting fraud and financial crimes within an organization. 
    This type of audit is often conducted when there are suspicions of financial misconduct or irregularities in financial reporting. 
    Forensic auditors use investigative techniques to analyze financial records, transactions, and internal controls. 
    Their work often involves collecting evidence for legal proceedings, including documenting findings and preparing reports for court. 
    Forensic audits can uncover fraudulent activities such as embezzlement, money laundering, and financial statement fraud. 
    These audits are critical for protecting organizational assets and maintaining trust among stakeholders. 
    Organizations may also use forensic audits as part of their risk management strategies to prevent future misconduct. 
    Conducting a forensic audit can lead to significant changes in internal controls and policies to mitigate the risk of fraud.`,
  },
  {
    title: 'Operational Audits',
    description: `Operational audits focus on the efficiency and effectiveness of an organization's operations. 
    These audits assess various processes and procedures to identify areas for improvement and cost reduction. 
    The goal is to enhance organizational performance while ensuring that resources are used effectively. 
    Operational auditors analyze workflows, performance metrics, and employee practices to identify inefficiencies. 
    Recommendations from operational audits can lead to streamlined processes, better resource allocation, and improved service delivery. 
    This service helps organizations adapt to changing market conditions and optimize their operations. 
    Organizations that regularly conduct operational audits can maintain a competitive edge and ensure sustainability. 
    Additionally, these audits encourage a culture of continuous improvement and accountability throughout the organization.`,
  },
];

const services = [
  {
    title: 'Tax Planning',
    description: `We provide expert tax planning services to help you optimize your tax obligations and enhance your financial efficiency. 
    Our experienced team analyzes your financial situation to create personalized tax strategies that align with your business goals. 
    By taking advantage of available deductions and credits, we help minimize your tax liabilities and maximize your savings. 
    Effective tax planning not only ensures compliance with tax regulations but also prepares your business for future financial challenges. 
    Our comprehensive approach includes forecasting and evaluating tax implications of various business decisions, investments, and transactions. 
    We stay up-to-date with the latest tax laws to provide you with the best advice and strategies to keep your tax burdens low. 
    With our tax planning services, you can focus on growing your business while we handle your tax strategy. 
    We believe in proactive planning to help you achieve long-term financial success and stability.`,
  },
  {
    title: 'Bookkeeping',
    description: `Our bookkeeping services ensure accurate financial records, helping you maintain compliance and make informed business decisions. 
    We handle everything from daily transactions to monthly reconciliations, ensuring that your financial data is always up-to-date. 
    With our professional bookkeeping, you can gain insights into your business's financial health and make strategic decisions accordingly. 
    We utilize the latest accounting software to streamline processes and improve accuracy in your financial reporting. 
    Our team provides regular financial statements, allowing you to monitor performance and identify trends. 
    By outsourcing your bookkeeping, you can save time and reduce overhead costs, allowing you to focus on your core business activities. 
    We tailor our services to meet your specific needs, whether you are a small business or a large corporation. 
    Our goal is to provide you with reliable financial data that supports your business's growth and sustainability.`,
  },
  {
    title: 'Financial Consulting',
    description: `We offer financial consulting services to help businesses develop strategies for growth and improve financial performance. 
    Our experienced consultants work closely with you to analyze your current financial situation and identify areas for improvement. 
    We provide tailored solutions that address your unique challenges and goals, whether it's cash flow management, budgeting, or investment planning. 
    Our comprehensive financial assessments include evaluating your operational efficiency, market conditions, and financial stability. 
    We believe in a collaborative approach, ensuring that you are involved in the decision-making process every step of the way. 
    Our financial consulting services empower you with the knowledge and tools necessary to make informed decisions for your business. 
    We stay abreast of industry trends and best practices, providing you with valuable insights that drive your business forward. 
    With our support, you can achieve sustainable growth and maximize your return on investment.`,
  },
  {
    title: 'Audit and Assurance',
    description: `Our audit and assurance services provide independent assessments to ensure compliance and enhance stakeholder confidence. 
    We conduct thorough audits that review your financial records, internal controls, and operational processes. 
    Our team of qualified auditors utilizes a risk-based approach to identify potential issues and recommend improvements. 
    We help you understand your financial performance through detailed reporting and analysis, enabling better decision-making. 
    Our audit process includes evaluating compliance with regulations, assessing financial statement accuracy, and providing management insights. 
    By enhancing transparency and accountability, our audit services foster trust among stakeholders and investors. 
    We tailor our audit approach to meet your specific needs, whether you require a full audit or a targeted review. 
    Our commitment to excellence ensures that you receive reliable and actionable audit results that support your business objectives.`,
  },
  {
    title: 'Business Advisory',
    description: `We provide business advisory services that focus on improving your business operations and increasing profitability. 
    Our experienced advisors work closely with you to identify challenges and opportunities within your organization. 
    We offer strategic insights that help you make informed decisions regarding growth, restructuring, and operational efficiency. 
    Our advisory services encompass market analysis, financial planning, and risk management to ensure your business's long-term success. 
    We understand the unique needs of your industry, enabling us to deliver tailored solutions that align with your objectives. 
    Our goal is to empower you with the knowledge and resources necessary to navigate the complexities of the business landscape. 
    We believe in fostering strong relationships with our clients to provide ongoing support and guidance. 
    With our business advisory services, you can achieve your vision and drive your business forward.`,
  },
];

const AuditingAndServices = () => {
  const [activeAuditingServiceIndex, setActiveAuditingServiceIndex] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  return (
    <>
  <img src={img3} alt=''/>
{/* <div className="relative">
        <img src={img} alt='' className="w-full h-auto object-cover" />
      </div> */}
    <div className="container mx-auto p-6 ">
      {/* Auditing Services Section */}
      <h2 className="text-5xl font-bold text-black mb-8 text-center ">Our Auditing Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 ">
        <div className="bg-white rounded-lg p-6 max-w-xs">
          <h3 className="text-3xl font-semibold text-black mb-4 "  >Auditing Services</h3>
          <ul className="list-none ">
            {auditingServices.map((service, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded-lg transition-colors mb-2 text-center  ${
                  activeAuditingServiceIndex === index ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'
                }`}
                onClick={() => setActiveAuditingServiceIndex(index)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-700 rounded-lg p-6 flex-1">
          <h3 className="text-3xl font-semibold text-black mb-4">{auditingServices[activeAuditingServiceIndex].title}</h3>
          <p className="text-white">{auditingServices[activeAuditingServiceIndex].description}</p>
        </div>
      </div>

      {/* General Services Section */}
      <h2 className="text-5xl font-bold text-black mb-8 text-center">Our General Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="bg-white rounded-lg p-6 max-w-xs">
          <h3 className="text-3xl font-semibold text-black mb-4">Services</h3>
          <ul className="list-none">
            {services.map((service, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded-lg transition-colors mb-2 text-center ${
                  activeServiceIndex === index ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'
                }`}
                onClick={() => setActiveServiceIndex(index)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-700 rounded-lg p-6 flex-1">
          <h3 className="text-3xl font-semibold text-black mb-4">{services[activeServiceIndex].title}</h3>
          <p className="text-white">{services[activeServiceIndex].description}</p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      {/* <div className="mt-10 text-center bg-blue-700 text-white p-8 rounded-lg">
        <h2 className="text-4xl font-bold">Contact Us for Professional Services!</h2>
        <p className="text-lg mb-4">Reach out today to discuss how we can assist you.</p>
        <button className="bg-white text-blue-700 px-8 py-4 rounded-lg">Get in Touch</button>
      </div> */}
    </div>
    </>
  );
};

export default AuditingAndServices;
