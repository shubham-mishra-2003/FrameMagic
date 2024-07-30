import AboutUs from "@/components/homepage/Aboutus";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import MainSection from "@/components/homepage/MainSection";
import Pricing from "@/components/homepage/Pricing";
import Contact from "./Contact";
import Features from "./Features";

const LandingPage = () => {
  return (
    <div className="sm:px-10 px-6">
      <Header />
      <MainSection />
      <Features />
      <Pricing />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
