import {HeaderWithLogo} from "../components/HeaderWithLogo";
import {Message} from "../components/Message";
import {Response} from "../components/Response";
import React, {useEffect, useRef, useState} from "react";


interface MessageProps {
    text: string,
    isMy: boolean
}


export const ChatPage = () => {
    const [messages, setMessages] = useState<MessageProps[]>([{
        text: "Здравствуйте, я ваш виртуальный агент, можете задать мне часто задаваемые вопросы",
        isMy: false
    }])
    const ref = useRef<HTMLDivElement>(null);
    const [answer, setAnswer] = useState<string | undefined>()
    const [requestText, setRequestText] = useState<string | undefined>()
    const refInput = useRef<HTMLInputElement>(null)

    const request = async () => {
        setAnswer(undefined)
        const response = await fetch("http://localhost:2000/aiCompletion", {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userPrompt: requestText}),
        });
        if (!response.ok || !response.body) {
            throw response.statusText;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        const loopRunner = true;

        while (loopRunner) {
            const {value, done} = await reader.read();
            if (done) {
                break;
            }
            const decodedChunk = decoder.decode(value, {stream: true});
            if (decodedChunk)
                setAnswer(answer => (answer ? answer : "") + decodedChunk);
        }
        setRequestText(undefined)
    }


    useEffect(() => {
        if (messages.length) {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            console.log(messages)
        }
    }, [messages]);


    return <div className={'w-full min-h-screen h-screen bg-[#D8D8D8] overflow-auto'}>
        <HeaderWithLogo borderColor={"border-green-700"}/>
        <div
            className={`flex flex-col justify-between max-w-2xl border-2 border-transparent m-auto mt-10
                p-8 rounded-3xl md:border-white md:shadow-2xl shadow-transparent min-h-full`}>
            <div className={'flex flex-col'}>
                <img src="/icons/robot.svg" alt="" className={'h-20 self-start mb-4'}/>
                {
                    messages.map((message, i) => {
                            return <Message text={message.text} isMy={message.isMy} key={i}/>
                        }
                    )
                }
                {
                    answer ? <Message text={answer} isMy={false}/> : ""
                }
            </div>
            <div className={'self-center w-full flex mt-3 h-12'}>
                <input type="text" placeholder={'Type something'} className={'p-3 w-full rounded-2xl'}
                       ref={refInput}
                       onChange={e => {
                           setRequestText(e.currentTarget.value);
                       }}/>
                <button className={'bg-green-700 p-3 text-white rounded-2xl ml-2 disabled:bg-gray-700'}
                        type={'button'} onClick={() => {
                    refInput!.current!.value = ""
                    if (answer) {
                        setMessages([...messages, {text: answer!, isMy: false}, {text: requestText!, isMy: true}])
                    } else
                        setMessages([...messages, {text: requestText!, isMy: true}])
                    request()
                }}>GO
                </button>
            </div>
        </div>
        <div ref={ref} className={'h-10 w-full bg-gray-700'}></div>

    </div>
}