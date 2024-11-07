import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bottom: 0,
                margin: "auto",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: "auto",
                    width: "80%",
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                {children}
 
               <div className="flex-1 flex-row-reverse justify-end py-10 m-5 mt-10" style={{ margin: "20px", float: "inline-end" }}>
                    {<a onClick={onClose} className="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Close</a>}

                </div>
            </div>
        </div>
    );
};

export default Modal;
