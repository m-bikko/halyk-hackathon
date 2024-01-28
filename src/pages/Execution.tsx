import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Bottom} from "../components/Bottom";


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
        <div className="flex flex-col justify-center items-center w-[430px] bg-[#F0F0F0] relative m-auto">
            <a className="w-full flex items-center py-4 bg-[#F7F7F7]" href={'/main-app'}>
                <img className="" src="/icons/button-back.svg" alt={''}/>
                <div className="flex-1 text-[18px] font-bold text-center mr-4">Life Персона</div>
            </a>

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
            <select className="w-[90%] h-[50px]  pl-3 my-3 border rounded-lg border-[#D7D7D7]">
                <option hidden selected>Территория страхования</option>
                <option>Almaty</option>
                <option>Atyrau</option>
                <option>Shymkent</option>
                <option>Astana</option>
            </select>
            <select className="w-[90%] h-[50px] pl-3 my-3 border border-[#D7D7D7] rounded-lg">
                <option hidden selected>Срок страхования</option>
                <option>1 месяц</option>
                <option>3 месяц</option>
                <option>6 месяц</option>
                <option>1 год</option>
                <option>2 год</option>
            </select>
            <select className="w-[90%] h-[50px] pl-3 my-3 border border-[#D7D7D7] rounded-lg">
                <option hidden selected>Периодичность оплаты</option>
                <option>Ежемесячная</option>
                <option>Квартальная</option>
                <option>Полугодовая</option>
                <option>Годовая</option>
                <option>Единовременно</option>
            </select>


            <div className="w-[90%] h-[50px] my-3 flex items-center border border-[#D7D7D7]  rounded-lg relative">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className="p-2 outline-0 bg-transparent "
                    placeholderText={"dd.mm.yyyy"}
                />
                <div className=" absolute right-2">
                    <img src="/icons/calendar.svg"/>
                </div>
            </div>

            <div className="w-[90%]">
                <p className=" text-[#00966B] pt-4">Внимание, минимальная страховая премия должна быть не ниже следующих
                    пределов:</p>
                <ul className="text-[#00966B] list-disc pt-4 ml-11">
                    <li className="">ежемесячная – 5 000 тенге</li>
                    <li>квартальная – 15 000 тенге</li>
                    <li>полугодовая – 30 000 тенге</li>
                    <li>годовая – 60 000 тенге</li>
                    <li>единовременно – 300 000 тенге</li>
                </ul>
            </div>

            <h1 className="pt-6 font-bold mb-2">Страховая сумма по страховым случаям</h1>
            <table className="mr-2 ml-2">
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
            </table>

            <div className="w-full flex justify-between items-center pr-2 pl-2 mt-5 mb-5">
                <a className="w-[47%] h-[60px] text-[#00966B] my-1 rounded-lg bg-[#DEFFED] flex items-center justify-center"
                   href={'/main-app'}>НАЗАД</a>
                <a className="w-[47%] h-[60px] text-white my-1 rounded-lg bg-[#00966B] flex items-center justify-center"
                   href={'/execution-2'}>ДАЛЕЕ</a>
            </div>

            <Bottom/>
        </div>
    );
}

export default Execution;
