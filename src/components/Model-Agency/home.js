"use client";
import Image from "next/image";
import React from "react";
import Model1 from "@/../../public/model images/model-1.jpg";
import Model2 from "@/../../public/model images/model-3.jpg";
import Model3 from "@/../../public/model images/model-4.jpg";
import Model4 from "@/../../public/model images/model-5.jpg";
import Model5 from "@/../../public/model images/model-12.jpg";

import Model6 from "@/../../public/model images/model-14.jpg";
import Model7 from "@/../../public/model images/model-8.jpg";
import Model8 from "@/../../public/model images/model-9.jpg";
import Model9 from "@/../../public/model images/model-10.jpg";
import Model10 from "@/../../public/model images/model-11.jpg";

import Model11 from "@/../../public/model images/model-13.jpg";
import Model12 from "@/../../public/model images/model-21.jpg";
import Model13 from "@/../../public/model images/model-22.jpg";
import Model14 from "@/../../public/model images/model-23.jpg";
import Model15 from "@/../../public/model images/model-16.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    //Animate Navbar
    ScrollTrigger.create({
      trigger: "body",
      start: "5% 10%",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to("#navbar", {
          background: "#0a0a0a",
          boxShadow: "4px 7px 8px rgba(0,0,0,0.2)",
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to("#navLinks", {
          color: "#ededed",
        });
      },
      onLeave: () => {
        gsap.to("#navbar", {
          background: "transparent",
        });
        gsap.to("#navLinks", {
          color: "#0a0a0a",
        });
      },
      //   markers: true,
    });

    //Clip Path Scroll Trigger
    //  ScrollTrigger.create({
    //    trigger: '#talent-container',
    //  start: "top top",
    //   end: 'bottom 70%',
    //    pin: true,
    //  pinSpacing: true,
    //  onUpdate: (progress) => {
    //  const self =
    //  }
    // });
  });

  return (
    <>
      <header
        id="navbar"
        className="flex z-50 items-center justify-between fixed w-full px-14 py-5 font-sankorika text-lg cursor-pointer"
      >
        <p id="navLinks" className="underline">
          Neuo
        </p>
        <nav>
          <ul
            id="navLinks"
            className="flex items-center justify-center gap-4 text-lg underline"
          >
            <li>Home</li>
            <li>About</li>
            <li>Talents</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <div id="navLinks" className="flex gap-4 text-lg">
          <button className="underline">Register</button>
          <button className="bg-amber-700 px-3 py-3 text-white shadow shadow-amber-900 rounded-2xl cursor-pointer">
            Book a Talent
          </button>
        </div>
      </header>
      {/* Section 1 */}
      <section className="pt-32 px-14 font-saira">
        <p>Neuo</p>
        <h2 className="font-bold text-[10rem] uppercase font-russo leading-36">
          Models living
          <br /> the dream
        </h2>
        <div id="talent-container" className="overflow-hidden">
          {/* Talent 1 */}
          <div id="container1" className="flex items-center justify-around">
            <div
              id="main-img"
              className="w-[800px] h-[850px] overflow-hidden relative"
            >
              <Image
                src={Model1}
                width={600}
                height={600}
                alt="Talent Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="w-[450px] h-[400px] overflow-hidden relative">
                <Image
                  src={Model2}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[400px] overflow-hidden relative">
                <Image
                  src={Model3}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[450px] overflow-hidden relative">
                <Image
                  src={Model4}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[450px] overflow-hidden relative">
                <Image
                  src={Model5}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Talent 2 */}
          <div id="container2" className="flex items-center justify-around">
            <div
              id="main-img"
              className="w-[800px] h-[850px] overflow-hidden relative"
            >
              <Image
                src={Model6}
                width={600}
                height={600}
                alt="Talent Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="w-[450px] h-[400px] overflow-hidden relative">
                <Image
                  src={Model7}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[400px] overflow-hidden relative">
                <Image
                  src={Model8}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[450px] overflow-hidden relative">
                <Image
                  src={Model9}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[450px] overflow-hidden relative">
                <Image
                  src={Model10}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Talent 3 */}
          <div id="container3" className="flex items-center justify-around">
            <div
              id="main-img"
              className="w-[800px] h-[850px] overflow-hidden relative"
            >
              <Image
                src={Model11}
                width={600}
                height={600}
                alt="Talent Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="w-[450px] h-[400px] overflow-hidden relative">
                <Image
                  src={Model12}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[400px] overflow-hidden relative">
                <Image
                  src={Model13}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[450px] overflow-hidden relative">
                <Image
                  src={Model14}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[450px] h-[450px] overflow-hidden relative">
                <Image
                  src={Model15}
                  width={200}
                  height={200}
                  alt="Talent Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-14 pt-32">
        <h2 className="bg-black font-russo font-medium -z-40 text-white w-fit px-4 py-3 rounded-[40px] mb-4">
          Get to Know us
        </h2>
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <p className="text-4xl w-1/2 leading-11">
              Every Person deserves a chance to live their dreams. We understand
              that the dream is free but the huslte has a cost attached to it
              thats why we are here. To make the huslte free. You get a chance
              to walk the runway, be the face of that brand and much more.{" "}
            </p>
            <p className="text-4xl w-1/2 pt-4 leading-11">
              Choose from our variety of talents, beuaty well endowned from the
              rich choco for their melanin to the height to showcase that height
              of that dress or the curve that showcases the curves of the the
              dress
            </p>
          </div>
          <button className="bg-black text-white rounded-full px-5 py-8">
            Arrow
          </button>
        </div>
      </section>

      {/* Talent showcase */}
      <section className="mt-28">
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src={Model2}
            width={200}
            height={200}
            alt="Model"
            className="w-full h-full object-cover"
          />
          {/* Showcase talent images*/}
          <div className="absolute bottom-10 right-5 flex flex-col">
            <div className="w-[350px] h-[350px] overflow-hidden relative rounded-full">
              <Image
                src={Model4}
                width={200}
                height={200}
                alt="Talent Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[350px] h-[350px] overflow-hidden relative rounded-full">
              <Image
                src={Model5}
                width={200}
                height={200}
                alt="Talent Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Marquee for Name */}

          <div className="absolute bottom-0  whitespace-nowrap overflow-x-hidden bg-black text-white flex gap-[2vw] py-[1.5vw]">
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
            <p className="text-7xl font-russo font-normal">Annabelle Okafor</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
