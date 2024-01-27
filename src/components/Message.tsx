import React from "react";

interface Props {
    text: string,
    isMy: boolean
}

export const Message = ({text, isMy}: Props) => {
    return <div
        className={`p-4 h-fit max-w-[70%] rounded-3xl mt-2 break-words text-wrap ${!isMy ? "bg-white self-start" : "bg-[#029F77] text-white self-end"}`}>{text}</div>
}