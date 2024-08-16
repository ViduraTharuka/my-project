
import CarCard from "../components/CarCard"
import black_mazda from '../assets/black_mazda.png'
import yellow_alto from '../assets/yellow_alto.png'
import red_alto from '../assets/red_alto.png'
import white_kdh from '../assets/white_kdh.png'
import ash_suv from '../assets/ash_suv.png'
import blue_vitz from '../assets/blue_vitz.png'
import Slider from "react-slick"
import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react"
import WhatsAppButton from "../components/whatsapButton"
import { useSearchParams } from "react-router-dom"

function BookingScreen () {

    const car_data = [
        {
            model : 'Mazda 2024',
            no_of_seats : '5 (with driver)',
            price : '5000 LKR per day',
            reg_no : 'CAB 0001',
            img_source : `${black_mazda}`
        },
        {
            model : 'Toyota prius',
            no_of_seats : '5 (with driver)',
            price : '5000 LKR per day',
            reg_no : 'CAB 0002',
            img_source : `${red_alto}`
            },
        {
            model : 'Mazda 202',
            no_of_seats : '5 (with driver)',
            price : '5000 LKR per day',
            reg_no : 'CAB 0001',
            img_source : `${ash_suv}`
        },
        {
            model : 'Mazda 2024',
            no_of_seats : '5 (with driver)',
            price : '5000 LKR per day',
            reg_no : 'CAB 0001',
            img_source : `${yellow_alto}`
        },
        {
            model : 'Mazda 2024',
            no_of_seats : '5 (with driver)',
            price : '5000 LKR per day',
            reg_no : 'CAB 0001',
            img_source : `${blue_vitz}`
        },
        {
            model : 'Mazda 2024',
            no_of_seats : '5 (with driver)',
            price : '5000 LKR per day',
            reg_no : 'CAB 0001',
            img_source : `${ash_suv}`
        },
    ]

    const [settings, setSettings] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    const settings_for_md = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setSettings(settings_for_md);
          } else {
            setSettings({
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
            });
          }
        };
    
        // Set the initial settings based on screen size
        handleResize();
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const [carModel, setCarModel] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [name, setName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [date, setDate] = useState('')
    const [time,setTime] = useState('')

    const handleClick = (car) => {
        setCarModel(car.model)
        setRegNumber(car.reg_no)
    }


    const handleWhatsAppClick = () => {
        console.log('triggered')
        const phoneNumber = '94774398403'; // Your phone number in international format without the plus sign
        console.log(phoneNumber)
        const message = `
          Hello, I would like to inquire about your services.
          Name: ${name}
          Contact Number: ${contactNumber}
          Car Model: ${carModel}
          Reg. Number: ${regNumber}
          Date: ${date}
          Time: ${time}
        `;
        console.log(message)
        const encodedMessage = encodeURIComponent(message.trim());
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        window.open(url, '_blank');
      };

    return(
        <div className="p-2 bg-black">
            <div className="text-blue-400 font-mono italic text-center
            font-extrabold text-4xl">ENTER YOUR DETAILS HERE</div>
            <div className="text-white font-mono italic
                font-extrabold mt-2">
                Select the Vehicale you want
            </div>
            <div>
                <Slider {...settings} className="">
                        {car_data.map((car)=>
                            <CarCard  className='flex justify-center align-bottom'
                                imgSrc={car.img_source}
                                model={car.model}
                                noOfSeats={car.no_of_seats}
                                price={car.price}
                                regNo={car.reg_no}
                                onClick={()=> handleClick(car)}
                            />)}
                </Slider>
            </div>
            <div className="md:flex justify-center mt-8">
                <div className="flex justify-center md:inline-flex">
                    <input type="text" placeholder="Your Name"  className="
                    p-2  border border-blue-400 rounded-md w-40 md:w-60
                    mt-2" onInput={(e)=>setName(e.target.value)}></input>
                    <input type="text" placeholder="Contact Number"  className="
                    p-2  border border-blue-400 rounded-md w-40 md:w-60
                    mt-2 ml-4" onInput={(e)=>setContactNumber(e.target.value)}></input>
                </div>
                <div className="flex justify-center md:inline-flex md:ml-4">
                    <input type="text" placeholder="Car Model" value={carModel} className="
                    p-2  border border-blue-400 rounded-md w-40 md:w-60
                    mt-2"></input>
                    <input type="text" placeholder="Reg. Number" value={regNumber} className="
                    p-2  border border-blue-400 rounded-md w-40 md:w-60
                    mt-2 ml-4"></input>
                </div>
            </div>
            <div className="md:flex justify-center mt-8" >
                <div className="flex justify-center md:inline-flex">
                    <label className="text-white font-mono italic
                    font-extrabold mt-2  place-content-center" >Select the date</label>
                    <input type="date" className="
                    p-2  border border-blue-400 rounded-md w-40 md:w-60
                    mt-2 ml-4" onInput={(e)=>setDate(e.target.value)}></input>
                </div>
                <div className="flex justify-center md:inline-flex ml-4">
                    <label className="text-white font-mono italic
                    font-extrabold mt-2  place-content-center">Set the time</label>
                    <input type="time" className="
                    p-2  border border-blue-400 rounded-md w-40 md:w-60
                    mt-2 ml-4" onInput={(e)=>setTime(e.target.value)}></input>
                </div>
            </div>
            <div className="flex justify-center">
            <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-8 text-3xl font-mono font-extrabold italic"
                >
                Confirm the Details
            </button>
            </div>
        </div>
    )
}

export default BookingScreen