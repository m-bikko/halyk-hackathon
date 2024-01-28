import {Bottom} from "../components/Bottom";


export const ExecutionSecond = () => {

    return (
        <div className="flex flex-col justify-center items-center w-[430px] bg-[#F0F0F0] relative m-auto">
            <a className="w-full top-0 left-0 flex items-center py-4 bg-[#F7F7F7]" href={'/main-app'}>
                <img className="" src="/icons/button-back.svg"/>
                <div className="flex-1 text-[18px] font-bold text-center mr-4">Life Персона</div>
            </a>

            <div className="w-[90%] mt-10">
                <h2 className="text-[18px] font-bold">Введите данные Застрахованного</h2>
                <label className="flex items-center py-2 gap-2">
                    <input
                        type="radio"
                        name="question1"
                        className="w-5 h-5"
                    />
                    Застрахованный является Страхователем
                </label>
                <label className="flex items-center py-2 gap-2 opacity-50">
                    <input
                        type="radio"
                        name="question1"
                        className="w-5 h-5"
                        disabled
                    />
                    Застрахованный не является Страхователем
                </label>
            </div>

            <div className="w-[90%] mt-8">
                <h2 className="text-[18px] font-bold">Принадлежит ли и/или причастен ли Страхователь/Застрахованный или
                    его члены семьи и близкие родственники к иностранному публичному должностному лицу?</h2>
                <label className="flex items-center py-2 gap-2">
                    <input
                        type="radio"
                        name="question2"
                        className="w-5 h-5"
                    />
                    Да
                </label>
                <label className="flex items-center py-2 gap-2 mb-52">
                    <input
                        type="radio"
                        name="question2"
                        className="w-5 h-5"
                    />
                    Нет
                </label>
            </div>

            <div className="w-[90%] flex justify-between items-center bottom-0 pb-6">
                <a className="w-[47%] h-[60px] text-[#00966B] my-1 rounded-lg bg-[#DEFFED] flex justify-center items-center" href={'/execution-1'}>НАЗАД</a>
                <a className="w-[47%] h-[60px] text-white my-1 rounded-lg bg-[#00966B] flex justify-center items-center" href={'/execution-3'}>ДАЛЕЕ</a>
            </div>

            <Bottom/>
        </div>
    );
}

