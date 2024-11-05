import React from 'react'
import {  MessageCircleQuestion } from 'lucide-react'
import AvatarCircles from '../ui/avatar-circles'
import Image from 'next/image';
import SearchBar from './HeroSearchBar';

const patientsImg = [
    "https://randomuser.me/api/portraits/men/34.jpg", "https://randomuser.me/api/portraits/men/31.jpg", "https://randomuser.me/api/portraits/women/30.jpg", "https://randomuser.me/api/portraits/women/35.jpg",
]
export default function Hero() {
    return (
        <section className="flex flex-col">
            <div className="flex flex-col items-center w-full">
                <div className="bg-[#e1f5ff] w-full pb-10">
                    <p className="mb-2 font-semibold text-indigo-950 mt-4 py-4 text-center md:mb-2 md:text-2xl">Connecting Top Medical Care</p>
                    <h1 className="mb-4 text-3xl font-bold text-indigo-950 text-center sm:text-5xl md:mb-4 md:text-6xl">Quality <span>Medical </span>Treatment</h1>
                    <p className="mb-2 font-semibold text-indigo-950/70 mt-4 pt-4 text-center md:text-lg">24/7 You to Trusted Medical Care Worldwide</p>
                    <p className="mb-2 font-semibold text-indigo-950/70 text-center md:mb-2 md:text-lg">Just Check out <span className='underline'>more</span></p>
                    <div>
                        <SearchBar />
                    </div>
                </div>
                <div className='relative bottom-10 bg-white shadow-lg rounded-xl h-fit w-[80vw] md:w-[50vw] p-4 '>
                    <Image src='https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-xl' height={800} width={900} alt='bg' objectFit='cover' />
                    <div className='hidden md:block absolute bottom-20 -left-20 bg-white rounded-xl w-56 border-indigo-950 border shadow h-40'>
                        <div className='flex justify-center flex-col items-center'>
                            <h1 className='font-semibold text-2xl text-indigo-950 mt-6'>1,00,000+</h1>
                            <h1 className='text-sm mb-3 text-indigo-950/70'>Patients Assisted Since 2021</h1>
                            <AvatarCircles numPeople={100} avatarUrls={patientsImg} />
                        </div>
                    </div>
                    <div className='hidden md:block absolute bottom-40 -right-20 bg-white rounded-xl w-56 border-indigo-950 border shadow h-40'>
                        <div className='flex justify-center flex-col items-center'>
                            <h1 className='font-semibold text-2xl text-indigo-950 mt-6 flex justify-center items-center gap-x-2'><MessageCircleQuestion /> 24/7</h1>
                            <h1 className='text-sm mb-3 text-indigo-950/70'>Available for you Assist!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}




