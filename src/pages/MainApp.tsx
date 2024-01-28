import React from 'react';
import {Bottom} from "../components/Bottom";

const MainApp = () => {
    return (
        <>
            <div
                className="bg-[#F0F0F0] flex flex-col items-center w-[430px]  relative m-auto md:mt-10 md:rounded-2xl md:p-2">
                <header className="w-full flex justify-between py-2">
                    <div className="flex items-center gap-3 pl-2">
                        <div
                            className="p-2 flex justify-center items-center border border-[#F0F0F0] bg-[#fff] rounded-lg">
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

                <div className="w-[95%] py-4 mt-3 flex flex-wrap items-start bg-[#fff] rounded-xl">
                    <a className="w-1/3 py-2 flex flex-col justify-center items-center cursor-pointer" href={'/execution-1'}>
                        <img src="/icons/buy-polis.svg"/>
                        <div className="w-1/2 text-[12px] text-center">Купить полисы</div>
                    </a>
                    <div className="w-1/3 py-2 flex flex-col justify-center items-center opacity-50">
                        <img src="/icons/pay.svg"/>
                        <p className="w-1/2 text-[12px] text-center">Оплатить</p>
                    </div>
                    <div className="w-1/3 py-2 flex flex-col justify-center items-center opacity-50">
                        <img src="/icons/insurance-case.svg"/>
                        <p className="w-1/2 text-[12px] text-center">Страховой случай</p>
                    </div>
                    <div className="w-1/3 py-2 flex flex-col justify-center items-center opacity-50">
                        <img src="/icons/history.svg"/>
                        <p className="w-1/2 text-[12px] text-center">Операция</p>
                    </div>
                    <div className="w-1/3 py-2 flex flex-col justify-center items-center opacity-50">
                        <img src="/icons/my-polis.svg"/>
                        <p className="w-1/2 text-[12px] text-center">Мои полисы</p>
                    </div>
                    <div className="w-1/3 py-2 flex flex-col justify-center items-center opacity-50">
                        <img src="/icons/request.svg"/>
                        <p className="w-1/2 text-[12px] text-center">Заявки</p>
                    </div>
                </div>
                <div className="w-[95%] my-4 py-4 bg-[#fff] rounded-xl">
                    <h3 className="ml-4 py-2 font-bold">Наши продукты</h3>
                    <div className="flex flex-wrap justify-evenly items-start">
                        <div className="w-[28%] h-28 my-2 rounded-xl border border-[#00966B] relative cursor-pointer">
                            <p className="w-1/2 z-10 mt-2 ml-2 absolute">Life-Персона</p>
                            <img src="/images/tigr.png" alt="" className={'absolute bottom-0 right-0'}/>
                        </div>
                        <div
                            className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B] relative cursor-pointer opacity-50">
                            <p className="w-1/2 absolute z-10">Халык-Казына</p>
                            <img src="/images/tenge.png" alt="" className={'absolute bottom-0 right-0'}/>
                        </div>
                        <div
                            className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B] relative cursor-pointer opacity-50">
                            <p className="w-1/2 z-10 absolute">Байтерек</p>
                            <img src="/images/baiterek.png" alt="" className={'absolute bottom-0 right-0'}/>
                        </div>
                        <div
                            className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B] relative cursor-pointer opacity-50">
                            <p className="w-1/2 absolute z-10">Пенсионный аннуитет</p>
                            <img src="/images/zont.png" alt="" className={'absolute bottom-0 right-0'}/>
                        </div>
                        <div
                            className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B] relative cursor-pointer opacity-50">
                            <p className="w-1/2 absolute z-10">Bilim-Life</p>
                            <img src="/images/bilim.png" alt="" className={'absolute bottom-0 right-0'}/>

                        </div>
                        <div
                            className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B] relative cursor-pointer opacity-50">
                            <p className="w-1/2 absolute z-10">Болашак-Life</p>
                            <img src="/images/bolashak.png" alt="" className={'absolute bottom-0 right-0'}/>
                        </div>
                        <div
                            className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B] relative cursor-pointer opacity-50">
                            <p className="w-1/2 absolute z-10">Пенсионный аннуитет</p>
                            <img src="/images/zont.png" alt="" className={'absolute bottom-0 right-0'}/>
                        </div>
                        <div
                            className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B] relative cursor-pointer opacity-50">
                            <p className="w-1/2 absolute z-10">Bilim-Life</p>
                            <img src="/images/bilim.png" alt="" className={'absolute bottom-0 right-0'}/>

                        </div>
                        <div
                            className="w-[28%] h-28 p-2 my-2 rounded-xl border border-[#00966B] relative cursor-pointer opacity-50">
                            <p className="w-1/2 absolute z-10">Болашак-Life</p>
                            <img src="/images/bolashak.png" alt="" className={'absolute bottom-0 right-0'}/>
                        </div>

                    </div>

                </div>


                <Bottom/>
            </div>
            <div className={'text-white text-center'}>only mobile devices:(</div>
            <div className={'text-green-800 text-center bg-white w-fit m-auto p-4 rounded-full mt-6'}><a href="/">Go
                back to AI:)</a></div>
        </>

    );
}

export default MainApp;
