import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Execution = () => {
    const [price, setPrice] = useState(50);

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };


    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="fixed w-full top-0 left-0 flex items-center py-4 bg-[#F7F7F7]">
                <img className="" src="/icons/button-back.svg" alt={''}/>
                <div className="flex-1 text-[18px] font-bold text-center mr-4">Life Персона</div>
            </div>

            <div className="w-[90%] mt-16 mb-4">
                <p className="text-[14px] text-[#848484]">Страховая премия к оплате</p>
                <h1 className="text-[24px] font-bold mr-2">{price} тг</h1>
                <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1"
                    value={price}
                    onChange={handlePriceChange}
                    className="w-full h-[3px]"
                />
            </div>

            <select className="w-[90%] h-[50px] text-[#6D6D6D] pl-3 my-3 border rounded-lg">
                <option>Территория страхования</option>'
            </select>
            <select className="w-[90%] h-[50px] text-[#6D6D6D] pl-3 my-3 border rounded-lg">
                <option>Срок страхования</option>
            </select>
            <select className="w-[90%] h-[50px] text-[#6D6D6D] pl-3 my-3 border rounded-lg">
                <option>Периодичность оплаты </option>
            </select>


            <div className="w-[90%] h-[50px] my-3 flex items-center border rounded-lg relative">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className="p-2 outline-0"
                />
                <div className=" absolute right-2">
                    <img src="/icons/calendar.svg"/>
                </div>
            </div>

            <div className="w-[90%]">
                <p className=" text-[#00966B] pt-4">Внимание, минимальная страховая премия должна быть не ниже следующих пределов:</p>
                <ul className="text-[#00966B] list-disc pt-4 ml-11">
                    <li className="">ежемесячная – 5 000 тенге</li>
                    <li>квартальная – 15 000 тенге</li>
                    <li>полугодовая – 30 000 тенге</li>
                    <li>годовая – 60 000 тенге</li>
                    <li>единовременно – 300 000 тенге</li>
                </ul>
            </div>

            <h1 className="w-[90%] pt-6 font-bold">Страховая сумма по страховым случаям</h1>
            <table className="w-[90%] table-auto border mt-6 mb-40">
                <tbody>
                <tr>
                    <td className="w-1/2 border p-4">Смерть Застрахованного по любой причине</td>
                    <td className="w-1/2 border p-4">0 тг</td>
                </tr>
                <tr>
                    <td className="w-1/2 border p-4">Смерть Застрахованного по причине несчастного случая</td>
                    <td className="w-1/2 border p-4">0 тг</td>
                </tr>
                <tr>
                    <td className="w-1/2 border p-4">Дожитие Застрахованного до конца срока страхования</td>
                    <td className="w-1/2 border p-4">0 тг</td>
                </tr>
                </tbody>
            </table>

            <div className="fixed w-[90%] flex justify-between items-center bottom-0 mb-16 pb-6 bg-white">
                <button className="w-[47%] h-[60px] text-[#00966B] my-1 rounded-lg bg-[#DEFFED]">НАЗАД</button>
                <button className="w-[47%] h-[60px] text-white my-1 rounded-lg bg-[#00966B]">ДАЛЕЕ</button>
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

export default Execution;
