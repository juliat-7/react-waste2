// components/FAQ/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "What is waste management?",
    answer: "Waste management is the collection, transportation, and disposal of waste materials."
  },
  {
    question: "How do I practice waste management at home?",
    answer: "Keep separate containers for dry and wet waste in the kitchen. Keep two bags for dry waste collection- paper and plastic, for the rest of the household waste. Keep plastic from the kitchen clean and dry and drop into the dry waste bin. Keep glass /plastic containers rinsed of food matter. Keep a paper bag for throwing sanitary waste."
  },
  {
    question: "What are the first few steps to initiate a waste management programme in your apartment complex?",
    answer: "Form a group with like-minded people. Explain waste segregation to your family / neighbours in your apartment building. Get the staff in the apartment building to also understand its importance. Get separate storage drums for storing dry and wet waste. Have the dry waste picked up by the dry waste collection centre or your local scrap dealer."
  },
  {
    question: "What are the different types of waste?",
    answer: "1. Wet waste- Kitchen waste including vegetable and fruit peels, tea leaves, etc.\n2. Dry Waste- Paper, plastics, metal, glass, rubber, etc.\n3. Hazardous waste- E-waste, toxic substances, chemicals, etc.\n4. E-waste- Batteries, computer parts, electrical equipment, etc.\n5. Biomedical waste- Used menstrual cloth, sanitary napkins, bandages, etc."
  },
  {
    question: "How do I dispose of my waste?",
    answer: "1. Compost your wet waste at home\n2. Compost your wet waste at the community level\n3. Biomedical waste has to be wrapped separately and handed over to the municipality waste collection system"
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Waste management regulations and disposal methods.</p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;