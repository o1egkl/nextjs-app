'use client';

import { useState } from 'react';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

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
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8" style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-600">Choose Your Plan</h1>
        <p className="text-xl mb-8 text-center text-gray-600">
          Select the perfect plan for your AI image generation needs
        </p>

        <div className="mb-8 flex justify-center items-center">
          <span className={`mr-3 ${!isAnnual ? 'font-bold text-indigo-600' : 'text-gray-600'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                isAnnual ? 'translate-x-7' : ''
              }`}
            />
          </button>
          <span className={`ml-3 ${isAnnual ? 'font-bold text-indigo-600' : 'text-gray-600'}`}>Annual</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{tier.name}</h2>
              <p className="text-4xl font-bold mb-6 text-gray-800">
                ${isAnnual ? (tier.annualPrice / 12).toFixed(2) : tier.monthlyPrice.toFixed(2)}
                <span className="text-sm font-normal text-gray-600">/month</span>
              </p>
              <ul className="text-left mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2 text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}