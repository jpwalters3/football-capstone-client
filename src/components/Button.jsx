import React from "react";

function Button({label, onClick, secondary}) {
    const additionalClasses = secondary ?
        "border-pink-450 bg-pink-450 hover:border-emerald-200 hover:text-emerald-200 font-serif text-stone-50 text-xl my-5"
        : "border-fuchshia-900 bg-fuchshia-900 hover:border-emerald-200 hover:text-emerald-200 font-serif text-stone-50 text-xl my-5";

    return (
        <button onClick={onClick} className={`border-2 drop-shadow-2xl mt-2 p-1 rounded-full
                                              w-1/12 
                                              ${additionalClasses}`}>
            {label}
        </button>
    )
}


export default Button;