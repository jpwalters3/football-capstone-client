import React from "react";

function Button({label, onClick, secondary}) {
    const additionalClasses = secondary ?
        "border-red-400 bg-red-400 font-serif text-neutral-150 text-xl"
        : "border-pink-400 bg-pink-400 font-serif text-purple-750 text-xl";

    return (
        <button onClick={onClick} className={`border-2 drop-shadow-2xl p-1 rounded-full
                                              w-1/12 
                                              ${additionalClasses}`}>
            {label}
        </button>
    )
}


export default Button;