

const ExecutionSecond = () => {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="fixed w-full top-0 left-0 flex items-center py-4 bg-[#F7F7F7]">
                <img className="" src="/icons/button-back.svg"/>
                <div className="flex-1 text-[18px] font-bold text-center mr-4">Life Персона</div>
            </div>

            <div className="w-[90%] mt-24">
                <h2 className="text-[18px] font-bold">Введите данные Застрахованного</h2>
                <label className="flex items-center py-2 gap-2">
                    <input
                        type="radio"
                        name="question1"
                        className="w-5 h-5"
                    />
                    Застрахованный является Страхователем
                </label>
                <label className="flex items-center py-2 gap-2">
                    <input
                        type="radio"
                        name="question1"
                        className="w-5 h-5"
                    />
                    Застрахованный не является Страхователем
                </label>
            </div>

            <div className="w-[90%] mt-8">
                <h2 className="text-[18px] font-bold">Принадлежит ли и/или причастен ли Страхователь/Застрахованный или его члены семьи и близкие родственники к иностранному публичному должностному лицу?</h2>
                <label className="flex items-center py-2 gap-2">
                    <input
                        type="radio"
                        name="question2"
                        className="w-5 h-5"
                    />
                    Да
                </label>
                <label className="flex items-center py-2 gap-2">
                    <input
                        type="radio"
                        name="question2"
                        className="w-5 h-5"
                    />
                    Нет
                </label>
            </div>

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

export default ExecutionSecond;
