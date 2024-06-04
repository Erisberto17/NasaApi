"use client";

import { useEffect, useState } from "react"; 
import axios from "axios";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function ImageDiary() {
  const [dataList, setDataList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(true);
    setSelectedData(data);

    
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedDescription(null);
    setSelectedData(null);

  };

  return (
    <>
      {dataList.map((data, index) => (
        <div key={index} className="flex-1 items-center text-center font-[helvetica] mb-10 mt-16">
          <button onClick={() => openModal(data.hdurl,data.explanation, data.date)}>
            <p className="text-[40px] font-poppins font-meddium mb-5">Imagem do Dia</p>
            <p className="text-[25px] font-nunito">{data.title}</p>
            <div className='flex m-5'>
            {data.media_type == 'video' ? (
              
                <ReactPlayer playing={true} controls={false} loop={true} light={true} url={data.url}/>

            ) : data.media_type == 'image'(
              
              <Image 
                src={data.url}
                alt="Diary image"
                width={550}
                height={500}
                className=" ml-5 "
              />
            )}
              <p
              className=" font-nunito text-[13px] max-w-[300px]"
              >{data.explanation}</p>
            </div>
          </button>
        </div>
      ))}

      {isModalOpen && selectedImage && (
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
