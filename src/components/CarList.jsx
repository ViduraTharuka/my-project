import CarCard from "./CarCard"
import black_mazda from '../assets/black_mazda.png'
import yellow_alto from '../assets/yellow_alto.png'
import red_alto from '../assets/red_alto.png'
import white_kdh from '../assets/white_kdh.png'
import ash_suv from '../assets/ash_suv.png'
import blue_vitz from '../assets/blue_vitz.png'
import Slider from "react-slick"
import eis from '../assets/nissan-hatchback-1.2.png';
import wingroad from '../assets/nissan-sedan-wingroad-1.0.png';
import xtrail from '../assets/nissan-suv-xtrail-1.1.png'
import peugeot307 from '../assets/peugeot-hatchback-1.0.png'
import v8 from '../assets/toyota-suv-montero-1.0.png'
import townace from '../assets/toyota-family-townace-1.0.png'
import belta from '../assets/toyota-sedan-belta-1.0.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react"
import ImageModel from "./Model"
import eis1 from '../assets/nissan-hatchback-1.0.png';
import eis3 from '../assets/nissan-hatchback-1.3.png';
import wingroad1 from '../assets/nissan-sedan-wingroad-1.1.png'
import xtrail1 from '../assets/nissan-suv-xtrail-1.0.png'
import xtrai2 from '../assets/nissan-suv-xtrail-1.3.png'
import peugeot3071 from '../assets/peugeot-hatchback-1.1.png'
import townace1 from '../assets/toyota-family-townace-1.1.png'
import townace2 from '../assets/toyota-family-townace-1.3.png'
import belta1 from '../assets/toyota-sedan-belta-1.1.png'
import belta2 from '../assets/toyota-sedan-belta-1.2.png'

function CarList () {

    const car_data = [
        {
            model : 'Nissan eis',
            car_category : 'Hatchback',
            price : '5000 LKR per day',
            reg_no : 'CBB 9427',
            img_source : `${eis}`,
            images : [eis1,eis3]
        },
        {
            model : 'Nissan wingroad',
            car_category : 'Sedan',
            price : '5000 LKR per day',
            reg_no : 'KQ 6000',
            img_source : `${wingroad}`,
            images : [wingroad1]
            },
        {
            model : 'Nissan x-trail',
            car_category : 'SUV',
            price : '5000 LKR per day',
            reg_no : 'JA 8706',
            img_source : `${xtrail}`,
            images : [xtrail1,xtrai2]
        },
        {
            model : 'Toyota v8',
            car_category : 'SUV',
            price : '5000 LKR per day',
            reg_no : 'XXX ####',
            img_source : `${v8}`,
            images : [v8]
        },
        {
            model : 'Peugeot 307',
            car_category : 'Sedan',
            price : '5000 LKR per day',
            reg_no : 'GM 2802',
            img_source : `${peugeot307}`,
            images : [peugeot3071]
        },
        {
            model : 'Toyota Townace',
            car_category : 'Familly',
            price : '5000 LKR per day',
            reg_no : 'PE 2390',
            img_source : `${townace}`,
            images: [townace1, townace2]
        },
        {
            model : 'Toyota Belta',
            car_category : 'Sedan',
            price : '5000 LKR per day',
            reg_no : 'KM 7276',
            img_source : `${belta}`,
            images : [belta2, belta1]
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
        slidesToShow: 2,
        slidesToScroll: 2,
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
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleVehicleClick = (images) => {
        setIsModalOpen(true)
        setSelectedImages(images)


    }


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
                            category={car.car_category}
                            price={car.price}
                            regNo={car.reg_no}
                            onClick={() => handleVehicleClick(car.images)}
                        />)}
            </Slider>
            <ImageModel
            isOpen={isModalOpen}
            images={selectedImages}
            onClose={()=>setIsModalOpen(false)}/>
        </div>
    )
}

export default CarList