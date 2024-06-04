"use client";


import { useState } from "react";


export default function Footer() {

    const [listTecno, setListTecno] = useState([]);
    

    const openModal = (data) => {

        setListTecno(data)

    }
    const closeModal = () => {
        setListTecno([])
    }

    return (

        <>
        <footer className="bg-[#190619] w-full h-90 m-0 p-4 font-nunito">
            <div className="flex items-center justify-evenly m-0 p-10 pt-16 text-[18px] font-nunito">
                <ul className="text-white flex-1 justify-evenly m-0">
                    <li>Projeto Utilizando a <b><a href="https://api.nasa.gov/">API da Nasa</a></b> </li>

                    <li><button onClick={() => openModal(['Estudante da Programação, buscando compreender melhor o uso das tecnologias. Github do projeto: https://github.com/Erisberto17/NasaProject'])}> Quem sou eu ? </button></li>

                    <li><button onClick={() => openModal(['Javascript, Next.js, Tailwind e Axios'])}>Tecnologias Usadas</button></li>
                </ul>
                <ul className="text-white">
                    <li>
                        Projeto focado em consumir a api disponivel ao publico da nasa, <br />
                        usando apenas a documentação fornecida pela mesma
                    </li>
                </ul>
                    {listTecno.map((res, index) => (
                <div key={index} className=" ">
                    <div className=" fixed inset-0  z-100 w-full h-full bg-[#8080809c]"></div>
                        <div>
                        <button onClick={closeModal} className="text-[#f8b1b1] z-10 fixed bottom-[39%] right-[25%]">X</button>
                        <p className=" fixed right-[25%] bottom-[25%] flex items-center justify-center w-[600px] text-center p-3 h-28 bg-[#686868] text-[#f3f3f3] rounded-sm font-poppins text-[17px]">{res}</p>

                        </div>
                </div>

                    ))}
                    
            </div>
        </footer>
        </>
    );
};