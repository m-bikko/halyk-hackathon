import React from 'react';

const BuyPolis = () => {
    return (
        <div >
            <header className="w-[100%] flex justify-between py-2">
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

            <div className="w-[95%] my-4 py-4 bg-[#fff] rounded-xl">
                <h3>Накопления</h3>
                <div className="w-[90%] ">
                    <img className="w-[70px] h-[70px] rounded-lg" src="/icons/like.svg"/>
                    <div className="">
                        <h3>Life-Персона</h3>
                        <p>Смешанное страхование жизни за 5 минут для создания накоплений и защиты благосостояния семьи.</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default BuyPolis;
