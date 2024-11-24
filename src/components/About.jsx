import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="relative min-h-screen w-screen bg-white">
    <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 z-10">
      <p className="font-general text-sm uppercase md:text-[10px]">
        Welcome to CK Tech Hub
      </p>
  
      <AnimatedTitle
        title="Disc<b>o</b>ver Cutting-Edge <br /> IT & Blockchain Solutions"
        containerClass="mt-5 !text-black text-center"
      />
  
      <div className="about-subtext bg-white/70 p-5 rounded-lg shadow-md z-20">
        <p>Innovating Technology and Blockchain for a Smarter Future</p>
        <p className="text-gray-500">
          At CK Tech Hub, we specialize in website development, mobile apps, custom software, and blockchain technology.
          Our goal is to empower businesses with scalable, affordable, and innovative solutions tailored to their needs.
        </p>
      </div>
    </div>
  
    <div className="h-dvh w-screen" id="clip">
      <div className="mask-clip-path about-image">
        <img
          src="img/about.webp"
          alt="Background"
          className="absolute left-0 top-0 size-full object-cover"
        />
      </div>
    </div>
  </div>
  
  );
};

export default About;
