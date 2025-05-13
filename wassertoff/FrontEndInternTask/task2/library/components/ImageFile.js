"use client"
import { forwardRef, useImperativeHandle, useState } from "react";

const ImageFile = forwardRef(function ImageFile({placeholder,label, required},ref){
    const [data,set_data] = useState();

    const url = data ? URL.createObjectURL(data[0]) : null;

    const expose = ()=>{
        return{
            value: data,
            valid: !!data
        }
    }
    useImperativeHandle(ref,expose);

    return(
        <div className="flex flex-1 flex-col mb-3">
            <label className="text-white mb-2">{`${label}${required ? "*" : null}`}</label>
            <div className="image_file h-[13vh] bg-[rgba(100,100,100,0.75)] rounded-lg">
                <input 
                    onChange={(e)=>set_data(e.target.files)} 
                    className="w-[100%] h-[100%] opacity-0"
                    placeholder={placeholder} 
                    accept="image/*"
                    type="file"
                    title=""
                />
                <div className="view flex justify-center items-center">
                    {url ? 
                        <img className="w-[100px] h-[100px] object-cover object-center rounded-full border-1 border-white" src={url} alt=""/>
                        :
                        <div className="w-[100px] h-[100px] rounded-full border-1 border-white flex justify-center items-center">
                            <img className="w-[25px] h-[25px] invert-[1]" src="/profile.png"/>
                        </div>
                    }
                </div>

            </div>
            <div className="text-sm text-red-500 italic mx-1 px-1">
                {required ? !!data ? null : "Not Found" : null}
            </div>
        </div>
    )
});

export default ImageFile;