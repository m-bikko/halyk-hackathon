import React from "react";

interface Props {
    text: string
}

export const Response = ({text} : Props) =>{
    return <div className={'bg-[#029F77] border-2 border-transparent pt-2 pb-2 pl-3 pr-3 h-fit rounded-3xl text-white cursor-pointer hover:bg-white hover:text-[#029F77] hover:border-[#029F77] transition '}>{text}</div>

}