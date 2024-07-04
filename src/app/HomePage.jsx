import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import ImageDiary from "../components/ImageDiary";
import Image from "next/image";

import universo from '../assets/Universo.png'
import telescopio from '../assets/Telescopio.png'

export default function HomePage () {


    return (

        < body className=" max-w-[100%]">
        <Header />
    
        
        <div className="font-[helvetica] flex items-center relative top-9">

            <Image 
                src={universo}
                alt="Universe"
                width={500}
                height={500}
                className="relative bottom-6"
            />
            <h1 className=" font-medium font-poppins text-center  text-[37px] m-0
                relative bottom-10 right-10
            ">
                    A nasa dispoem de suas informações, e nós mastigamos para você</h1> 
            <Image className=" relative right-10 top-40"
                src={telescopio}
                alt="Universe"
                width={520}
                height={520}
            />
        </div>
        <ImageDiary />
        <Footer />


        </ body>
    
);
};