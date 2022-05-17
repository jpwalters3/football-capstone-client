import React from "react";

function Button({label, onClick, secondary}) {
    const additionalClasses = secondary ?
        "border-pink-450 bg-pink-450 font-serif text-neutral-150 text-xl"
        : "border-fuchshia-900 bg-fuchshia-900 font-serif text-stone-50 text-xl";

    return (
        <button onClick={onClick} className={`border-2 drop-shadow-2xl mt-2 p-1 rounded-full
                                              w-1/12 
                                              ${additionalClasses}`}>
            {label}
        </button>
    )
}


export default Button;