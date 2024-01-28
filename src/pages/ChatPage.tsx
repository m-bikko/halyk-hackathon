import {HeaderWithLogo} from "../components/HeaderWithLogo";
import {Message} from "../components/Message";
import {Response} from "../components/Response";
import React, {useEffect, useRef, useState} from "react";
import {Robot} from "../components/Robot/Robot";

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
    const [requestText, setRequestText] = useState<string | undefined>(undefined)
    const refInput = useRef<HTMLInputElement>(null)
    const [loading, setLoading] = useState(false)
    ref.current?.scrollIntoView({
        behavior: "smooth",    block: "start",
    });
    const request = async () => {
        setAnswer(undefined)
        setLoading(true)
        
        const response = await fetch("https://rep-drab.vercel.app/aiCompletion", {
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
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
        setRequestText(undefined)
    }


    useEffect(() => {
        if (messages.length > 1) {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [messages.length]);


    return <div className={'w-full h-screen bg-gradient overflow-auto'}>
        <HeaderWithLogo borderColor={"border-green-700"}/>
        <div className={'m-auto text-center bg-white w-fit p-3 rounded-full mt-6'}>
            <a href="/interactive-page-1" className={``}>Перейти в приложение</a>
        </div>
        <div
            className={`flex flex-col justify-between max-w-2xl border-2 border-transparent m-auto mt-10
                p-8 rounded-3xl md:border-white md:shadow-2xl shadow-transparent min-h-full bg-[#D8D8D8]`}>
            <div className={'flex flex-col'}>
                <div className={'self-start mb-4'}>
                    <Robot h={55}/>
                </div>
                {
                    messages.map((message, i) => {
                            return <Message text={message.text} isMy={message.isMy} key={i}/>
                        }
                    )
                }
                {/*{*/}
                {/*    answer ? <Message text={answer} isMy={false}/> : ""*/}
                {/*}*/}
                {
                    loading ?
                        <Message text={"Загрузка"} isMy={false}/> :
                        (answer ?
                                <Message text={answer!} isMy={false}/>
                                : ""
                        )
                }
            </div>
            <div className={'self-center w-full flex mt-3 h-12'}>
                <input type="text"
                       placeholder={'Задайте вопрос. Например: Ты кто?'} className={'p-3 w-full rounded-2xl'}
                       ref={refInput}
                       onChange={e => {
                           setRequestText(e.currentTarget.value);
                       }}

                />
                <button className={'bg-green-700 p-3 text-white rounded-2xl ml-2 disabled:bg-gray-700'}type={'button'} onClick={() => {
                    refInput!.current!.value = ""
                    if (answer) {
                        setMessages([...messages, {text: answer!, isMy: false}, {text: requestText!, isMy: true}])
                    } else
                        setMessages([...messages, {text: requestText!, isMy: true}])
                    request().then(() => setLoading(false))
                }}>GO
                </button>
            </div>
        </div>
        <div ref={ref} className={'w-full'}></div>

    </div>
}
