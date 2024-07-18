"use client";

import { useEffect, useState } from "react"; 
import axios from "axios";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function ImageDiary() {
  const [dataList, setDataList] = useState([]);
  const [iMdodalOpen, setIMdodalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [selectedData, setSelectedData] = useState(null);



  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=sdHwzNisgns87pzxMTulTuoReebx3u6hhsbw6DDv")
      .then((result) => {
        const data = result.data;
        console.log(data);
        setDataList([data]); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const openModal = (image, description, data) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setIMdodalOpen(true);
    setSelectedData(data);

    
  };

  const closeModal = () => {
    setIMdodalOpen(false);
    setSelectedImage(null);
    setSelectedDescription(null);
    setSelectedData(null);

  };

  return (
    <>
      {dataList.map((data, index) => (
        <div key={index} className=" font-[helvetica] mb-10 mt-10 flex justify-center
         p-0
        ">
          <button onClick={() => openModal(data.hdurl,data.explanation, data.date)} 
            className=" text-center">
            <p className="text-[2rem] font-poppins font-meddium mb-1
             
            ">Imagem do Dia</p>
            <div 
            className=" flex-1 flex-wrap justify-center text-center p-0 m-0 relative lg:right-[6rem] md:right-0
              
            ">

              <p className="text-[1.6rem] font-nunito flex-1 md:left-10 relative lg:left-[20%] lg:translate-x-[-10%]
              ">{data.title}</p>
              <div className='flex m-1 flex-wrap justify-center
              md:block md:columns- md:text-center relative left-[20%] translate-x-[-10%]
               sm:translate-x-0 sm:m-0 sm:left-0
              '>
                {data.media_type == 'video' ? (
                  
                  <ReactPlayer playing={true} controls={false} loop={true} light={true} url={data.url} 
                  className='
                    md:w-[200px] md:ml-0 max-w-[50%] sm:ml-10' />

                ) : data.media_type == 'image' ? (
                  
                  <Image 
                    src={data.url}
                    alt="Diary image"
                    width={500}
                    height={500}
                    className="
                    md:w-[300px] md:h-[250px] md:ml-0 sm:ml-10
                    "
                  />
                ): null}
                  <p
                  className=" font-nunito text-[13px] max-w-[300px] sm:ml-10
                    md:text-[1rem] md:line-clamp-5 md:overflow-ellipsis
                  "
                  >{data.explanation}</p>
              </div>

            </div>
          </button>
        </div>
      ))}

      {iMdodalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-[#2e3033f0] p-2 rounded">
            <button
              onClick={closeModal}
              className="absolute top-[3px] right-2 m-2 text-white text-shadow z-51"
            >
              X
            </button>
            <Image
              src={selectedImage}
              alt="Image"
              width={460}
              height={250}
            />
            <p
             className="text-[10px] gap-7 absolute bottom-4 font-bold text-[#ffffff96] opacity-0 transition-opacity hover:opacity-[100%] m-2 text-shadow"
            >{selectedDescription}</p>
            <p className="text-[#abababe6] font-[helvetica]">Foto tirada em: {selectedData}</p>

          </div>
        </div>
      )}
    </>
  );
}
