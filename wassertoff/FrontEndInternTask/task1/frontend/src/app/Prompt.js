const Prompt = ({name,set_name,set_user_name})=> {
  return(
    <div className="flex justify-center items-center w-screen h-screen bg-teal-200">
        <div className="border-black-500 border-1 rounded-lg bg-white flex flex-col">
            <div className="w-<100> border-b-1 flex justify-center text-3xl p-3 m-3">Enter Your Name</div>
            <div className="flex flex-row items-center">
                <input className="flex-1 border-1 outline-0 m-3 p-2 border-green-500" type="text" value={name} placeholder="Your name" onChange={(e) => set_name(e.target.value)}/>
                <button className="mx-3 p-2 border-1  bg-green-500 border-green-500 cursor-pointer text-white" onClick={()=> set_user_name(name.replace(/\s+/g,"_"))}> Ready </button>
            </div>
            
        </div>
    </div>
  )
}

export default Prompt;