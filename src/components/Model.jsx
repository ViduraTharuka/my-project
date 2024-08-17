import React from "react";

const ImageModel = ({isOpen, onClose, images}) => {

    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-70 mt-40 mx-2 rounded-xl">
             <div className="flex justify-center items-center">
                <button className=" text-red-600 font-extrabold text-6xl" onClick={onClose}>X</button>
            </div>
            <div className="m-1 flex ">
                {images.map((image, index) => (
                    <div className=""> 
                        <img key={index} src={image} alt={`Vehicle ${index + 1}`} className="rounded-3xl" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageModel;