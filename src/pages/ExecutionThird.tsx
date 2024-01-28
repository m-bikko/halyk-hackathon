import React from "react";
import {Bottom} from "../components/Bottom";


export const ExecutionThird = () => {

    return (
        <div className="flex flex-col justify-center items-center w-[430px] bg-[#F0F0F0] relative m-auto">
            <a className="w-full top-0 left-0 flex items-center py-4 bg-[#F7F7F7]" href={'/main-app'}>
                <img className="" src="/icons/button-back.svg"/>
                <div className="flex-1 text-[18px] font-bold text-center mr-4">Life Персона</div>
            </a>
            <h2 className="w-[90%] text-[18px] py-3 mt-10 font-bold">Способ оплаты</h2>

            <div className="w-[90%] flex justify-between items-center border rounded-lg my-2 p-4">
                <img className="w-[60px] h-[60px] object-cover rounded-lg" src="/icons/halyk-bank-icon.svg"/>
                <h2 className="text-[18px] font-bold">Через Halyk Bank</h2>
                <img src="/icons/green-right-arrow.svg"/>
            </div>
            <div className="w-[90%] flex justify-between items-center border rounded-lg my-2 p-4">
                <img className="w-[60px] h-[60px] object-cover rounded-lg" src="/icons/pay-with-card.svg"/>
                <h2 className="text-[18px] font-bold">Оплата картой</h2>
                <img src="/icons/green-right-arrow.svg"/>
            </div>
            <div className="w-[90%] flex justify-between items-center border rounded-lg my-2 p-4">
                <img className="w-[60px] h-[60px] object-cover rounded-lg" src="/icons/kaspi-icon.svg"/>
                <h2 className="text-[18px] font-bold">Через Kaspi Bank</h2>
                <img src="/icons/green-right-arrow.svg"/>
            </div>

            <div className="w-[90%] flex justify-between items-center bottom-0 pb-6 mb-36">
                <a className="w-[47%] h-[60px] text-[#00966B] my-1 rounded-lg bg-[#DEFFED] flex items-center justify-center" href={'/execution-2'}>НАЗАД</a>
                <a className="w-[47%] h-[60px] text-white my-1 rounded-lg bg-[#00966B] flex items-center justify-center" href={'/main-app'}>ДАЛЕЕ</a>
            </div>

            <Bottom/>

        </div>
    );
}

