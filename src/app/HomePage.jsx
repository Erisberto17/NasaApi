import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import ImageDiary from "../components/ImageDiary";
import Image from "next/image";

import universo from '../assets/Universo.png'
import telescopio from '../assets/Telescopio.png'
import background from '../assets/background.jpg'
import EarthGlobe from "@/components/EarthGlobe.jsx";

export default function HomePage () {


    return (

        < body className=" max-w-[100%] m-0 ">
            <div>
                <Image 
                    src={background}
                    width={400}
                    height={200}
                    className="sm:relative sm:bottom-40 z-1"
                />
                <h1 className="text-white z-3 relative bottom-[30.5rem] left-2 text-[3rem] leading-[2.5rem] font-bold font-poppins tracking-tighter   ">Qual curiosidade quer ver hoje?</h1>
                <div className=" m-0 w-[100%] h-[25rem] bg-white rounded-[1.1rem] relative bottom-[30rem] z-2">
                    <p className="font-poppins relative left-2 top-2 font-semibold text-[1.1rem]">Site utilizando Api publica da <a href="#" className="text-[#6f0785]">NASA</a>. Mastigando toda informação</p>
                    <EarthGlobe />
                </div>

            </div>

        </ body>
);
};