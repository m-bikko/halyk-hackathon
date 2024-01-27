import React from 'react';
import login from "../../images/login.svg"
import language from "../../images/language.svg"
import notification from "../../images/notification.svg"
import buyPolis from "../../images/buy-polis.svg"
import pay from "../../images/pay.svg"
import insuranceCase from "../../images/insurance-case.svg"
import history from "../../images/history.svg"
import myPolis from "../../images/my-polis.svg"
import request from "../../images/request.svg"

const MainApp = () => {
    return (
        <div className="bg-[#F0F0F0] flex flex-col justify-center items-center">
            <header className="w-[100%] flex justify-between py-2">
                <div className="flex items-center gap-3 pl-2">
                    <div className="p-2 flex justify-center items-center border border-[#F0F0F0] bg-[#fff] rounded-lg">
                        <img className="w-[28px] h-[28px]" src={login}/>
                    </div>
                    <div className="flex flex-col text=[28px] font-bold">
                        <a href="#">Вход</a>
                        <a href="#">Регистрация</a>
                    </div>
                </div>
                <div className="flex gap-[30px]">
                    <div className="flex justify-center items-center gap-[10px]">
                        <img src={language} alt={``}/>
                        <p>RU</p>
                    </div>
                    <img src={notification} alt={``}/>
                </div>
            </header>

            <div className="w-[95%] my-4 py-4 flex flex-wrap items-start bg-[#fff] rounded-xl">
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src={buyPolis}/>
                    <p className="w-1/2 text-[12px] text-center">Купить полисы</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src={pay}/>
                    <p className="w-1/2 text-[12px] text-center">Оплатить</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src={insuranceCase}/>
                    <p className="w-1/2 text-[12px] text-center">Страховой случай</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src={history}/>
                    <p className="w-1/2 text-[12px] text-center">Операция</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src={myPolis}/>
                    <p className="w-1/2 text-[12px] text-center">Мои полисы</p>
                </div>
                <div className="w-1/3 py-2 flex flex-col justify-center items-center">
                    <img src={request}/>
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

        </div>
    );
}

export default MainApp;
