import React from "react";

interface Props {
    text: string,
    isMy: boolean
}

export const Message = ({text, isMy}: Props) => {
    return <div className={`pt-2 pb-2 pl-3 pr-3 h-fit w-fit rounded-3xl mt-2 ${!isMy ? "bg-white" : "bg-[#029F77] text-white self-end"}`}>{text}</div>
}