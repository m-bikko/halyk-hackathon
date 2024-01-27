import React from "react";

interface Props {
    borderColor: string
}

export const HeaderWithLogo = ({borderColor}:Props) => {
    return <div className={'w-full'}>
        <img src="/icons/halyk.svg" alt="" className={'m-auto mt-5 mb-5'}/>
        <div className={`${borderColor} w-5/6 m-auto border-b-[1px]`}></div>
    </div>
}