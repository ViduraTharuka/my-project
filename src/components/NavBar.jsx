import { Link } from "react-router-dom"
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";


function NavBar () {
    return(
        <div className="container-sm">
            <div className="flex shadow-md shadow-blue-400 p-2 justify-between bg-black">
                <div className="md:flex md:space-x-4">
                    <div className="md:text-xl text-blue-400 font-serif md:ml-10">Find a Car</div>
                    <div className="text-xs text-white font-serif place-self-end">
                        For budget and comfortable ride...
                    </div>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex space-x-10 font-serif mr-10">
                        <li className=" text-white hover:text-blue-400">About</li>
                        <li className=" text-white hover:text-blue-400"><a href="contact">Contact Us</a></li>
                        <li className=" text-white hover:text-blue-400"><Link to="/booking">Place a Booking</Link></li>
                    </ul>
                </div>
                <div className="text-white text-lg md:hidden
                bg-blue-400 p-2 rounded-full font-mono font-extrabold">
                    <Link to="/booking">Place a Booking</Link>

                </div>
            </div>
        </div>
    )
}

export default NavBar