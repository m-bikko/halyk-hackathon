import React from 'react';

const BuyPolis = () => {
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

            <h1 className="w-full text-left text-[20px] ml-8 pt-6 font-bold">Накопления</h1>
            <div className="w-[95%] my-4 py-4 flex flex-col justify-center items-center bg-[#fff] rounded-xl">
                <div className="w-[90%] flex my-2">
                    <img className="w-[80px] h-[80px] object-cover rounded-lg" src="/images/life-persona.svg"/>
                    <div className="ml-3">
                        <h3 className="text-[18px] font-bold">Life-Персона</h3>
                        <p className="text-[12px] text-[#888888]">Смешанное страхование жизни за 5 минут для создания накоплений и защиты благосостояния семьи.</p>
                    </div>
                    <img src="/icons/green-right-arrow.svg"/>
                </div>

                <div className="w-[90%] flex my-2">
                    <img className="w-[80px] h-[80px] object-cover rounded-lg" src="/images/life-persona.svg"/>
                    <div className="w-[] ml-3">
                        <h3 className="text-[18px] font-bold">Байтерек</h3>
                        <p className="text-[12px] text-[#888888]">Долгосрочное накопление средств и получение дополнительного дохода.</p>
                    </div>
                    <img src="/icons/green-right-arrow.svg"/>
                </div>

                <div className="w-[90%] flex my-2">
                    <img className="w-[80px] h-[80px] object-cover rounded-lg" src="/images/life-persona.svg"/>
                    <div className="w-[] ml-3">
                        <h3 className="text-[18px] font-bold">Life-Инвест+</h3>
                        <p className="text-[12px] text-[#888888]">Долгосрочное накопление средств и получение дополнительного дохода.</p>
                    </div>
                    <img src="/icons/green-right-arrow.svg"/>
                </div>

                <div className="w-[90%] flex my-2">
                    <img className="w-[80px] h-[80px] object-cover rounded-lg" src="/images/life-persona.svg"/>
                    <div className="w-[] ml-3">
                        <h3 className="text-[18px] font-bold">Халык-Казына</h3>
                        <p className="text-[12px] text-[#888888]">Гарантированный доход и страховую защиту на весь срок действия договора страхования.</p>
                    </div>
                    <img src="/icons/green-right-arrow.svg"/>
                </div>
            </div>


            <div className="fixed bottom-0 w-[100%] bg-[#F7F7F7] p-4 flex justify-between">
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <img src="/icons/main.svg"/>
                    <p className="text-[10px]">Главная</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <img src="/images/"/>
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
