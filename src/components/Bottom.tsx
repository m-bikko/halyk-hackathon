import {Robot} from "./Robot/Robot";
import React from "react";

export const Bottom = () => {
    return <>
        <div className="sticky bottom-0 w-[100%] bg-[#F7F7F7] p-4 flex justify-between items-end">
            <a href={'/main-app'} className="w-1/5 flex flex-col justify-center items-center">
                <img src="/icons/main.svg"/>
                <p className="text-[10px]">Главная</p>
            </a>
            <div className="w-1/5 flex flex-col justify-center items-center">
                <img src="/icons/my-polis.svg"/>
                <p className="text-[10px]">Мои полисы</p>
            </div>
            <a className="w-1/5 flex flex-col justify-start items-center" href={'/'}>
                <Robot h={35}/>
                <p className="text-[10px] mt-1">Halyk AI</p>
            </a>
            <div className="w-1/5 flex flex-col justify-center items-center">
                <img src="/icons/insurance-case.svg"/>
                <p className="text-[10px]">SOS</p>
            </div>
            <div className="w-1/5 flex flex-col justify-center items-center">
                <img src="/icons/login.svg"/>
                <p className="text-[10px]">Профиль</p>
            </div>
        </div>
    </>
}