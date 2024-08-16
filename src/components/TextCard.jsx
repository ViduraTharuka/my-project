



function TextCard ({text, textColor, bgColor}){
    return(
        <div className={`inline-block m-4 p-4 shadow-md shadow-black
        rounded-lg justify-center border-stone-600 border-2 ${bgColor}`}>
            <div className={`${textColor} font-mono font-bold italic`}>
                {text}
            </div>
        </div>
    )
}


export default TextCard;