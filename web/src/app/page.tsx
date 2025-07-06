import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Mint from "@/components/landing/mint";
import Nav from "@/components/landing/nav";
import ProjectsShowcase from "@/components/landing/project-showcase";
import ProjectSlide from "@/components/landing/project-slide";
import Testimonials from "@/components/landing/testimonials";
import WhatIs from "@/components/landing/what-is";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="custom-scrollbar flex flex-col min-h-screen items-center !overflow-x-hidden w-screen bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 relative">
      <Nav />
      <div className="absolute rounded-full top-40 size-[30rem] bg-gradient-to-br from-purple-600/20 to-pink-600/30 blur-[9rem] z-[-2] mx-auto" />
      <div className=" px-[2rem] w-full">
        <ProjectsShowcase/>
        <WhatIs/>
        <Features/>
        <Testimonials/>
        <Mint/>
        <Footer/>
      </div>
    </div>  
  );
}
