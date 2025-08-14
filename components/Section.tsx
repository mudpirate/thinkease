"use client";

import { FaComments, FaHeartbeat, FaBrain } from "react-icons/fa";

export default function FeaturesSection() {
  // ... existing code ...
  const features = [
    {
      icon: (
        <div className="text-teal-600 text-4xl mb-4">
          <FaComments />
        </div>
      ),
      title: "Private Conversations",
      description:
        "Talk freely and openly with your AI therapist, available 24/7 in a safe and confidential space.",
    },
    {
      icon: (
        <div className="text-pink-500 text-4xl mb-4">
          <FaHeartbeat />
        </div>
      ),
      title: "Emotional Wellness",
      description:
        "Get gentle guidance and techniques to manage stress, anxiety, and emotional challenges.",
    },
    {
      icon: (
        <div className="text-cyan-500 text-4xl mb-4">
          <FaBrain />
        </div>
      ),
      title: "AI-Powered Insights",
      description:
        "Receive thoughtful, personalized responses backed by advanced AI understanding.",
    },
  ];
  // ... existing code ...

  return (
    <section className="py-32   px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-white mb-4">
          How ThinkEase Helps You
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          ThinkEase is designed to be your calm, supportive companion —
          available any time you need to share, reflect, or find peace.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center hover:scale-105 ease-in-out transition-all border border-gray-300 items-center bg-black  p-8 rounded-2xl shadow-lg hover:shadow-xl duration-300"
            >
              <div className="">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
