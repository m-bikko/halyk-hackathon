import React from "react";

interface props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
// Пример использования в MainApp.tsx
export const ModalWindow = ({ isOpen, onClose, children }: props) => {
    return isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 text-xl cursor-pointer"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    ) : null;
};
