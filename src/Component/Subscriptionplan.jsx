import React, { useState, useEffect } from 'react';
import './subplan.css';
import AddBook from '../Page/AddBook';

const plans = [
  {
    title: 'Basic Plan',
    price: '₹199/mo',
    description: 'Perfect for individuals looking for flexible access.',
    features: ['1 Month Free Trial', 'Cancel Anytime', '24/7 Support'],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Standard Plan',
    price: '₹1099/6 Months',
    description: 'Great for professionals needing extended access.',
    features: ['Save More', 'Priority Support', 'Access to New Features'],
    buttonText: 'Choose Plan',
  },
  {
    title: 'Premium Plan',
    price: '₹1,990/yr',
    description: 'Best value for long-term users with exclusive benefits.',
    features: ['2 Months Free', 'Premium Support', 'Advanced Analytics'],
    buttonText: 'Get Yearly Plan',
  },
];

function Subscriptionplan() {
  const [role, setRole] = useState('user');

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  return (
    <div className="subplan text-center">
      {role === 'admin' ? (
        <>
          <h1>Admin Panel</h1>
          <AddBook/>
        </>
      ) : (
        <>
          <h1>Choose Your Plan</h1>
          <h5>Start with a free trial and pick a plan that fits your needs.</h5>

          <div className="container">
            <div className="row">
              {plans.map((plan, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                  <div className="plan-card">
                    <h3>{plan.title}</h3>
                    <h2 className="price">{plan.price}</h2>
                    <p className="desc">{plan.description}</p>
                    <ul className="feature-list">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="check">✔</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="buttons btn btn-primary text-center">
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Subscriptionplan;
