import React from 'react';
import '../../assets/css/FAQs.css';

function FAQs() {
  return (
    <div className="faqs">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h2>What payment methods do you accept?</h2>
        <p>We accept all major credit cards, PayPal, and bank transfers.</p>
      </div>

      <div className="faq-item">
        <h2>Can I cancel my order?</h2>
        <p>Yes, you can cancel your order within 24 hours of placing it.</p>
      </div>

      <div className="faq-item">
        <h2>How do I return an item?</h2>
        <p>Please contact our customer service team to initiate the return process.</p>
      </div>

      {/* Add more FAQ items as needed */}
    </div>
  );
}

export default FAQs;
