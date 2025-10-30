"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../../public/Brand Desinger Photos/designer logo.svg";
import Logo1 from "@/../../public/Brand Desinger Photos/logo.svg";
import Logo2 from "@/../../public/Brand Desinger Photos/logo3.svg";
import Logo3 from "@/../../public/Brand Desinger Photos/logo5.svg";
import Logo4 from "@/../../public/Brand Desinger Photos/logo6.svg";
import Logo5 from "@/../../public/Brand Desinger Photos/Vector.png";

import Image1 from "@/../../public/Brand Desinger Photos/designerimage.png";
import Image2 from "@/../../public/Brand Desinger Photos/designersimage.png";
import Image3 from "@/../../public/Brand Desinger Photos/productimage.png";
import Image4 from "@/../../public/Brand Desinger Photos/productimage3.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Mouse enter
  const mouseEnter = () => {
    setIsHovered(true);
    gsap.to(".play_btn", {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Mouse move
  const mouseMove = (e) => {
    if (!isHovered) return;

    const { clientX, clientY } = e;

    gsap.to(".play_btn", {
      x: clientX - 50,
      y: clientY - 50,
      duration: 0.15,
      ease: "power3.out",
    });
  };

  const moveEnter = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector(".inner-img");

    // Animate the div border
    gsap.to(container, {
      border: "8px solid #d2f65a",
      duration: 0.3,
      ease: "power2.out",
    });

    // Animate the image scale
    gsap.to(img, {
      scale: 1.2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const moveLeave = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector(".inner-img");

    // Remove border
    gsap.to(container, {
      border: "none",
      duration: 0.3,
      ease: "power2.in",
    });

    // Reset image scale
    gsap.to(img, {
      scale: 1,
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  // Mouse leave
  const mouseLeave = () => {
    setIsHovered(false);
    gsap.to(".play_btn", {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };
  useGSAP(() => {
    gsap.set(".play_btn", { opacity: 0, scale: 0 });

    gsap.to(".marquee", {
      xPercent: -100,
      repeat: Infinity,
      duration: 30,
      ease: "linear",
    });
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none", duration: 20 },
    });

    tl.to(".marquee-logo", {
      xPercent: -100,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    });

    gsap.to(".marquee-header", {
      xPercent: -100,
      repeat: Infinity,
      duration: 30,
      ease: "linear",
    });
  });
  //Menu btn
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-14 max-sm:px-2 py-6 relative">
        <div>
          <Image src={Logo} width={150} height={150} alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="font-clash cursor-pointer flex items-center justify-center space-x-10 text-sm uppercase font-normal">
            <li className="hover:text-main transition">Work</li>
            <li className="hover:text-main transition">Contact</li>
            <li className="bg-main px-5 py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-80 transition">
              <span className="w-3 h-[1.6px] bg-black" />
              Get in touch
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggle}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        >
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden animate-slideDown">
            <ul className="font-clash flex flex-col items-center py-6 space-y-6 text-sm uppercase font-normal">
              <li className="hover:text-main transition">Work</li>
              <li className="hover:text-main transition">Contact</li>
              <li className="bg-main px-5 py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-80 transition">
                <span className="w-3 h-[1.6px] bg-black" />
                Get in touch
              </li>
            </ul>
          </nav>
        )}
      </header>
      <section className="px-14 max-sm:px-2">
        <div className="header-text">
          <svg
            className="max-sm:w-full max-sm:h-full"
            width="1455"
            height="339"
            viewBox="0 0 1824 339"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 335.97V3.02676H133.177V67.9129H66.967V120.881H129.772V185.011H66.967V335.97H0Z"
              fill="black"
            />
            <path
              d="M151.716 335.97V3.02676H216.035V335.97H151.716Z"
              fill="black"
            />
            <path
              d="M242.519 335.97V3.02676H310.999L341.645 162.499V3.02676H405.964V335.97H340.889L307.594 169.498V335.97H242.519Z"
              fill="black"
            />
            <path
              d="M435.475 335.97V3.02676H503.955L534.601 162.499V3.02676H598.92V335.97H533.844L500.55 169.498V335.97H435.475Z"
              fill="black"
            />
            <path
              d="M798.307 338.997C767.914 338.997 745.97 331.43 732.475 316.296C719.107 301.162 712.423 277.074 712.423 244.032V211.495H778.255V253.113C778.255 260.806 779.39 266.859 781.66 271.273C784.056 275.561 788.155 277.705 793.956 277.705C800.01 277.705 804.172 275.939 806.442 272.408C808.838 268.877 810.036 263.076 810.036 255.004C810.036 244.789 809.027 236.276 807.009 229.466C804.991 222.53 801.46 215.972 796.416 209.792C791.497 203.486 784.624 196.172 775.796 187.848L745.907 159.472C723.584 138.411 712.423 114.323 712.423 87.2085C712.423 58.8326 718.981 37.2039 732.097 22.3223C745.339 7.44078 764.446 0 789.416 0C819.936 0 841.565 8.13441 854.302 24.4032C867.166 40.6721 873.598 65.3906 873.598 98.5588H805.874V75.6689C805.874 71.1288 804.55 67.5976 801.902 65.0753C799.379 62.553 795.911 61.2918 791.497 61.2918C786.2 61.2918 782.291 62.8052 779.768 65.832C777.372 68.7326 776.174 72.5161 776.174 77.1823C776.174 81.8486 777.435 86.8932 779.958 92.3161C782.48 97.7391 787.462 103.982 794.902 111.044L833.304 147.933C840.997 155.247 848.06 163.004 854.492 171.201C860.923 179.272 866.094 188.731 870.004 199.577C873.913 210.297 875.868 223.413 875.868 238.925C875.868 270.201 870.067 294.731 858.464 312.513C846.988 330.169 826.936 338.997 798.307 338.997Z"
              fill="black"
            />
            <path
              d="M977.643 338.997C951.033 338.997 930.665 330.989 916.54 314.972C902.541 298.829 895.542 275.561 895.542 245.167V87.0193C895.542 58.5173 902.478 36.8886 916.351 22.1332C930.35 7.37772 950.78 0 977.643 0C1004.51 0 1024.87 7.37772 1038.75 22.1332C1052.74 36.8886 1059.74 58.5173 1059.74 87.0193V245.167C1059.74 275.561 1052.68 298.829 1038.56 314.972C1024.56 330.989 1004.25 338.997 977.643 338.997ZM978.21 277.705C988.3 277.705 993.344 267.931 993.344 248.383V85.8843C993.344 69.4893 988.426 61.2918 978.589 61.2918C967.491 61.2918 961.942 69.6785 961.942 86.4518V248.762C961.942 259.103 963.203 266.544 965.725 271.084C968.247 275.498 972.409 277.705 978.21 277.705Z"
              fill="black"
            />
            <path
              d="M1086.61 335.97V3.02676H1153.19V279.218H1221.68V335.97H1086.61Z"
              fill="black"
            />
            <path
              d="M1262.91 335.97L1221.86 2.83759H1285.24L1309.64 229.466L1331.4 2.83759H1394.77L1353.72 335.97H1262.91Z"
              fill="black"
            />
            <path
              d="M1414.25 335.97V3.02676H1547.43V67.3454H1481.98V132.231H1544.78V194.848H1481.98V271.084H1551.78V335.97H1414.25Z"
              fill="black"
            />
            <path
              d="M1570.89 335.97V3.02676H1635.21V335.97H1570.89Z"
              fill="black"
            />
            <path
              d="M1730.36 338.997C1682.81 338.997 1659.04 304.946 1659.04 236.844V93.262C1659.04 31.0873 1686.28 0 1740.76 0C1763.21 0 1780.43 4.54014 1792.41 13.6204C1804.39 22.5746 1812.65 35.6905 1817.19 52.9683C1821.73 70.246 1824 91.3072 1824 116.152H1758.92V86.6409C1758.92 79.4524 1757.92 73.4619 1755.9 68.6696C1754.01 63.7511 1749.97 61.2918 1743.79 61.2918C1736.1 61.2918 1730.99 63.8772 1728.47 69.0479C1726.07 74.2186 1724.87 79.8938 1724.87 86.0734V247.437C1724.87 256.392 1726.01 263.706 1728.28 269.381C1730.67 274.931 1735.28 277.705 1742.09 277.705C1749.15 277.705 1753.82 274.931 1756.09 269.381C1758.48 263.706 1759.68 256.266 1759.68 247.059V199.577H1741.9V142.068H1823.24V335.97H1796.57L1785.22 307.973C1773.62 328.655 1755.33 338.997 1730.36 338.997Z"
              fill="black"
            />
          </svg>
        </div>
        <p className="text-4xl  max-sm:text-3xl max-sm:whitespace-break-spaces pb-20 font-normal font-clash uppercase">
          Brand Designer from Lagos
        </p>
        <div className="overflow-hidden flex whitespace-nowrap gap-3 font-clash bg-main py-[1vw]">
          <div className="flex whitespace-nowrap">
            <div className="marquee flex items-center gap-[1vw]">
              <h2 className="text-xl font-normal uppercase">
                Social Media Branding
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Logo Design</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Branding</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              {/* Duplicate for seamless loop */}
              <h2 className="text-xl font-normal uppercase">
                Social Media Branding
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Logo Design</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Branding</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                Social Media Branding
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Logo Design</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Branding</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
            </div>
          </div>
          <div className="flex whitespace-nowrap">
            <div className="marquee flex items-center gap-[1vw]">
              <h2 className="text-xl font-normal uppercase">
                Social Media Branding
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Logo Design</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Branding</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              {/* Duplicate for seamless loop */}
              <h2 className="text-xl font-normal uppercase">
                Social Media Branding
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Logo Design</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Branding</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                Social Media Branding
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Logo Design</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">Branding</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
            </div>
          </div>
        </div>

        <div
          className="relative w-full h-[150vh] max-sm:h-[70vh] cursor-pointer"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onMouseMove={mouseMove}
        >
          {/* Floating Button */}
          <div className="play_btn absolute  font-sans top-0 left-0 w-[100px] h-[100px] flex items-center justify-center text-white text-lg bg-black rounded-full pointer-events-none">
            Work
          </div>

          <div className=" w-full h-full ">
            <Image
              src={Image1}
              width={1500}
              height={500}
              className="w-full h-full object-cover"
              alt="Logo"
            />
          </div>
        </div>
      </section>
      <section className="font-clash px-14 max-sm:px-2">
        <div className="flex items-center justify-center gap-12 pt-32">
          <div className="border-t-[5px] border-t-black pt-8">
            <p className="text-2xl uppercase">Clients</p>
            <p className="text-[7rem] font-semibold -mt-3">
              200 <span className="text-main">+</span>
            </p>
          </div>
          <div className="border-t-4 border-t-black pt-8">
            <p className="text-2xl uppercase">Projects</p>
            <p className="text-[7rem] font-semibold -mt-3">
              300<span className="text-main">+</span>
            </p>
          </div>
          <div className="border-t-4 border-t-black pt-8">
            <p className="text-2xl uppercase">Followers</p>
            <p className="text-[7rem] font-semibold -mt-3">
              90<span className="text-main">%</span>
            </p>
          </div>
          <div className="border-t-4 border-t-black pt-8">
            <p className="text-2xl uppercase">Happy Clients</p>
            <p className="text-[7rem] font-semibold -mt-3">
              100<span className="text-main">%</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around overflow-hidden py-20">
          <p className="w-1/3 text-xl flex items-center gap-2">
            <span className="w-7 h-[1px] bg-black" />
            My clients
          </p>
          <div className="overflow-hidden mask-sides py-[1vw] w-[80%] font-clash">
            <div className="flex whitespace-nowrap">
              {/* Wrapper for continuous scroll */}
              <div className="marquee-logo flex items-center gap-[3vw]">
                <Image src={Logo1} width={500} height={500} alt="Logo" />
                <Image src={Logo2} width={500} height={500} alt="Logo" />
                <Image src={Logo3} width={500} height={500} alt="Logo" />
                <Image src={Logo4} width={500} height={500} alt="Logo" />
                <Image src={Logo5} width={500} height={500} alt="Logo" />
                <Image src={Logo1} width={500} height={500} alt="Logo" />
                <Image src={Logo2} width={500} height={500} alt="Logo" />
                <Image src={Logo3} width={500} height={500} alt="Logo" />
                <Image src={Logo4} width={500} height={500} alt="Logo" />
                <Image src={Logo5} width={500} height={500} alt="Logo" />
                <Image src={Logo1} width={500} height={500} alt="Logo" />
                <Image src={Logo2} width={500} height={500} alt="Logo" />
                <Image src={Logo3} width={500} height={500} alt="Logo" />
                <Image src={Logo4} width={500} height={500} alt="Logo" />
                <Image src={Logo5} width={500} height={500} alt="Logo" />
                <Image src={Logo1} width={500} height={500} alt="Logo" />
                <Image src={Logo2} width={500} height={500} alt="Logo" />
                <Image src={Logo3} width={500} height={500} alt="Logo" />
                <Image src={Logo4} width={500} height={500} alt="Logo" />
                <Image src={Logo5} width={500} height={200} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between relative">
          <div className="flex relative flex-col items-start flex-end w-1/2">
            <svg
              width="50"
              height="50"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 -0.00317383L17.4545 17.4514L0 23.9968L17.4545 30.5423L24 47.9968L30.5455 30.5423L48 23.9968L30.5455 17.4514L24 -0.00317383Z"
                fill="#D2F75A"
              />
            </svg>

            <p className="text-[6rem] pt-3 uppercase leading-20 font-semibold">
              Brand <br /> Services
            </p>
          </div>
          <div className="flex flex-col gap-14 w-1/2">
            <div className="bg-gray py-6 rounded-lg px-4">
              <div className="flex items-center justify-start space-x-4 text-3xl pb-3 font-medium">
                <p>01</p>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.472 4.99683V0.0368252H0.12V4.99683H4.472Z"
                    fill="black"
                  />
                </svg>

                <p>Branding</p>
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et
                ligula. Massa tempor nec feugiat nisl.
              </p>
            </div>
            <div className="bg-gray py-6 rounded-lg px-4">
              <div className="flex items-center justify-start space-x-4 text-3xl pb-3 font-medium">
                <p>02</p>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.472 4.99683V0.0368252H0.12V4.99683H4.472Z"
                    fill="black"
                  />
                </svg>

                <p>Logo Design</p>
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et
                ligula. Massa tempor nec feugiat nisl.
              </p>
            </div>
            <div className="bg-gray py-6 rounded-lg px-4 capitalize ">
              <div className="flex items-center justify-start space-x-4 text-3xl pb-3 font-medium">
                <p>03</p>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.472 4.99683V0.0368252H0.12V4.99683H4.472Z"
                    fill="black"
                  />
                </svg>

                <p>social Media Branding</p>
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et
                ligula. Massa tempor nec feugiat nisl.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 flex items-start justify-center gap-1.5">
            <div className=" w-32 h-24 ">
              <Image
                src={Image2}
                width={250}
                height={250}
                className="w-full h-full object-cover"
                alt="Finn Image"
              />
            </div>

            <div>
              <p className="text-2xl font-medium">HI, I'M FINN</p>
              <p className="text-lg font-normal  -mt-1">Brand Designer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t-4 mt-20 border-t-black">
        <div className="overflow-hidden flex whitespace-nowrap gap-3 font-clash py-[1vw]">
          <div className="flex whitespace-nowrap">
            <div className="marquee-header flex flex-shrink-0 items-center gap-[1vw]">
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              {/* Duplicate for seamless loop */}
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
            </div>
          </div>
          <div className="flex whitespace-nowrap">
            <div className="marquee-header flex flex-shrink-0 items-center gap-[1vw]">
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              {/* Duplicate for seamless loop */}
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-3xl font-medium uppercase">Gallery</h2>
              <span className="w-1 h-1 rounded-full bg-black" />
            </div>
          </div>
        </div>

        <div className="px-14 font-clash flex items-center justify-center gap-11">
          <div className="flex flex-col items-start w-full">
            <div
              onMouseEnter={moveEnter}
              onMouseLeave={moveLeave}
              className="galleryimg cursor-pointer relative w-full h-full overflow-hidden"
            >
              <Image
                src={Image3}
                width={500}
                height={500}
                className="inner-img w-full h-full object-cover"
                alt="Logo"
              />
            </div>
            <div className="pt-3">
              <p className="font-medium text-lg uppercase">Invision studio</p>
              <p className="font-light text-gray-50 text-sm uppercase">
                Packaging
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            <div
              onMouseEnter={moveEnter}
              onMouseLeave={moveLeave}
              className="galleryimg cursor-pointer relative w-full h-full overflow-hidden"
            >
              <Image
                src={Image4}
                width={500}
                height={500}
                className="inner-img w-full h-full object-cover"
                alt="Logo"
              />
            </div>
            <div className="pt-3">
              <p className="font-medium text-lg uppercase">Invision studio</p>
              <p className="font-light text-gray-50 text-sm uppercase">
                Poster
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden flex whitespace-nowrap gap-3 font-clash bg-main py-[1vw] mt-24">
          <div className="flex whitespace-nowrap">
            <div className="marquee flex items-center gap-[1vw]">
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              {/* Duplicate for seamless loop */}
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
            </div>
          </div>
          <div className="flex whitespace-nowrap">
            <div className="marquee flex items-center gap-[1vw]">
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              {/* Duplicate for seamless loop */}
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
              <h2 className="text-xl font-normal uppercase">
                LET WORK TOGETHER
              </h2>
              <span className="w-1 h-1 rounded-full bg-black" />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white font-clash">
        <div className="flex flex-col items-center justify-center pt-14 gap-5">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 -0.00292969L18.1818 18.1789L0 24.9971L18.1818 31.8153L25 49.9971L31.8182 31.8153L50 24.9971L31.8182 18.1789L25 -0.00292969Z"
              fill="#D2F75A"
            />
          </svg>
          <p className="text-[6rem] font-semibold uppercase text-center leading-24">
            Let’s create <br /> your new brand
          </p>
          <button className="bg-main px-5 py-4 rounded-md text-black flex items-center justify-center gap-2">
            <span className="w-3 h-[1.6px] bg-black" />
            Get in touch
          </button>
        </div>
        <div className="flex items-center justify-between px-16 pb-20 pt-20">
          <div>
            <svg
              width="147"
              height="30"
              viewBox="0 0 147 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.24707L11.25 11.2471L1.25 14.9971L11.25 18.7471L15 28.7471L18.75 18.7471L28.75 14.9971L18.75 11.2471L15 1.24707Z"
                fill="#D2F75A"
              />
              <path
                d="M45.106 22.5762C49.792 22.5762 51.662 20.4202 51.662 18.0222C51.662 15.9982 50.474 14.3922 47.174 13.8642L43.038 13.2042C41.806 12.9842 41.322 12.6762 41.322 11.8182C41.322 10.8722 42.048 10.4102 44.424 10.4102C47.35 10.4102 48.076 11.0042 48.076 12.4122V12.7202H51.398V12.5882C51.398 9.48619 49.286 7.39619 44.754 7.39619C39.804 7.39619 38 9.72819 38 11.9502C38 14.3482 39.562 15.6682 42.202 16.0862L46.338 16.6802C47.856 16.9442 48.362 17.2742 48.362 18.1762C48.362 19.1662 47.746 19.5622 45.106 19.5622C42.114 19.5622 41.432 19.0122 41.432 17.6482V17.2522H38.132V17.3842C38.132 20.8162 40.64 22.5762 45.106 22.5762Z"
                fill="white"
              />
              <path
                d="M62.5959 22.5762C67.5899 22.5762 70.6039 19.5842 70.6039 14.9862C70.6039 13.1602 70.1419 11.5982 69.2619 10.3662L70.8239 8.91419L69.2399 7.24219L67.6119 8.76019C66.2919 7.88019 64.6199 7.39619 62.5959 7.39619C57.7119 7.39619 54.6759 10.3882 54.6759 14.9862C54.6759 16.7902 55.1379 18.3522 55.9959 19.5842L54.3899 21.0802L55.9739 22.7522L57.6459 21.1902C58.9439 22.0922 60.6159 22.5762 62.5959 22.5762ZM58.1739 14.9862C58.1739 11.7082 59.3619 10.5642 62.5959 10.5642C63.6739 10.5642 64.5539 10.6962 65.2139 10.9822L58.4819 17.2742C58.2619 16.6582 58.1739 15.9102 58.1739 14.9862ZM62.5959 19.4082C61.5179 19.4082 60.6599 19.2762 60.0219 18.9902L66.7759 12.6982C66.9739 13.2922 67.0839 14.0622 67.0839 14.9862C67.0839 18.2642 65.8299 19.4082 62.5959 19.4082Z"
                fill="white"
              />
              <path
                d="M86.121 22.3562V19.3862H77.343V7.61619H74.043V22.3562H86.121Z"
                fill="white"
              />
              <path
                d="M99.2172 22.3562L105.333 7.61619H101.373L97.0173 19.0122H96.7972L92.3752 7.61619H88.3932L94.5092 22.3562H99.2172Z"
                fill="white"
              />
              <path
                d="M120.509 22.3562V19.3862H111.335V16.4162H120.179V13.4682H111.335V10.5862H120.509V7.61619H108.035V22.3562H120.509Z"
                fill="white"
              />
              <path
                d="M127.3 22.3562V7.61619H124V22.3562H127.3Z"
                fill="white"
              />
              <path
                d="M137.979 22.5762C141.169 22.5762 142.709 21.1242 143.215 19.1882H143.391V22.3562H146.449V14.5682H138.155V17.0102H143.149C143.061 18.8802 142.027 19.4082 138.639 19.4082C135.405 19.4082 134.195 18.2642 134.195 14.9862C134.195 11.7082 135.449 10.5642 138.793 10.5642C141.631 10.5642 142.753 11.3782 142.753 13.0942V13.2702H146.427V13.0942C146.427 9.55219 143.501 7.39619 138.881 7.39619C133.821 7.39619 130.697 10.3882 130.697 14.9862C130.697 19.5842 133.469 22.5762 137.979 22.5762Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-24">
            <div className="flex flex-col items-start ">
              <p className="font-medium text-xl pb-2 ">Pages</p>
              <p className="font-normal pb-4">Home</p>
              <p className="font-normal pb-4">Work</p>
              <p className="font-normal pb-4">Work Single</p>
              <button className="bg-main px-5 py-4 rounded-md text-black flex items-center justify-center gap-2">
                <span className="w-3 h-[1.6px] bg-black" />
                More Template
              </button>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-medium text-xl pb-2 ">Utility Pages</p>
              <p className="font-normal pb-4">404 error page</p>
              <p className="font-normal pb-4">Privacy</p>
              <p className="font-normal pb-4">About</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
