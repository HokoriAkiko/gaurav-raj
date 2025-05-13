"use client"
import { forwardRef, useImperativeHandle, useState } from "react";

const InputField = forwardRef(({ type = "text", placeholder, required, label }, ref) => {
    const [data, set_data] = useState("");

    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const is_valid = () => {
        if (type === "email" && !email_regex.test(data)) { return "Invalid Email";}
        else if (type === "password" && !password_regex.test(data)) {return "Password must contain upper, lower, digit, special and min length of 8";}
        else if(type === "text" && data.length === 0){return "Invalid";}
        return null;
    };

    const expose = ()=>{
        return{
            value: data,
            valid: is_valid() === null
        }
    }
    useImperativeHandle(ref,expose);

    return (
        <div className="flex flex-1 flex-col mb-3">
            <label className="text-white mb-2">{label}{required ? "*" : ""}</label>
            <input
                className="flex-1 border-1 border-white rounded-lg p-2 bg-[rgba(100,100,100,0.75)] text-white outline-0"
                onChange={(e) => set_data(e.target.value)}
                placeholder={placeholder}
                value={data}
                type={type}
            />
            <div className="text-sm text-red-500 italic mx-1 px-1">{is_valid()}</div>
        </div>
    );
});

export default InputField;