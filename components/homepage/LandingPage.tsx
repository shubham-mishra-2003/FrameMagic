"use client";

import AboutUs from "@/components/homepage/Aboutus";
import Cards from "@/components/homepage/Cards";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import MainSection from "@/components/homepage/MainSection";
import Pricing from "@/components/homepage/Pricing";
import ScrollToTop from "@/components/homepage/ScrollToTop";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <AboutUs />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default LandingPage;
