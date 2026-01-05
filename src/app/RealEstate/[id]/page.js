"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { PiBathtubLight, PiToilet } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { houseDets } from "@/app/data";

const HouseDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const house = houseDets.find((h) => h.id === Number(id));

  if (!house) return <p>House not found</p>;

  return (
    <div className="min-h-screen bg-white px-10 py-10">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gold mb-5"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Main Image */}
        <div className="flex-1">
          <Image
            src={house.image}
            alt={house.title}
            width={600}
            height={200}
            className="rounded-2xl object-cover"
          />

          {/* Extra Images */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {house.extraImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${house.title} extra ${index + 1}`}
                width={200}
                height={150}
                className="rounded-xl object-cover"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{house.title}</h1>
          <p className="text-lg font-semibold text-gold mb-2">{house.price}</p>
          <p className="text-gray-600 mb-4">{house.location}</p>
          <div className="flex gap-4 mb-4">
            <p className="flex items-center gap-1">
              <PiBathtubLight /> {house.bedrooms} Bedrooms
            </p>
            <p className="flex items-center gap-1">
              <PiToilet /> {house.toilet} Toilets
            </p>
          </div>
          <p className="mb-6">{house.description}</p>

          <div className="flex items-center gap-4 border-t pt-4">
            <Image
              src={house.agent.image}
              alt={house.agent.name}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{house.agent.name}</p>
              <p className="text-gray-500">{house.agent.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailPage;
