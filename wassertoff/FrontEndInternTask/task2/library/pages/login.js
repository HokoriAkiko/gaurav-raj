"use client"
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ComponentButton from "../components/Button";
import Header from "../components/Header";
import ImageFile from "../components/ImageFile";
import InputField from "../components/InputField";
import Message from "../components/Message";

const Login = ()=>{
    const name_ref = useRef();
    const email_ref = useRef();
    const password_ref = useRef();
    const avatar_ref = useRef();

    const router = useRouter();

    const handle_validity = ()=>{
        const obj = {
            name: name_ref && name_ref.current && name_ref.current.valid,
            email: email_ref && email_ref.current && email_ref.current.valid,
            password: password_ref && password_ref.current && password_ref.current.valid,
            avatar: avatar_ref && avatar_ref.current && avatar_ref.current.valid
        };

        for(const key in obj){
            if(!obj[key]) return false;
        }
        return true;
    }

    const handle_click = ()=>{
        if(handle_validity()){
            const obj = {
                name: name_ref.current.value,
                email: email_ref.current.value,
                password: password_ref.current.value,
                avatar: avatar_ref.current.value[0]
            };

            localStorage.setItem("username",obj.name);
            localStorage.setItem("email",obj.email);
            localStorage.setItem("avatar",URL.createObjectURL(obj.avatar));
            router.push("/success");
        }
    }

    useEffect(()=>{localStorage.clear()},[])

    return(
        <div className="w-screen h-screen wallpaper flex justify-center items-center">
            <div className="h-screen w-[30vw] p-4">
                <Header/>
                <Message message="Your Journey to Coding Conf 2025 Starts Here!" styling="font-bold text-4xl text-center"/>
                <Message message="some long placeholder here"/>
                <ImageFile ref={avatar_ref} required={true} label="Profile" />
                <InputField ref={name_ref} placeholder="Enter Name" label="Full Name" required={true} type="text" />
                <InputField ref={email_ref} placeholder="Enter Email" label="Email" type="email" required={true} />
                <InputField ref={password_ref} placeholder="Enter Password" label="Password" type="password" required={true} />
                <ComponentButton label="Create Account" onClick={handle_click}/>
            </div>
        </div>
    )
}

export default Login;