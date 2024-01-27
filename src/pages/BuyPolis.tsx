import React from 'react';
import {Polis} from "../components/Polis";

const BuyPolis = () => {
    return (
        <div className="bg-[#F0F0F0] flex flex-col justify-center items-center overflow-y-auto overflow-x-hidden">
            <header className="w-full flex justify-between pl-2 pr-2 pt-2">
                <div className="flex items-center gap-3">
                    <div className="p-2 flex justify-center items-center border border-[#F0F0F0] bg-[#fff] rounded-lg">
                        <img className="w-[28px] h-[28px]" src="/icons/login.svg" alt={''}/>
                    </div>
                    <div className="flex flex-col text=[28px] font-bold">
                        <a href="#">Вход</a>
                        <a href="#">Регистрация</a>
                    </div>
                </div>
                <div className="flex gap-[30px]">
                    <div className="flex justify-center items-center gap-[10px]">
                        <img src="/icons/language.svg" alt={``}/>
                        <p>RU</p>
                    </div>
                    <img src="/icons/notification.svg" alt={``}/>
                </div>
            </header>
            <div>
                <h1 className="w-full text-left text-[20px] ml-8 pt-6 font-bold">Накопления</h1>
                <div className="w-[95%] my-4 py-4 flex flex-col justify-center items-center bg-[#fff] rounded-xl">
                    <div className="w-[90%] flex my-2">
                        <img className="w-[80px] h-[80px] object-cover rounded-lg" src="/images/life-persona.png"/>
                        <div className="ml-3">
                            <h3 className="text-[18px] font-bold">Life-Персона</h3>
                            <p className="text-[12px] text-[#888888]">Смешанное страхование жизни за 5 минут для
                                создания
                                накоплений и защиты благосостояния семьи.</p>
                        </div>
                        <img src="/icons/green-right-arrow.svg"/>
                    </div>
                    <Polis title={"Байтерек"}
                           desc={"Долгосрочное накопление средств и получение дополнительного дохода."}
                           img={"/images/Rectangle%207%20(1).png"}/>
                    <Polis title={"Life-Инвест+"}
                           desc={"Гарантированный доход и страховую защиту на весь срок действия договора страхования."}
                           img={"/images/Rectangle%207%20(2).png"}/>
                    <Polis title={"Халык-Казына"}
                           desc={"Гарантированный доход и страховую защиту на весь срок действия договора страхования."}
                           img={"/images/Rectangle%207%20(3).png"}/>
                    <Polis title={"Болашак лайф"}
                           desc={"Гарантированный доход и страховую защиту на весь срок действия договора страхования."}
                           img={"/images/Rectangle%207%20(4).png"}/>
                    <Polis title={"Bilim laif"}
                           desc={"Гарантированный доход и страховую защиту на весь срок действия договора страхования."}
                           img={"/images/Rectangle%207%20(5).png"}/>
                </div>
            </div>
            <div>
                <h1 className="w-full text-left text-[20px] ml-8 pt-6 font-bold">Защита</h1>
                <div className="w-[95%] my-4 py-4 flex flex-col justify-center items-center bg-[#fff] rounded-xl">
                    <div className="w-[90%] flex my-2">
                        <img className="w-[80px] h-[80px] object-cover rounded-lg" src="/images/Rectangle%207%20(6).png"/>
                        <div className="ml-3">
                            <h3 className="text-[18px] font-bold">Халык Тумар</h3>
                            <p className="text-[12px] text-[#888888]">Смешанное страхование жизни за 5 минут для
                                создания
                                накоплений и защиты благосостояния семьи.</p>
                        </div>
                        <img src="/icons/green-right-arrow.svg"/>

                    </div>
                    <div className="w-[90%] flex my-2">
                        <img className="w-[80px] h-[80px] object-cover rounded-lg" src="/images/Rectangle%207%20(7).png"/>
                        <div className="ml-3">
                            <h3 className="text-[18px] font-bold">Страхование заемщиков</h3>
                            <p className="text-[12px] text-[#888888]">Смешанное страхование жизни за 5 минут для
                                создания
                                накоплений и защиты благосостояния семьи.</p>
                        </div>
                        <img src="/icons/green-right-arrow.svg"/>

                    </div>
                </div>
            </div>
            <div>
                <h1 className="w-full text-left text-[20px] ml-8 pt-6 font-bold">Пенсия</h1>
                <div className="w-[95%] my-4 py-4 flex flex-col justify-center items-center bg-[#fff] rounded-xl">
                    <div className="w-[90%] flex my-2">
                        <img className="w-[80px] h-[80px] object-cover rounded-lg" src="/images/life-persona.png"/>
                        <div className="ml-3">
                            <h3 className="text-[18px] font-bold">Life-Персона</h3>
                            <p className="text-[12px] text-[#888888]">Смешанное страхование жизни за 5 минут для
                                создания
                                накоплений и защиты благосостояния семьи.</p>
                        </div>
                        <img src="/icons/green-right-arrow.svg"/>
                    </div>
                    <Polis title={"Байтерек"}
                           desc={"Долгосрочное накопление средств и получение дополнительного дохода."}
                           img={"/images/Rectangle%207%20(1).png"}/>
                    <Polis title={"Life-Инвест+"}
                           desc={"Гарантированный доход и страховую защиту на весь срок действия договора страхования."}
                           img={"/images/Rectangle%207%20(2).png"}/>
                </div>
            </div>


            <div className="fixed bottom-0 w-[100%] bg-[#F7F7F7] p-4 flex justify-between">
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <img src="/icons/main.svg"/>
                    <p className="text-[10px]">Главная</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <img src="/icons/buy-polis.svg"/>
                    <p className="text-[10px]">Мои полисы</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <img src="/icons/insurance-case.svg"/>
                    <p className="text-[10px]">Страховой случай</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <img src="/icons/login.svg"/>
                    <p className="text-[10px]">Профиль</p>
                </div>
            </div>
        </div>
    );
}

export default BuyPolis;
