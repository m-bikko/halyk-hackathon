import {HeaderWithLogo} from "./components/HeaderWithLogo";
import {Message} from "./components/Message";
import {Response} from "./components/Response";
import React, {useEffect, useRef, useState} from "react";


interface MessageProps {
    text: string,
    isMy: boolean
}



export const ChatPage = () => {
    const [messages, setMessages] = useState<MessageProps[]>([])
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages.length) {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [messages.length]);


    return <div className={'h-screen w-screen overflow-hidden bg-[#D8D8D8] overflow-y-auto '}>
        <div
            className={'absolute rounded-full flex items-center justify-center bg-white font-bold h-10 w-10 mt-3 ml-3 cursor-pointer'}>
                <span>
                    {"<-"}
                </span>
        </div>
        <HeaderWithLogo borderColor={"border-green-700"}/>
        <div
            className={`flex flex-col max-w-3xl mt-6 border-2 border-transparent  m-auto
                p-8 rounded-3xl md:border-white md:shadow-2xl shadow-transparent pb-5 mb-56`}>
            <img src="/icons/robot.svg" alt="" className={'h-20 self-start mb-4'}/>
            {
                messages.map((message, i) =>
                    <Message text={message.text} isMy={message.isMy} key={i}/>
                )
            }
            <div ref={ref} className={'w-full h-16'}/>
        </div>
        <div
            className={'absolute bottom-0 p-8 bg-[#282828] rounded-t-3xl flex flex-wrap gap-4 justify-center max-h-56 no-scrollbar overflow-y-auto'}>
            <div onClick={() => setMessages([...messages, {isMy: false, text: "salam " + messages.length}])}>
                <Response text={"How I can win?"}/>
            </div>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
            <Response text={"How I can win?"}/>
        </div>
    </div>
}