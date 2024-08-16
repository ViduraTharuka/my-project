import { FaEnvelope } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaWhatsappSquare } from "react-icons/fa";

function ContactUs (){
    return(
        <div className="m-2 mt-6">
            <div className="font-mono font-extrabold text-blue-400 text-5xl">
                CONTACT US
            </div>
            <div className="flex-col md:flex-row ">
                <div className="flex flex-col md:flex-row md:place-content-center">
                    <div className=" w-96 h-36 shadow-md shadow-black m-4 flex flex-col justify-center p-4 rounded-md">
                        <div className="flex flex-row">
                            <FaEnvelope  className="w-20 h-20"/>
                            <div className="pt-1 pl-6">
                                <div className="text-3xl font-mono font-bold">Email Us</div>
                                <div className="text-lg font-mono italic">vidurat33@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-96 h-36 shadow-md shadow-black m-4 flex flex-col justify-center p-4 rounded-md">
                        <div className="flex flex-row">
                            <PiPhoneCallFill  className="w-20 h-20 text-blue-600"/>
                            <div className="pt-1 pl-6">
                                <div className="text-3xl font-mono font-bold">Call Us</div>
                                <div className="text-lg font-mono italic">0770454775</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:place-items-center ">
                <div className=" w-96 h-36 shadow-md shadow-black m-4 flex flex-col justify-center p-4 rounded-md">
                        <div className="flex flex-row">
                            <FaWhatsappSquare  className="w-20 h-20 text-green-500"/>
                            <div className="pt-1 pl-6">
                                <div className="text-3xl font-mono font-bold">Contact via Whatsapp</div>
                                <div className="text-lg font-mono italic">o770454775</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs