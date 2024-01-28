import React, {useState} from 'react';
import {Robot} from "../components/Robot/Robot";
import {Bottom} from "../components/Bottom";


const LifePersona = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="flex flex-col justify-center items-center overflow-x-hidden w-[430px] bg-[#F0F0F0] relative m-auto">
            <a className="absolute w-full top-0 left-0 flex items-center py-4 bg-[#F7F7F7]" href={'/main-app'}>
                <img className="" src="/icons/button-back.svg"/>
                <div className="flex-1 text-[18px] font-bold text-center mr-4">Life Персона</div>
            </a>

            <img className="w-full mt-16" src=""/>

            <h2 className="w-full text-[20px] ml-6 pt-4 font-bold">Life Персона</h2>
            <p className="pt-2 ml-3">Смешанное страхование жизни за 5 минут для создания накоплений и защиты
                благосостояния семьи. Взносы от 200 тенге в день.</p>


            <h2 className="w-full text-[20px] ml-6 pt-6 font-bold">Преимущество</h2>
            <div className="flex flex-col justify-center items-center pt-4">
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую
                        сумму</p>
                </div>
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую
                        сумму</p>
                </div>
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую
                        сумму</p>
                </div>
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую
                        сумму</p>
                </div>
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую
                        сумму</p>
                </div>

            </div>


            <div className="w-full flex flex-col justify-center items-center bottom-0 mt-5">
                <button className="w-[95%] h-[60px] text-white my-1 rounded-lg bg-[#00966B]">
                    <a href="/execution-1">
                        ОФОРМИТЬ СЕЙЧАС
                    </a>
                </button>
                <a className="w-[95%] h-[60px] text-[#00966B] my-1 rounded-lg bg-[#DEFFED] flex justify-center items-center" href={'/chat'}>КОНСУЛЬТАЦИЯ</a>

                <h2 className="w-[90%] pt-6 text-[18px] font-bold">Условия страхования</h2>

                <div className="w-[90%] mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer"
                            onClick={toggleAccordion}
                        >
                            <h2 className="text-[14px] font-semibold">Основные покрытия и размер выплат</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {isOpen && (
                            <div className="p-4">
                                <p className="text-[12px]">
                                    1) Страховая сумма по покрытию «Дожитие Застрахованного до конца срока страхования»
                                    - равна размеру оплаченной страховой премии по основному страховому покрытию
                                    (страховых взносов)
                                    <br/>
                                    2) Страховая сумма по покрытию «Смерть по любой причине» - от 500 000 тенге до 10
                                    000 000 тенге
                                    <br/>
                                    3) Страховая сумма по покрытию «Смерть Застрахованного, наступившая в период
                                    действия страховой защиты, в результате НС» – от 500 000 тенге до 10 000 000 тенге
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Bottom/>
        </div>
    );
}

export default LifePersona;
