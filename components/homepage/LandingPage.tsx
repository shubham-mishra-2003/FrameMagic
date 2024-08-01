"use client";

import Footer from "@/components/homepage/Footer";
import MainSection from "@/components/homepage/MainSection";
import Pricing from "@/components/homepage/Pricing";
import Contact from "./Contact";
import Features from "./Features";
import About from "@/components/homepage/About";
import Header from "./Header";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div>
        <div className="bg-black fixed top-0 left-0 py-3 px-6 flex justify-between items-center w-full">
          <div className="bg-slate-200 animate-pulse w-32 h-14 rounded-lg" />
          <div className="flex justify-center items-center gap-3">
            <div className="md:flex gap-2 hidden">
              <div className="bg-slate-200 animate-pulse md:w-24 lg:w-32 h-14 rounded-lg" />
              <div className="bg-slate-200 animate-pulse md:w-24 lg:w-32 h-14 rounded-lg" />
              <div className="bg-slate-200 animate-pulse md:w-24 lg:w-32 h-14 rounded-lg" />
              <div className="bg-slate-200 animate-pulse md:w-24 lg:w-32 h-14 rounded-lg" />
            </div>
            <div className="lg:flex hidden gap-2">
              <div className="bg-slate-200 animate-pulse w-24 h-14 rounded-lg" />
              <div className="bg-slate-200 animate-pulse w-24 h-14 rounded-lg" />
              <div className="bg-slate-200 animate-pulse w-14 h-14 rounded-full" />
            </div>
            <div className="bg-slate-200 animate-pulse w-10 h-10 lg:hidden rounded-lg" />
          </div>
        </div>
        <div className="flex gap-12 bg-black px-20 overflow-hidden flex-col justify-center items-center h-screen pt-24">
          <div className="bg-slate-200 animate-pulse h-32 w-40 rounded-lg" />
          <div className="bg-slate-200 h-32 w-full animate-pulse rounded-lg" />
          <div className="bg-slate-200 h-32 w-72 rounded-lg animate-pulse" />
          <div className="bg-slate-200 h-32 w-32 rounded-lg animate-pulse" />
          <div className="bg-slate-200 h-10 w-56 rounded-lg animate-pulse" />
          <div className="bg-slate-200 h-[300px] w-full rounded-lg animate-pulse" />
        </div>
      </div>
    );

  return (
    <>
      <div className="sm:px-10 px-6">
        <Header />
        <MainSection />
        <About />
        <Features />
        <Pricing />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
