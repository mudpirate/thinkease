import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testinomials";
import Mental from "@/components/Mental";

export default function Home() {
  return (
    <>
      <Hero />
      <Section />

      <Testimonials />
      <Footer />
    </>
  );
}
