import React, { useState } from "react";
import "./SpecG6.css"

const faqData = [
  {
    title: "XPENG G6 Technical Specifications",
    content:
      "Here you can put detailed technical specifications like battery, range, performance, etc.",
  },
  {
    title: "XPENG G6 Main Specifications",
    content:
      "This section can include dimensions, seating, color options, and key features.",
  },
  {
    title: "XPENG G6 Configuration Specifications",
    content:
      "Configuration details such as trim levels, optional packages, and software setup can go here.",
  },
];

const SpecG6 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="accordion-container">
      <h2 className="accordion-title">G6 SPECIFICATIONS</h2>
      {faqData.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span className="accordion-icon">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SpecG6;
