import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import ImageDiary from "../components/ImageDiary";
import Image from "next/image";

import universo from '../assets/Universo.png'
import telescopio from '../assets/Telescopio.png'

export default function HomePage () {


    return (

        < body className=" max-w-[100%] 
        sm:w-[62.5%] sm:items-center m-0 ">
        <Header />
    
        
        <div className="
        font-[helvetica] flex items-center relative top-9 text-center justify-center max-w-[100%] md:flex-wrap
        ">

            <Image 
                src={universo}
                alt="Universe"
                width={400}
                height={400}
                className="relative bottom-6 max-w-[30%]
                 sm:bottom-12 sm:mt-4 md:max-w-[50%]
                             "
            />
            <h1 className=" font-medium font-poppins text-center text-[2rem] mt-7 m-0 mb-[10%]
                
                sm:text-[1.3rem] sm:flex-wrap sm:ml-6 sm:left-8 md:mt-10 md:text-[1.6rem]
            ">
                    A nasa dispoem de suas informações, e nós mastigamos para você</h1> 
            <Image 
                src={telescopio}
                alt="telescopio"
                width={450}
                className=" relative max-w-[30%] md:max-w-[50%] top-10
                 sm:top-[-2em] sm:left-24 md:top-0
                "
                
            />
        </div>
        <ImageDiary />
        <Footer />


        </ body>
    
);
};