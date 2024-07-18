import Image from "next/image"

import NasaLogo from '../assets/nasa.png'

export default function Header () {
    return (
        <>

            <header
            className="w-full flex h-30 p-0 items-center bg-[#ffffff] font-poppins items-center
                sm:max-w-[100%] justify-between

             "
             >
                <Image 
                    src={NasaLogo}
                    alt="Nasa logo"
                    width={200}
                    height={200}
                    className=" relative pb-0
                    "
                />
                <div className="text-[#1a0d19] ">
                    <p className="text-[1.4em] font-bold mr-10
                        sm:text-[1.2rem] sm:mr-0 pr-4
                    " >|||</p>
                </div>
            </header>
            <hr className="  border-[100%] border-[#0000003d] "/>
             
            
        </>
    )
}