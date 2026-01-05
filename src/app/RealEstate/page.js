"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import HeroImage from "@/../../public/Real Estate Images/hero image 1.png";
import { PiBathtubLight, PiToilet } from "react-icons/pi";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { houseDets } from "@/app/data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const [isActive, setIsActive] = useState(false);
  const [apartmentSearch, setApartmentSearch] = useState("");
  const [apartmentPrice, setApartmentPrice] = useState("");
  const [location, setLocation] = useState("");
  const [apartmentCategory, setApartmentCategory] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const titleRef = useRef(null);
  const btnRef = useRef(null);
  const wordRef = useRef(null);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const words = ["homes", "shortlet", "rental"];

  //Filter Data
  const filteredHouses = houseDets.filter((house) => {
    const matchSearch =
      apartmentSearch === ""
        ? true
        : house.title.toLowerCase().includes(apartmentSearch.toLowerCase());

    const matchCategory =
      apartmentCategory === "" ? true : house.category === apartmentCategory;

    const matchPrice =
      apartmentPrice === ""
        ? true
        : Number(house.price.replace(/,/g, "")) <= Number(apartmentPrice);

    const matchLocation =
      location === ""
        ? true
        : house.location.toLowerCase() === location.toLowerCase();

    return matchSearch && matchCategory && matchPrice && matchLocation;
  });

  // PAGINATION
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHouses = filteredHouses.slice(indexOfFirstItem, indexOfLastItem);

  // Number of pages
  const totalPages = Math.ceil(filteredHouses.length / itemsPerPage);

  const goToNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const goToPrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  useGSAP(() => {
    let index = 0;
    wordRef.current.innerText = words[index];

    ScrollTrigger.create({
      trigger: "body",
      start: "5% 10%",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(".navbar", {
          background: "#f6f5f2",
          boxShadow: "4px 7px 8px rgba(0,0,0,0.2)",
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to(".navLinks", {
          color: "#0a0a0c",
        });
      },
      onLeave: () => {
        gsap.to(".navbar", {
          background: "transparent",
        });
        gsap.to(".navLinks", {
          color: "#0a0a0a",
        });
      },
      //   markers: true,
    });

    gsap.to(wordRef.current, {
      backgroundPosition: "400% center",
      duration: 30,
      ease: "none",
      repeat: -1,
    });
    const btn = btnRef.current;
    const arrow = btn.querySelector(".arrow");
    const circle = btn.querySelector(".icon-container");

    // hover in
    btn.addEventListener("mouseenter", () => {
      gsap.to(circle, {
        backgroundColor: "#e8dcc3",
        borderColor: "#c6a667",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(arrow, {
        x: [2, 5, 20],
        y: -2,
        duration: 0.3,
        ease: "power3.out",
      });
    });

    // hover out
    btn.addEventListener("mouseleave", () => {
      gsap.to(circle, {
        backgroundColor: "transparent",
        borderColor: "#D4AF37",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(arrow, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    });

    const animateWord = () => {
      const tl = gsap.timeline();

      tl.to(wordRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          index = (index + 1) % words.length;
          wordRef.current.innerText = words[index];
        },
      });

      tl.to(wordRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const interval = setInterval(() => animateWord(), 2000);

    return () => clearInterval(interval);
  });

  //Menu btn
  const toggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header className="z-40 navbar mx-[30%] md:w-[70%] xl:mx-[30%] md:mx-28  xl:w-[40%] max-sm:mx-3 max-sm:w-full w-[40%] py-3 px-4 bg-[rgba(255,255,255,0.15)] rounded-3xl my-5 border border-white-50 fixed flex items-center justify-between">
        <h1
          ref={titleRef}
          style={{
            backgroundImage:
              "linear-gradient(270deg, #c6a667, #e0bc2cff, #dbb884, #eee954ff, #c6a667)",
            backgroundSize: "500% 500%",
            backgroundPosition: "0% center",
          }}
          className="text-transparent font-aeonik bg-clip-text inline-block font-black text-xl max-sm:text-xl  leading-[1.1] whitespace-break-spaces"
        >
          Ilé Aláwòra
        </h1>{" "}
        <nav className="hidden md:block">
          <ul className="navLinks flex items-center font-maison justify-center gap-4  text-white-50 cursor-pointer font-light">
            <li className="hover:border-b-2 hover:border-b-gold  ">Home</li>
            <Link href="#properties">
              <li className="hover:border-b-2 hover:border-b-gold  ">
                Listings
              </li>
            </Link>
            <Link href="#story">
              <li className="hover:border-b-2 hover:border-b-gold  ">
                Our Story
              </li>
            </Link>
            <li className="hover:border-b-2 hover:border-b-gold  ">
              Get in Touch
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={toggle}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        >
          <span
            className={`h-[2px] w-6 bg-gold transition-all ${
              isActive ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-gold transition-all ${
              isActive ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-gold transition-all ${
              isActive ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
        {/* Mobile Nav */}
        {isActive && (
          <nav className="absolute rounded-2xl top-full left-0 w-full bg-[rgba(255,255,255,1.15)] border border-white-50 text-black-50 shadow-md md:hidden animate-slideDown">
            <ul className="font-maison flex flex-col items-center py-11 space-y-14 text-sm uppercase font-normal">
              <li>Home</li>
              <Link href="#properties">
                <li>Listings</li>
              </Link>
              <Link href="#story">
                <li>Our Story</li>
              </Link>
              <li>Get in Touch</li>
            </ul>
          </nav>
        )}
      </header>
      <main className="bg-black-100">
        <section className="flex items-center justify-between max-sm:h-full max-sm:px-3 max-sm:flex-col max-sm:pt-32 h-screen text-white-50 px-14">
          {/* Textn, Rentals <br />& shortlets{ */}
          <div>
            <h1 className="text-7xl font-aeonik  whitespace-break-spaces capitalize font-bold leading-[70px]">
              Discover Luxury <br />
              <span
                ref={wordRef}
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #c6a667, #e0bc2cff, #dbb884, #eee954ff, #c6a667)",
                  backgroundSize: "500% 500%",
                  backgroundPosition: "0% center",
                }}
                className="text-transparent bg-clip-text inline-block  whitespace-break-spaces"
              >
                homes
              </span>{" "}
              <br />
              curated for you.
            </h1>
            <p className="text-gray-60 text-lg py-5 font-maison font-medium">
              Find verified premium properties across Nigeria and beyond
            </p>
            <div className="font-aeonik font-semibold">
              <Link href="#properties" className="cursor-pointer">
                <button className="bg-gold px-7 py-3 rounded-2xl mr-4 text-base cursor-pointer">
                  Browse Properties
                </button>
              </Link>
              <button className="cursor-pointer max-sm:mt-5 border border-gold bg-[rgba(255,255,255,0.15)] text-base px-7 py-3 rounded-2xl">
                Chat with an Agent
              </button>
            </div>
          </div>

          {/* Image */}
          <div>
            <Image src={HeroImage} width={650} height={650} alt="Hero Image" />
          </div>
        </section>
        <section
          id="#properties"
          className="px-14 xl:px-14 md:px-7 pt-14 max-sm:px-3 flex flex-col items-center bg-white-50"
        >
          {/** Form */}
          <div className="bg-accent w-[60%] xl:w-[60%] md:w-[90%] max-sm:w-full shadow-[8px_8px_15px_rgba(0,0,0,0.2),_-8px_-8px_15px_rgba(255,255,255,0.5)] pt-9 pb-7 rounded-2xl px-6">
            <form className="">
              <div className="w-full flex items-center justify-center gap-5">
                <input
                  type="text"
                  placeholder="2 Bedroom Apartment"
                  onChange={(e) => setApartmentSearch(e.target.value)}
                  className="border border-white-50 outline-none px-3 py-2 text-base rounded-2xl w-full"
                />
                <select
                  onChange={(e) => setApartmentPrice(e.target.value)}
                  className="border border-white-50 outline-none px-3 py-2 text-base rounded-2xl w-1/2"
                >
                  <option>Price</option>
                  <option value="800000">500,000 - 800,000</option>
                  <option value="1900000">800,000 - 1,900,000</option>
                  <option value="2500000">1,900,000 - 2,500,000</option>
                  <option value="5000000">2,500,000 - 5,000,000</option>
                  <option value="5100000">Above 5,000,000</option>
                </select>
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  className="border border-white-50 outline-none px-3 py-2 text-base rounded-2xl w-1/2"
                >
                  <option value="">Location</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Agege">Agege</option>
                  <option value="Ikoyi">Ikoyi</option>
                  <option value="Victoria Island">Victoria Island</option>
                  <option value="Ojo">Ojo</option>
                </select>
              </div>
              <div className="flex items-center justify-center gap-6 mt-10">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="Rent"
                    checked={apartmentCategory === "Rent"}
                    onChange={(e) => setApartmentCategory(e.target.value)}
                  />
                  Rent
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="Buy"
                    checked={apartmentCategory === "Buy"}
                    onChange={(e) => setApartmentCategory(e.target.value)}
                  />
                  Buy
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="Shortlet"
                    checked={apartmentCategory === "Shortlet"}
                    onChange={(e) => setApartmentCategory(e.target.value)}
                  />
                  Shortlet
                </label>
              </div>
            </form>
          </div>

          {/** Card */}
          <div className="grid grid-cols-4 gap-4 mt-14 xl:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-1">
            {currentHouses.length === 0 && (
              <p className="text-black-100 text-base py-44 col-span-4 text-center">
                No properties found matching your criteria.
              </p>
            )}

            {currentHouses.map((house) => (
              <div
                key={house.id}
                onClick={() => {
                  setSelectedHouse(house);
                  setIsModalOpen(true);
                }}
                className="border border-accent rounded-2xl overflow-hidden text-black/50 hover:shadow-[0_4px_6px_rgba(0,0,0,0.11)] group cursor-pointer"
              >
                <div className="w-[350px] h-[250px] overflow-hidden">
                  <Image
                    src={house.image}
                    width={350}
                    height={300}
                    alt="House Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-3 pt-4">
                  <h2 className="text-[17px] font-medium font-aeonik">
                    {house.title}
                  </h2>
                  <p className="text-sm font-normal">{house.price}</p>
                </div>
                <div className="flex items-center justify-between px-3 pt-1">
                  <p className="text-sm text-gray-55">{house.location}</p>
                  <p className="px-4 py-2 bg-accent text-black-50 rounded-xl text-sm">
                    {house.category}
                  </p>
                </div>

                <div className="flex items-start justify-start gap-4 text-sm pt-3 pb-5 px-3">
                  <p className="flex gap-2 items-center text-xs">
                    <PiBathtubLight /> {house.bedrooms}
                  </p>
                  <p className="flex gap-2 items-center text-xs">
                    <PiToilet /> {house.toilet}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/** Pagination */}
          <div className="flex items-center justify-center gap-2 text-sm py-5 text-black-100">
            <button onClick={goToPrevPage}>
              <CiCircleChevLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded-full ${
                  page === i + 1 ? "bg-accent" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button onClick={goToNextPage}>
              <CiCircleChevRight />
            </button>
          </div>

          {isModalOpen && selectedHouse && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl max-w-5xl max-sm:max-w-xl w-full p-6 relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-black text-xl px-3 py-2 bg-accent rounded-full font-bold"
                >
                  ✕
                </button>
                <div className=" flex flex-col  xl:flex-row gap-10 max-sm:gap-5">
                  {/* Main Image */}
                  <div className="flex-1">
                    <div className="w-[500px] xl:w-[500px]  md:w-full max-sm:w-full max-sm:h-[200px] h-[350px] overflow-hidden rounded-2xl ">
                      <Image
                        src={selectedHouse.image}
                        alt={selectedHouse.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Extra Images */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {selectedHouse.extraImages.map((img, index) => (
                        <Image
                          key={index}
                          src={img}
                          alt={`${selectedHouse.title} extra ${index + 1}`}
                          width={150}
                          height={150}
                          className="rounded-xl object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h1 className="text-3xl max-sm:text-xl font-bold mb-2 max-sm:mb-0.5">
                      {selectedHouse.title}
                    </h1>
                    <p className="text-lg max-sm:text-base max-sm:mb-0.5 font-semibold text-gold mb-2">
                      {selectedHouse.price}
                    </p>
                    <p className="text-gray-600 mb-4 max-sm:mb-2">
                      {selectedHouse.location}
                    </p>
                    <div className="flex gap-4 mb-4 max-sm:mb-2">
                      <p className="flex items-center gap-1 text-xs text-gray-65">
                        <PiBathtubLight /> {selectedHouse.bedrooms} Bedrooms
                      </p>
                      <p className="flex items-center gap-1 text-xs text-gray-65">
                        <PiToilet /> {selectedHouse.toilet} Toilets
                      </p>
                    </div>
                    <p className="mb-6">{selectedHouse.description}</p>

                    <div className="flex items-center gap-4 border-t pt-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={selectedHouse.agent.image}
                          alt={selectedHouse.agent.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-base font-maison">
                          {selectedHouse.agent.name}
                        </p>
                        <a
                          href={`tel:${selectedHouse.agent.phone}`}
                          className="text-gray-500 text-sm hover:text-gold transition"
                        >
                          {selectedHouse.agent.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section
          id="story"
          className="px-14  xl:flex-row md:flex-col max-sm:px-3 py-10 max-sm:flex-col flex items-end justify-between bg-white-50"
        >
          <div>
            <p className="font-aeonik px-5 text-base py-3 rounded-2xl bg-black-100 text-gold font-normal w-fit">
              Get to know us
            </p>
            <p className="max-w-2xl font-maison font-normal text-lg leading-7 pt-4 text-black-50">
              We are Ilé Aláwòra, a modern real estate brand redefining what
              home means in Nigeria. Rooted in excellence, integrity, and
              innovation, we connect people to exceptional spaces that fit their
              lifestyle, investment goals, and long-term vision. From luxury
              shortlets to premium rentals and prime properties for sale, Ilé
              Aláwòra is built on one belief: finding a home shouldn’t be
              stressful - it should feel seamless, secure, and satisfying. We
              combine local expertise with global standards, ensuring every
              property we represent meets the highest levels of quality,
              comfort, and transparency. Whether you're searching for a serene
              home, a profitable investment, or a stylish temporary stay, we
              help you discover spaces that reflect who you are and where you're
              going. At Ilé Aláwòra, we don’t just provide houses - we create
              experiences, build trust, and help you find a place you can truly
              call “ilé".
            </p>
          </div>

          <button
            ref={btnRef}
            className="font-maison text-base flex items-center gap-3 text-black-50 group"
          >
            Learn More
            <span className="icon-container text-black-50 px-3 py-3 rounded-full border bg-transparent border-gold inline-flex items-center justify-center">
              <FaArrowRightLong className="arrow transform rotate-[330deg]" />
            </span>
          </button>
        </section>
        <section className="px-14  max-sm:px-3 max-sm:flex-col flex items-center justify-center gap-14 pb-14 bg-white-50 pt-6">
          <div className=" border border-gold max-w-[25rem] px-4 py-6 rounded-3xl">
            <h2 className="text-center text-2xl font-aeonik pb-4">
              Our Mission
            </h2>
            <p className="text-base text-black-100">
              To provide reliable, transparent, and innovative real estate
              solutions across rentals, shortlets, and property sales-delivering
              exceptional service, carefully curated listings, and a customer
              experience rooted in excellence, integrity, and trust.
            </p>
          </div>
          <div className=" border border-gold max-w-[25rem] px-4 py-6 rounded-3xl">
            <h2 className="text-center text-2xl font-aeonik pb-4">
              Our Vision
            </h2>
            <p className="text-base text-black-100">
              To redefine real estate in Nigeria by offering trusted, modern,
              and accessible property solutions that elevate lifestyle, simplify
              decisions, empower buyers and renters, and create lasting value
              through excellence, transparency, and meaningful customer
              relationships.
            </p>
          </div>
        </section>
        <section className="px-14  max-sm:px-3 max-sm:flex-col md:flex-col xl:flex-row bg-accent py-10 flex items-start  justify-between">
          <div className="">
            <h2 className="font-aeonik font-bold text-5xl leading-12 pb-5">
              Wanna see a property/
              <br />
              showcase a property?
            </h2>
            <p className="text-black-50 text-base font-normal font-maison">
              Get to inspect properties here. or join our agency to display
              <br /> your homes. Reach out to our teams as they will respond to
              you{" "}
            </p>
          </div>
          <div className=" w-1/2 xl:w-1/2 md:w-full max-sm:w-full">
            <form className="flex flex-col">
              <div className="flex items-center justify-center gap-4 pb-4">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="border border-gold bg-none outline-none focus:outline-none px-3 py-3 text-base placeholder:text-gray-75  w-1/2 rounded-2xl"
                />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="border border-gold bg-none outline-none focus:outline-none px-3 py-3 text-base placeholder:text-gray-75 w-1/2 rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center gap-4 pb-4">
                <input
                  type="text"
                  placeholder="Enter Enquiry Type"
                  className="border border-gold bg-none outline-none focus:outline-none px-3 py-3 text-base placeholder:text-gray-75 w-1/2 rounded-2xl"
                />
                <input
                  type="email"
                  placeholder="Agent/Homeowner"
                  className="border border-gold bg-none outline-none focus:outline-none px-3 py-3 text-base placeholder:text-gray-75 w-1/2 rounded-2xl"
                />
              </div>

              <textarea
                placeholder="Enter Message"
                className="border border-gold bg-none outline-none focus:outline-none px-3 py-3 resize-none h-40 text-base placeholder:text-gray-75 w-1/2 xl:w-1/2 md:w-full max-sm:w-full rounded-2xl"
              ></textarea>
              <button className="bg-gold text-base mt-5 rounded-3xl cursor-pointer text-black-100 px-3 py-2 w-[25%] max-sm:w-1/2">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
