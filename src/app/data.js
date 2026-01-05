import ApartmentImg1 from "@/../../public/Real Estate Images/Apartment2.png";
import ApartmentImg2 from "@/../../public/Real Estate Images/Apartment3.png";
import ApartmentImg3 from "@/../../public/Real Estate Images/Apartment4.png";
import ApartmentImg4 from "@/../../public/Real Estate Images/Apartment5.png";
import ApartmentImg5 from "@/../../public/Real Estate Images/Apartment6.png";
import AboutImage from "@/../../public/Real Estate Images/Rectangle 750.png";
import Agent1 from "@/../../public/Real Estate Images/Agent1 (1).jpg";
import Agent2 from "@/../../public/Real Estate Images/Agent1 (2).jpg";

export const houseDets = [
  {
    id: 1,
    image: ApartmentImg1,
    extraImages: [ApartmentImg2, ApartmentImg3, ApartmentImg4],
    title: "2 Bedroom Luxury Apartment",
    category: "Rent",
    bedrooms: 2,
    toilet: 2,
    price: "2,500,000",
    location: "Ikeja, Lagos",
    description:
      "A spacious and newly renovated 2-bedroom apartment located in a secure estate in Ikeja. Features include modern fittings, ample parking, 24/7 security, and excellent road access.",
    agent: {
      name: "Mrs. Adenike Johnson",
      phone: "0803 222 4411",
      image: Agent1,
    },
  },
  {
    id: 2,
    image: ApartmentImg2,
    extraImages: [ApartmentImg3, ApartmentImg1],
    title: "Room Self Contain",
    category: "Rent",
    bedrooms: 1,
    toilet: 1,
    price: "500,000",
    location: "Ojo, Lagos",
    description:
      "Affordable and clean self-contained room ideal for students or young professionals. Comes with a private kitchen, wardrobe, and stable water supply.",
    agent: {
      name: "Samuel Olatunji",
      phone: "0806 118 9920",
      image: Agent2,
    },
  },
  {
    id: 3,
    image: ApartmentImg3,
    extraImages: [ApartmentImg4, ApartmentImg5, ApartmentImg1],
    title: "Modern Miniflat",
    category: "Rent",
    bedrooms: 1,
    toilet: 2,
    price: "2,500,000",
    location: "Ikoyi, Lagos",
    description:
      "A premium miniflat located in a high-end neighborhood. Perfect for single occupants seeking comfort, privacy, and a serene environment.",
    agent: {
      name: "Chinedu Okafor",
      phone: "0812 559 9944",
      image: Agent2,
    },
  },
  {
    id: 4,
    image: ApartmentImg4,
    extraImages: [ApartmentImg2, ApartmentImg1],
    title: "3 Bedroom Executive Apartment",
    category: "Rent",
    bedrooms: 3,
    toilet: 3,
    price: "5,000,000",
    location: "Ikoyi, Lagos",
    description:
      "A tastefully finished 3-bedroom apartment with large living spaces, modern kitchen fittings, and in a prime, secure highbrow area.",
    agent: {
      name: "Mrs. Kemi Osho",
      phone: "0809 330 7821",
      image: Agent1,
    },
  },
  {
    id: 5,
    image: ApartmentImg5,
    extraImages: [ApartmentImg4, ApartmentImg2, ApartmentImg1],
    title: "2 Bedroom Serviced Apartment",
    category: "Rent",
    bedrooms: 2,
    toilet: 2,
    price: "3,000,000",
    location: "Victoria Island, Lagos",
    description:
      "A serviced 2-bedroom apartment with constant power, treated water, and facility management. Located in the heart of VI.",
    agent: {
      name: "John Adeyemi",
      phone: "0902 114 4483",
      image: Agent2,
    },
  },
  {
    id: 6,
    image: ApartmentImg1,
    extraImages: [ApartmentImg5, ApartmentImg3],
    title: "4 Bedroom Detached Duplex",
    category: "Buy",
    bedrooms: 4,
    toilet: 4,
    price: "250,000,000",
    location: "Ikeja GRA, Lagos",
    description:
      "A newly built 4-bedroom duplex with BQ, large compound space, modern architecture, fitted kitchen, POP ceiling, and smart home features.",
    agent: {
      name: "Queen Onyinye",
      phone: "0705 889 6633",
      image: Agent1,
    },
  },
  {
    id: 7,
    image: ApartmentImg4,
    extraImages: [ApartmentImg1, ApartmentImg2],
    title: "2 Bedroom Shortlet Apartment",
    category: "Shortlet",
    bedrooms: 2,
    toilet: 2,
    price: "250,000 per Night",
    location: "Ikeja, Lagos",
    description:
      "Fully furnished and luxurious shortlet apartment with modern interiors, fast WiFi, 24/7 power, and close proximity to Ikeja City Mall.",
    agent: {
      name: "Precious Iwobi",
      phone: "0814 990 2210",
      image: Agent1,
    },
  },
  {
    id: 8,
    image: ApartmentImg5,
    extraImages: [ApartmentImg3, ApartmentImg4],
    title: "2 Bedroom Modern Apartment",
    category: "Rent",
    bedrooms: 2,
    toilet: 2,
    price: "2,500,000",
    location: "Ikeja, Lagos",
    description:
      "A newly built 2-bedroom apartment with spacious rooms, tiled floors, fitted wardrobes, and located in a peaceful environment.",
    agent: {
      name: "Mohammed Idris",
      phone: "0903 118 0421",
      image: Agent2,
    },
  },
  {
    id: 9,
    image: ApartmentImg2,
    extraImages: [ApartmentImg1, ApartmentImg4],
    title: "2 Bedroom Apartment",
    category: "Rent",
    bedrooms: 2,
    toilet: 2,
    price: "2,500,000",
    location: "Ikeja, Lagos",
    description:
      "A neat and affordable apartment in a secure estate. Comes with good power supply and easy access to major roads.",
    agent: {
      name: "Opeyemi Adebayo",
      phone: "0816 004 4429",
      image: Agent2,
    },
  },
  {
    id: 10,
    image: ApartmentImg3,
    extraImages: [ApartmentImg5, ApartmentImg1],
    title: "2 Bedroom Apartment",
    category: "Rent",
    bedrooms: 2,
    toilet: 2,
    price: "2,500,000",
    location: "Ikeja, Lagos",
    description:
      "A comfortable 2-bedroom unit with great ventilation, spacious sitting room, and secure compound.",
    agent: {
      name: "Adaeze Emmanuel",
      phone: "0808 112 9933",
      image: Agent1,
    },
  },
  {
    id: 11,
    image: ApartmentImg1,
    extraImages: [ApartmentImg5, ApartmentImg4],
    title: "5 Bedroom Fully Detached Duplex",
    category: "Rent",
    bedrooms: 5,
    toilet: 5,
    price: "8,000,000",
    location: "Ikeja, Lagos",
    description:
      "Massive 5-bedroom duplex with luxurious finishing, parking for 4 cars, fitted kitchen, CCTV, and spacious rooms.",
    agent: {
      name: "Michael Ojo",
      phone: "0905 448 1191",
      image: Agent2,
    },
  },
  {
    id: 12,
    image: ApartmentImg1,
    extraImages: [ApartmentImg2, ApartmentImg3],
    title: "2 Bedroom Apartment",
    category: "Rent",
    bedrooms: 2,
    toilet: 2,
    price: "2,500,000",
    location: "Ikeja, Lagos",
    description:
      "A clean and well-managed 2-bedroom flat suitable for families and young professionals. Located near schools, supermarkets, and transport routes.",
    agent: {
      name: "Rita Nwaneri",
      phone: "0701 330 2217",
      image: Agent1,
    },
  },
];
