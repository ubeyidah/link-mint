import React from "react";
import Hero from "./_components/hero";
import Features from "./_components/features";
import PricingSection from "./_components/pricing";
import Footer from "./_components/footer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default HomePage;
