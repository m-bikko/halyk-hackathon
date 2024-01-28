import React, {useState} from 'react';
import {ModalWindow} from "../components/ModalWindow";

const MainApp = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);


    return (
        <div className="bg-[#F0F0F0] flex flex-col justify-center items-center">
            <header className="w-full flex justify-between py-2">
                <div className="flex items-center gap-3 pl-2">
                    <div className="p-2 flex justify-center items-center border border-[#F0F0F0] bg-[#fff] rounded-lg">
                        <img className="w-[28px] h-[28px]" src="/icons/login.svg"/>
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

            <div className="w-[95%] my-4 py-4 flex flex-wrap items-start bg-[#fff] rounded-xl">
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src="/icons/buy-polis.svg"/>
                    <p className="w-1/2 text-[12px] text-center">Купить полисы</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src="/icons/pay.svg"/>
                    <p className="w-1/2 text-[12px] text-center">Оплатить</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src="/icons/insurance-case.svg"/>
                    <p className="w-1/2 text-[12px] text-center">Страховой случай</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src="/icons/history.svg"/>
                    <p className="w-1/2 text-[12px] text-center">Операция</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src="/icons/my-polis.svg"/>
                    <p className="w-1/2 text-[12px] text-center">Мои полисы</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src="/icons/request.svg"/>
                    <p className="w-1/2 text-[12px] text-center">Заявки</p>
                </div>
            </div>


            <div className="w-[95%] my-4 py-4 bg-[#fff] rounded-xl">
                <h3 className="ml-4 py-2 font-bold">Наши продукты</h3>
                <div className="flex flex-wrap justify-evenly items-start">
                    <div className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B]">
                        <p className="w-1/2">Life-Персона</p>
                    </div>
                    <div className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B]">
                        <p className="w-1/2">Халык-Казына</p>
                    </div>
                    <div className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B]">
                        <p className="w-1/2">Байтерек</p>
                    </div>
                    <div className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B]">
                        <p className="w-1/2">Пенсионный аннуитет</p>
                    </div>
                    <div className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B]">
                        <p className="w-1/2">Bilim-Life</p>
                    </div>
                    <div className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B]">
                        <p className="w-1/2">Болашак-Life</p>
                    </div>
                </div>

            </div>


            <div className="fixed bottom-0 w-[100%] bg-[#F7F7F7] p-4 flex justify-between">
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <img src="/icons/main.svg"/>
                    <p className="text-[10px]">Главная</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <img src="/icons/my-polis.svg"/>
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

            <div className="w-full flex justify-center items-center">
                <button className="w-[10%] text-[30px] text-white bg-[#00966B] rounded-lg border" onClick={() => setPopupOpen(true)}>Modal</button>

                {isPopupOpen && (
                    <ModalWindow isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
                    </ModalWindow>
                )}
            </div>
        </div>
    );
}

export default MainApp;
