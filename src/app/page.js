"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import Link from "next/link";
import Cloudhub from "@/../../public/cloudhub.png";
import BrandDesigner from "@/../../public/branddesigner.png";
import RealEstate from "@/../../public/Real Estate Images/Image1.png";

export default function Home() {
  const sectionsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      const title = section.querySelector(".split-text");
      const split = new SplitText(title, { types: "words, chars" });

      // Animate text
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate section in
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate buttons on hover
    const buttons = document.querySelectorAll(".animated-btn");
    buttons.forEach((btn) => {
      const baseColor = btn.getAttribute("data-color");
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.1,
          backgroundColor: "#fff",
          color: "#000",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          backgroundColor: "#fff",
          color: "#000",
          border: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  const sections = [
    {
      src: Cloudhub,
      title: "Cloudhub",
      link: "/Cloudhub",
      color: "#fb432c", // orange
    },
    {
      src: BrandDesigner,
      title: "Brand Designer",
      link: "/BrandDesigner",
      color: "#c9f23d", // green
    },
    {
      src: RealEstate,
      title: "Real Estate",
      link: "/RealEstate",
      color: "#c6a667", // gold
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-[5vh] py-20 max-sm:px-3">
      {sections.map((item, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          style={{ backgroundColor: item.color }}
          className="flex flex-col items-center justify-center text-center gap-6 px-10 py-12 rounded-3xl w-[70%] max-sm:w-full max-sm:px-3 mx-auto transition-colors duration-500"
        >
          <div className="relative overflow-hidden rounded-xl group">
            <Image
              src={item.src}
              width={800}
              height={800}
              alt={`${item.title} image`}
              className="rounded-xl transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          <p className="split-text text-4xl text-white font-clash font-semibold">
            {item.title}
          </p>

          <div className="flex items-center justify-center gap-8">
            <button
              data-color={item.color}
              className="animated-btn bg-white text-black font-medium text-base px-6 py-3 rounded-2xl cursor-pointer transition-all"
              style={{ backgroundColor: item.color }}
            >
              <Link href={item.link}>Live</Link>
            </button>
            <button
              data-color={item.color}
              className="animated-btn bg-white text-black font-medium text-base px-6 py-3 rounded-2xl cursor-pointer transition-all"
              style={{ backgroundColor: item.color }}
            >
              <Link href={item.link}>GitHub</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
