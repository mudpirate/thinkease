import Image from "next/image";
export default function MentalHealthHero() {
  return (
    <section className="relative bg-gradient-to-r from-black  to-teal-900   max-w-7xl mx-auto h-[50vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/fur.jpg" // Replace with your own image in public/
        alt="Calm therapy background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Value Your Mental Health
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Prioritize your well-being. Let ThinkEase guide you towards calmness,
          clarity, and balance every day.
        </p>
      </div>
      {/* Text Overlay */}
    </section>
  );
}
