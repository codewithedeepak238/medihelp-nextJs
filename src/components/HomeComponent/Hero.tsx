import React from "react";
import { MessageCircleQuestion } from "lucide-react";
import AvatarCircles from "../ui/avatar-circles";
import Image from "next/image";
import SearchBar from "./HeroSearchBar";

const patientsImg = [
  "https://randomuser.me/api/portraits/men/34.jpg",
  "https://randomuser.me/api/portraits/men/31.jpg",
  "https://randomuser.me/api/portraits/women/30.jpg",
  "https://randomuser.me/api/portraits/women/35.jpg",
];

export default function Hero() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col items-center w-full">
        {/* Background Image Div */}
        <div className="relative w-full h-[65vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/123.jpg')` }}>
          {/* Overlay or content container */}
          <div className="absolute inset-0 bg-black opacity-[0.5]"></div> {/* Optional overlay */}
          <div className="flex flex-col relative z-10 flex justify-center items-center h-full">
            <p className="mb-2 mx-auto font-semibold w-fit border-2 border-transparent text-white mt-4 my-4 p-2 rounded-full px-4 text-center md:mb-2 md:text-2xl">
              Healing Beyond Borders
            </p>
            <h1 className="mb-4 text-3xl font-bold text-white text-center sm:text-4xl md:mb-4 md:text-5xl">
              One Destination For All Treatment
            </h1>
            <p className="mb-2 font-semibold text-white mt-0 sm:mt-2 pt-2 text-[15px] sm:pt-4 text-center md:text-lg">
              24/7 Connecting You to Trusted Medical Care Worldwide
            </p>
            <SearchBar />
          </div>
        </div>

        {/* Card Section */}
        <div className="relative bottom-10 bg-white shadow-lg rounded-xl h-fit w-[80vw] md:w-[50vw] p-4">
          <Image
            src="https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-xl"
            height={800}
            width={900}
            alt="bg"
            objectFit="cover"
          />
          <div className="hidden md:block absolute bottom-20 -left-20 bg-white rounded-xl w-56 border-indigo-950 border shadow h-40">
            <div className="flex justify-center flex-col items-center">
              <h1 className="font-semibold text-2xl text-indigo-950 mt-6">1,00,000+</h1>
              <h1 className="text-sm mb-3 text-indigo-950/70">
                Patients Assisted Since 2021
              </h1>
              <AvatarCircles numPeople={100} avatarUrls={patientsImg} />
            </div>
          </div>
          <div className="hidden md:block absolute bottom-40 -right-20 bg-white rounded-xl w-56 border-indigo-950 border shadow h-40">
            <div className="flex justify-center flex-col items-center">
              <h1 className="font-semibold text-2xl text-indigo-950 mt-6 flex justify-center items-center gap-x-2">
                <MessageCircleQuestion /> 24/7
              </h1>
              <h1 className="text-sm mb-3 text-indigo-950/70">Available for you Assist!</h1>
              <Image
                src="/icons/supportwebp.webp"
                className="w-16 "
                height={100}
                width={100}
                alt="bg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
