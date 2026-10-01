import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CallButton from "./components/CallButton.jsx";

import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Solar from "./sections/Solar.jsx";
import Brands from "./sections/Brands.jsx";
import Contact from "./sections/Contact.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(
        ".services, .solar, .brands, .contact",
      );

      sections.forEach((section) => {
        const items = section.querySelectorAll(
          "h2, h3, p, article, [class*='card']",
        );

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
        });

        timeline.from(section, {
          autoAlpha: 0,
          y: 35,
          duration: 0.65,
          ease: "power2.out",
        });

        if (items.length) {
          timeline.from(
            items,
            {
              autoAlpha: 0,
              y: 18,
              duration: 0.45,
              stagger: 0.04,
              ease: "power2.out",
            },
            "-=0.35",
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Solar />
        <Brands />
        <Contact />
      </main>

      <Footer />
      <CallButton />
    </>
  );
}