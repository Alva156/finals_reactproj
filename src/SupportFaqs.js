import React, { useState } from "react";
import "./supportfaqs.css";

const SupportFaqs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1 className="faq-heading">FAQs</h1>
      <div className="faq-container">
        {[1, 2, 3, 4, 5].map((questionNumber) => (
          <div key={questionNumber} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleQuestion(questionNumber)}
            >
              <span>Question {questionNumber}</span>
              <span className="faq-arrow">
                {expandedQuestion === questionNumber ? "▼" : "▶"}
              </span>
            </div>
            {expandedQuestion === questionNumber && (
              <div className="faq-answer">
                This is the answer to Question {questionNumber}.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportFaqs;
