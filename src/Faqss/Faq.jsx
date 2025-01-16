import React, { useState, useEffect } from "react";
import "./Faq.css"; 

function FAQPage() {
  const [activeDetail, setActiveDetail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("cookie");
    setIsLoggedIn(!!token);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const handleDetailClick = (index) => {
    setActiveDetail((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-page">
      {/* FAQ Content */}
      <div className="body-page">
        <main className="faq">
          <div className="faq__logo__holder">
            <div className="faq__logo">
              <img
                src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-woman-online-mobile.svg"
                alt="Faq image"
                className="faq__logo__image hidden-lg"
              />
              <img
                src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-box-desktop.svg"
                alt="faq image"
                className="faq__logo__image visible-lg"
              />
            </div>
          </div>

          <div className="faq__holder">
            <h1 className="faq__heading">FAQ</h1>

            {/* FAQ Items */}
            {faqData.map((item, index) => (
              <details
                key={index}
                className="faq__detail"
                open={activeDetail === index}
                onClick={() => handleDetailClick(index)}
              >
                <summary className="faq__summary">
                  <span className="faq__question">{item.question}</span>
                </summary>
                <p className="faq__text" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
              </details>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// FAQ Data Array
const faqData = [
  {
    question: "How do I register for Pragyaa 2k25?",
    answer: `Registration can be done on - <a href="https://pragyaa.tech/"> https://pragyaa.tech/</a> by filling in your personal details. Then you can register for any event by clicking on that particular event and following there.`,
  },
  {
    question: "What should I do after completing registration?",
    answer: `After registering, you will get an email to verify your registration. Keep following our updates on social media and email.`,
  },
  {
    question: "Is the entry free for all? Who can attend?",
    answer: `Entry to Essence will be absolutely free. Only college students (and those who have passed the 12th but haven't been allotted a college yet) are allowed.`,
  },
  {
    question: "Can I cancel my goodie order?",
    answer: `No, If you buy a goodie once you can't cancel your order.`,
  },
  {
    question: "Can I unregister myself from events?",
    answer: `Yes, you can unregister yourself from any event you registered for.`,
  },
  {
    question: "How can I be a part of the organizing team of Pragyaaa?",
    answer: `You can become a college ambassador for your college, and you will become the primary point of contact between your college and the Aurora'20 team. For further queries, you may reach out to us <a href="https://pragyaa.tech/">here</a>.`,
  },
];

export default FAQPage;
