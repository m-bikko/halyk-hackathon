import React from "react";

interface Props {
    title: string,
    desc: string,
    img: string
}

export const Polis = ({title, desc, img}:Props) => {
    return <div className="w-[90%] flex my-2">
        <img className="w-[80px] h-[80px] object-cover rounded-lg" src={img}/>
        <div className="w-[] ml-3">
            <h3 className="text-[18px] font-bold">{title}</h3>
            <p className="text-[12px] text-[#888888]">{desc}</p>
        </div>
        <img src="/icons/green-right-arrow.svg"/>
    </div>
}