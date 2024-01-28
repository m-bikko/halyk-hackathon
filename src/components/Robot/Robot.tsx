import React, {useState} from "react";
import "./Robot.css"; // Подключение файла стилей

export const Robot = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const hoverClass = hovered ? "hovered" : ""; // Класс, который добавляется или удаляется в зависимости от состояния наведения

    return (
        <>
            <svg width="231" height="215" viewBox="0 0 231 215" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={`robot-svg`}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                <g clipPath="url(#clip0_71_95)">
                    <rect y="45" width="231" height="170" rx="85" fill="white"/>
                    <rect x="10" y="73" width="212" height="134" rx="67" fill="url(#paint0_linear_71_95)"
                          fillOpacity="0.77"/>
                    <rect x="24" y="85" width="184" height="110" rx="55" fill="#094509"/>
                    <rect x="63" y="118" width="25" height="44" rx="12.5" fill="white" className={hoverClass}/>
                    <rect x="144" y="118" width="25" height="44" rx="12.5" fill="white" className={hoverClass}/>

                    <rect x="99.25" y="6.25" width="18.5" height="12.5" rx="6.25" stroke="white" strokeWidth="12.5"/>
                    <rect width="10" height="35" transform="translate(104 19)" fill="white"/>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_71_95" x1="204" y1="90" x2="34" y2="189"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.06" stopColor="#0CBC39"/>
                        <stop offset="1" stopColor="#19E351" stopOpacity="0.77"/>
                    </linearGradient>
                    <clipPath id="clip0_71_95">
                        <rect width="231" height="215" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};
