import React from "react";
import Hero from "./_components/hero";
import Features from "./_components/features";
import PricingSection from "./_components/pricing";
import CtaBanner from "./_components/cta-banner";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <PricingSection />
      <CtaBanner />
    </main>
  );
};

export default HomePage;
