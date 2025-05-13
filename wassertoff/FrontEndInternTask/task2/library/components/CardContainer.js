const CardContainer = ({styling,card_labels,data_labels, image ,image_styling})=>{

    return(
        <div className={`border-3 border-gray-500 flex flex-col ${styling}`}>
            <div className="flex flex-col">{card_labels.map((v,i)=><label key={`card-label-${i}`} className={`${v.styling}`}>{v.label}</label>)}</div>
            <div className="flex flex-row items-center">
                {image ? <img src={image} alt="some image" className={`${image_styling}`}/>: null}
                <div className="flex flex-col"> {data_labels.map((v,i)=><label key={`data-label${i}`} className={`${v.styling}`}>{v.label}</label>)} </div>
            </div>
        </div>
    )
}

export default CardContainer;