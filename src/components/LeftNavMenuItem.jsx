import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
    return (
        <div
            className={
                "text-black text-base truncate cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-[#f2f2f2] " +
                className
            }
            onClick={action}
        >
            <span className="text-2xl mr-5">{icon}</span>
            {text}
        </div>
    );
};

export default LeftNavMenuItem;