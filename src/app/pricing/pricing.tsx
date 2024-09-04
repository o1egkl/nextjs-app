import { useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingTiers = [
    {
      name: "Starter",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        "100 AI-generated images per month",
        "Basic editing tools",
        "5GB cloud storage",
        "Email support"
      ]
    },
    {
      name: "Pro",
      monthlyPrice: 24.99,
      annualPrice: 249.99,
      features: [
        "500 AI-generated images per month",
        "Advanced editing tools",
        "25GB cloud storage",
        "Priority email support",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      monthlyPrice: 99.99,
      annualPrice: 999.99,
      features: [
        "Unlimited AI-generated images",
        "Full suite of editing tools",
        "100GB cloud storage",
        "24/7 phone and email support",
        "Dedicated account manager",
        "Custom API integration"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-900">
            Choose Your Plan
          </h1>
          <p className="text-xl mb-8 text-indigo-700">
            Select the perfect plan for your AI image generation needs
          </p>
          <div className="mb-8">
            <label htmlFor="billing-toggle" className="inline-flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="billing-toggle" className="sr-only" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                <div className="w-14 h-7 bg-gray-300 rounded-full shadow-inner"></div>
                <div className={`absolute left-0.5 top-0.5 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
              </div>
            </label>
            <div className="mt-2 text-sm text-gray-600">
              {isAnnual ? 'Annual billing selected' : 'Monthly billing selected'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-800">{tier.name}</h2>
                <p className="text-4xl font-bold mb-6 text-indigo-600">
                  ${isAnnual ? tier.annualPrice.toFixed(2) : tier.monthlyPrice.toFixed(2)}
                  <span className="text-sm font-normal text-gray-600">
                    {isAnnual ? '/year' : '/month'}
                  </span>
                </p>
                <ul className="text-left mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 mt-auto"
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}