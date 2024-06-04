import Image from "next/image"

import NasaLogo from '../assets/nasa.png'

export default function Header () {
    return (
        <>

            <header
             className="w-full h-30 flex ml-5 mr-5 p-0 items-center justify-around bg-[#ffffff] font-poppins
             "
             >
                <Image 
                    src={NasaLogo}
                    alt="Nasa logo"
                    width={200}
                    height={200}
                    className=" relative top-2 left-[-25px]"
                />
               <div
                 className="text-[#1a0d19] flex justify-between ml-[30px] mr-10 gap-5 font-bold  text-[1.2em] gap-[82px] ">
                    
            </div>
            <div className="text-[#1a0d19] mr-6">
                <p className="text-[1.4em] font-bold mr-8" >|||</p>
            </div>
            </header>
            <hr className="  border-[1px] border-[#0000003d]"/>
             
            
        </>
    )
}