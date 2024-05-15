import React, { useState } from "react";
import "./supportfaqs.css";

const SupportFaqs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  // Define an array of questions
  const questions = [
    "How do I book a trip through SeoulSeeker?",
    "What safety measures are in place due to COVID-19?",
    "Can I customize my travel package on SeoulSeeker?",
    "What payment methods does SeoulSeeker accept?",
    "What if I need assistance during my trip booked through SeoulSeeker?",
  ];

  const answers = [
    "Booking your trip with SeoulSeeker is simple! Just navigate to our homepage, select your desired destination, dates, and preferences, and browse through the available options. Once you find the perfect package, click Book Now and follow the prompts to complete your reservation securely.",
    "At SeoulSeeker, your safety is our top priority. We adhere to all local and international health guidelines to ensure a safe and enjoyable travel experience. This includes regular sanitization of accommodations, transportation, and adherence to social distancing protocols. Please check our COVID-19 information page for the latest updates and requirements.",
    "Absolutely! SeoulSeeker offers customizable travel packages tailored to your preferences and interests. Whether you're looking for a cultural tour, adventure activities, or a relaxing getaway, our team can create a personalized itinerary just for you. Simply contact our customer support team to discuss your options.",
    "We accept various payment methods for your convenience, including credit/debit cards, PayPal, and bank transfers. Rest assured, all transactions made on SeoulSeeker are secure and encrypted to protect your sensitive information.",
    "SeoulSeeker provides 24/7 customer support to assist you throughout your journey. If you encounter any issues or require assistance during your trip, simply reach out to our dedicated support team via phone, email, or live chat. We're here to ensure your travel experience is seamless and enjoyable from start to finish.",
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-heading">FAQs</h1>
      <div className="faq-container">
        {questions.map((question, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <span>{question}</span>
              <span className="faq-arrow">
                {expandedQuestion === index ? "▼" : "▶"}
              </span>
            </div>
            {expandedQuestion === index && (
              <div className="faq-answer">{answers[index]}.</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportFaqs;
