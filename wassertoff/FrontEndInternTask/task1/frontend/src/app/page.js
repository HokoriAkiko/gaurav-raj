"use client"
import { useState } from "react";
import Prompt from "./Prompt";
import Editor from "./Editor";

const Home = ()=> {
  const [name,set_name] = useState("");
  const [user_name,set_user_name] = useState("");
  const pass={name,set_name,user_name,set_user_name};

  return <>{!!user_name ? <Editor {...pass} /> : <Prompt {...pass}/>} </>
}

export default Home;
