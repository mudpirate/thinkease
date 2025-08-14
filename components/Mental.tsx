// components/MentalHealthHero.tsx
export default function MentalHealthHero() {
  return (
    <section className="relative w-[95vw] rounded-xl max-w-7xl mx-auto h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611881977141-0d8334ca7d9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
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
