import React from 'react';

const LifePersona = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="fixed w-full top-0 left-0 flex items-center py-4 bg-[#F7F7F7]">
                <img className="" src="/icons/button-back.svg"/>
                <div className="flex-1 text-[18px] font-bold text-center mr-4">Life Персона</div>
            </div>

            <img className="w-full mt-16" src=""/>

            <h2 className="w-full text-[20px] ml-6 pt-4 font-bold">Life Персона</h2>
            <p className="pt-2 ml-3">Смешанное страхование жизни за 5 минут для создания накоплений и защиты благосостояния семьи. Взносы от 200 тенге в день.</p>


            <h2 className="w-full text-[20px] ml-6 pt-6 font-bold">Преимущество</h2>
            <div className="flex flex-col justify-center items-center pt-4 mb-52">
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую сумму</p>
                </div>
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую сумму</p>
                </div>
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую сумму</p>
                </div>
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую сумму</p>
                </div>
                <div className="w-[80%] flex justify-between items-center py-5">
                    <img src="/icons/protection.svg"/>
                    <p className="w-[80%]">Жизнь Клиента находится под надежной страховой защитой на всю страховую сумму</p>
                </div>

            </div>


            <div className="fixed w-full flex flex-col justify-center items-center bottom-0 mb-16 pb-6 bg-white">
                <button className="w-[95%] h-[60px] text-white my-1 rounded-lg bg-[#00966B]">ОФОРМИТЬ СЕЙЧАС</button>
                <button className="w-[95%] h-[60px] text-[#00966B] my-1 rounded-lg bg-[#DEFFED]">КОНСУЛЬТАЦИЯ</button>
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
        </div>
    );
}

export default LifePersona;
