"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-black  to-teal-200">
      <section className="relative  h-[100vh] flex  flex-col  items-center justify-center">
        <Navbar />
        {/* Background Image */}
        <div className="absolute  inset-0">
          <Image
            src="/scene2.jpg" // Replace with your own image in public/
            alt="Calm therapy background"
            fill
            className="object-cover "
            priority
          />
          {/* Inset Overlay */}

          <div className="absolute inset-0   backdrop-blur-xs  bg-black/50" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl sm:text-8xl font-bold  bg-gradient-to-b from-teal-400  to-white bg-clip-text text-transparent drop-shadow-lg">
            Find Your{" "}
            <span className="bg-gradient-to-b from-teal-400  to-white bg-clip-text text-transparent">
              Calm
            </span>
          </h1>

          <p className="mt-7 text-lg text-gray-100 font-semibold max-w-2xl mx-auto">
            "ThinkEase — Your AI-powered companion for calm, care, and clarity,
            whenever you need it. Always here to listen, guide, and uplift you
            through life’s challenges. Because your mental wellness deserves
            support that never sleeps."
          </p>
          <Link
            href="/sessions"
            className="inline-block mt-12 px-6 py-3 bg-black hover:bg-teal-400 text-white font-semibold rounded-full shadow-lg transition"
          >
            Start your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
