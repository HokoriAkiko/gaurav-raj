const Message = ({styling,message, highlight})=>{
    
    const arr = message.split(highlight);

    return(
        <div className={`text-center my-4 text-white ${styling}`}>
            {highlight? 
                <>
                {arr[0]}
                <span className="text-amber-500">{highlight}</span>
                {arr[1]}
                </> 
                : 
                message
            }
        </div>
    )
}

export default Message;