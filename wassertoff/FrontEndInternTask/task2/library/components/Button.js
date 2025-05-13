const ComponentButton = ({label, onClick})=>{
    return(
        <button className="bg-orange-500 w-full rounded-lg p-2 font-bold" onClick={onClick}>
            {label}
        </button>
    )
}

export default ComponentButton;