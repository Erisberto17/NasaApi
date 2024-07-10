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
        font-[helvetica] flex items-center justify-around relative top-9
        sm:block sm:justify-center top-16
        ">

            <Image 
                src={universo}
                alt="Universe"
                width={500}
                height={500}
                className="relative bottom-6
                 sm:bottom-12 sm:mt-4
                             "
            />
            <h1 className=" font-medium font-poppins text-center  text-[37px] m-0
                relative bottom-10 right-10
                sm:text-[1.3rem] sm:flex-wrap sm:ml-6 sm:left-8
            ">
                    A nasa dispoem de suas informações, e nós mastigamos para você</h1> 
            <Image 
                src={telescopio}
                alt="Universe"
                width={520}
                height={520}
                className=" relative right-10 top-40
                sm:w-[200px] sm:top-[-2em] sm:left-24
                "
                
            />
        </div>
        <ImageDiary />
        <Footer />


        </ body>
    
);
};