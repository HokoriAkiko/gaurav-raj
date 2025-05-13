"use client"
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Message from "../components/Message";
import CardContainer from "../components/CardContainer";

const Success = ()=>{
    const [username , set_username] = useState("");
    const [email,set_email] = useState("");
    const [avatar_url, set_avatar_url] = useState("");

    useEffect(()=>{
        set_username(localStorage.getItem("username"));
        set_email(localStorage.getItem("email"));
        set_avatar_url(localStorage.getItem("avatar"));
        
    },[])

    return(
        <div className="w-screen h-screen wallpaper flex justify-center items-center">
            <div className="h-screen w-[30vw] p-4">
                <Header/>
                <Message
                    message={`Congratulation's ${username} on successfully registering to coding conference`} 
                    styling="font-bold text-4xl text-center"
                    highlight={username}
                />
                <Message
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." 
                    highlight="adipiscing"
                    styling="my-10"
                />
                <CardContainer 
                    styling="my-10 h-[250px] bg-[rgba(50,50,50,0.8)] pt-5 pb-10 px-5 justify-between rounded-[10]"
                    card_labels={[
                        {label:"Coding Conf", styling: "text-2xl text-red-500"},
                        {label:"Second label" , styling: "text-white"}
                    ]}
                    data_labels={[
                        {label: username, styling: "text-xl text-green-500"},
                        {label: email, styling: "italic text-white tracking-[1]"}
                    ]}
                    image={avatar_url}
                    image_styling="w-[65px] h-[65px] rounded-[25px] mr-5"
                />
            </div>
        </div>
    )
}

export default Success;