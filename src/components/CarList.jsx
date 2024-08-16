import CarCard from "./CarCard"
import black_mazda from '../assets/black_mazda.png'
import yellow_alto from '../assets/yellow_alto.png'
import red_alto from '../assets/red_alto.png'
import white_kdh from '../assets/white_kdh.png'
import ash_suv from '../assets/ash_suv.png'
import blue_vitz from '../assets/blue_vitz.png'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react"

function CarList () {

    const car_data = [
        {
            model : 'Mazda 2024',
            no_of_seats : '5 (with driver)',
            price : '5000 LKR per day',
            reg_no : 'CAB 0001',
            img_source : `${black_mazda}`
        },
        {
            model : 'Mazda 2024',
            no_of_seats : '5 (with driver)',
            price : '5000 LKR per day',
            reg_no : 'CAB 0001',
            img_source : `${red_alto}`
            },
        {
            model : 'Mazda 2024',
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


    return(
        <div className="m-2 bg-black rounded-md">
            <p className='p-4 text-center font-bold text-white text-2xl font-mono italic'>
                We have the perfect ride for every occasion
            </p>
            
            <Slider {...settings} className="">
                    {car_data.map((car)=>
                        <CarCard  className='flex justify-center align-bottom'
                            imgSrc={car.img_source}
                            model={car.model}
                            noOfSeats={car.no_of_seats}
                            price={car.price}
                            regNo={car.reg_no}
                        />)}
            </Slider>
        </div>
    )
}

export default CarList