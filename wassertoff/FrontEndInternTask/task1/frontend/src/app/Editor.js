'use client'
import { useEffect, useRef, useState } from 'react'
import { WebsocketProvider } from 'y-websocket';
import { TextAreaBinding } from 'y-textarea';
import * as y from "yjs"

const Editor = ({ user_name }) => {
  const area_ref = useRef();
  const [actives,set_actives] = useState([]);

  const room = 'text-editing-room';

  useEffect(()=>{
    const y_document = new y.Doc();
    const y_text = y_document.getText();
    const provider = new WebsocketProvider("ws://localhost:1234",room,y_document);
    const awareness = provider.awareness;
    const binding = new TextAreaBinding(y_text,area_ref.current);

    //init local variables name and color
    awareness.setLocalStateField("user",{
      name: user_name,
      color: `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`
    })

    //when user join or leaves update logic
    const update_users = ()=>{
      const states = Array.from(awareness.getStates().values());
      //array of {user , color}
      set_actives(states.map(v=>v.user));
    }

    //user join , leave listener
    awareness.on('change',update_users);

    //init
    update_users();

    //cleanup
    return ()=>{
      binding.destroy();
      provider.disconnect();
      y_document.destroy();
    }
  },[])

  //render active users
  const render_other_active_users = ()=>{
    return(
        <div className='flex flex-row items-center  mx-5 p-2'>
            Other Active Users : 
            {actives
                .filter((v)=>v.name !== user_name)
                .map((v,i)=><div className={`px-2 mx-2 text-white`} style={{backgroundColor: v.color}} key={i}> {v.name ?? "Anonymous"} </div>)
            }
        </div>
    )
  }

  return (
    <div className="w-screen h-screen flex justify-center  bg-gray-100 py-10">
        <div className='border-1 border-gray-500 w-250 flex flex-col bg-white'>
            <div className='w-<100> border-1 text-3xl m-5 text-center py-2'> Welcome to the Shared Editor</div>
            <div className='flex flex-row items-center mx-5 p-2'>
                You : 
                <div className='px-2 mx-2 text-white bg-green-500'>{user_name}</div>
            </div>
            <div className='flex flex-row items-center mx-5 p-2'>
                Room : 
                <div className='px-2 mx-2 text-white bg-green-500'>{room}</div>
            </div>
            {render_other_active_users()}
            <textarea
                className='border-1 border-gray-400 m-5 p-2 '
                placeholder='Start typing here...'
                contentEditable
                ref={area_ref}
            />
        </div>
    </div>
  )
}

export default Editor;