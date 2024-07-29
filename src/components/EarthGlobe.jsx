"use client";


import { useEffect, useState} from "react"; 

import Image from 'next/image'
import axios from "axios";

import setaDireita from "../assets/360.png"
import setaEsquerda from "../assets/360esquerda.png"

import next from "next";


export default function EarthGlobe () {
    const [dataList, setDataList] = useState([]);   
    const [imageList, setImageList] = useState([])
    const [dateList, setDateList] = useState([])
    const [numberList, setNumberList] = useState(0);

    
    useEffect(()=>{
           const dates = [];
           const images = [];
           const earthPic = [];
        
            axios
        .get("https://api.nasa.gov/EPIC/api/natural?api_key=sdHwzNisgns87pzxMTulTuoReebx3u6hhsbw6DDv")
        .then((result)=>{
            const data = result.data
            
            data.forEach((earth) => {
                earthPic.push(earth)
            })
            
            const earth = earthPic[numberList];
            
            console.log(data);
            const image = earth.image
            const date = earth.date.split(" ")[0]
            
            const regexp = "\-";
            const daterg = date.replace(regexp, '/')
            const dateg = daterg.replace(regexp, '/')
            
            dates.push(dateg);
            images.push(image);
            
            setImageList(images)
            setDateList(dates)
            setDataList(data)
        })
        .catch((err) => {
            console.error(err);
        })
    }, [numberList]);
    

    const MAX_NUM = 20
    const MIN_NUM = 0

    const nextNum = () => {
        setNumberList((valorAnterior) => Math.min(valorAnterior + 1, MAX_NUM));
        console.log(numberList);
    };
    const beforeNum = () => {
        setNumberList((valorAnterior) => Math.max(valorAnterior - 1, MIN_NUM));
        console.log(numberList);
    };
    const earthImage =`https://api.nasa.gov/EPIC/archive/natural/${dateList[0]}/png/${imageList[0]}.png?api_key=sdHwzNisgns87pzxMTulTuoReebx3u6hhsbw6DDv`
    return (

        <>
            <div className="relative top-[4.5rem]">
                    <h2 className=" font-semibold text-[3.2rem] text-center ">
                        Interaja
                    </h2>
                    <h3 className=" font-semibold text-[2.2rem] text-center mt-10 " >
                        Planeta Terra
                    </h3>
            </div>

            <div className="mt-3">
                    <button onClick={() => beforeNum()}>
                        <Image 
                            src={setaEsquerda}
                            width={50}
                            height={50}
                            className="relative top-[15rem] z-20 "
                        />
                    </button>
                    <button onClick={() => nextNum()}>
                        <Image 
                            src={setaDireita}
                            width={50}
                            height={50}
                            className="relative top-[15rem] z-20 left-[18.5rem]"
                        />
                    </button>
                    {earthImage && (
                    <Image 
                        src={earthImage}
                        width={400}
                        height={400}
                        alt="Earth"
                    />
                    )}
            </div>          
                
        
                
        </>
        
    )

}