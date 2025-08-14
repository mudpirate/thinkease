"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative h-[100vh] flex flex-col items-center justify-center">
      <Navbar />
      {/* Background Image */}
      <div className="absolute  inset-0">
        <Image
          src="/scene2.jpg" // Replace with your own image in public/
          alt="Calm therapy background"
          fill
          className="object-cover"
          priority
        />
        {/* Inset Overlay */}

        <div className="absolute inset-0    bg-black/40" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-7xl font-bold text-white drop-shadow-lg">
          Find Your Calm
        </h1>
        <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
          Your personal AI therapist is here to guide you toward peace and
          clarity.
        </p>
        <Link
          href="/sessions"
          className="inline-block mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full shadow-lg transition"
        >
          Start Session
        </Link>
      </div>
    </section>
  );
}
