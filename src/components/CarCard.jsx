

function CarCard({model, noOfSeats,price, regNo,imgSrc,onClick}){
    return(
        <div className="bg-white
        rounded-md m-5 hover:bg-blue-400" onClick={onClick}>

            <div className=" bg-blue-400 flex justify-center rounded-t-md h-max">
                <img src={imgSrc} className='drop-shadow-[2px_10px_6px_rgba(0,0,0,0.75)] h-40'/>
            </div>
            <div className='text-sm flex flex-col items-center'>
                <p className='font-bold font-mono text-xl italic'>{model}</p>
                <p className='font-bold font-mono text-sm italic'>{noOfSeats}</p>
                <p className='font-bold font-mono text-sm italic'>{price}</p>
                <p className='font-bold font-mono text-lg mb-1'>{regNo}</p>
            </div>
        </div>
    )
}

export default CarCard