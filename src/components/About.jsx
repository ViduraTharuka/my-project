
import vehicle from '../assets/blue_vitz.png'
import TextCard from './TextCard'

function About (){
    return(
        <div className='' id='about'>
            <div className='md:flex justify-between md:mt-4 md:mr-2'>
                <div>
                    <img src={vehicle} style={{width:1000}}></img>
                </div>
                <div className='shadow-md shadow-stone-600 font-mono m-2 md:inline pt-4 rounded-md'>
                    <p className='p-4 text-center md:text-justify
                    font-bold'>
                        Welcome to our Car Service, your premier destination
                        for reliable and efficient car booking services. At our car service,
                        we understand the importance of
                    </p>
                    <div className='place-content-center
                    place-items-center'>
                        <TextCard text='On Time Working' bgColor='bg-white' textColor='text-blue-400'/>
                        <TextCard text='Comfortable Transportation'  bgColor='bg-white' textColor='text-blue-400'/>
                        <TextCard text='Safety Ride'  bgColor='bg-white' textColor='text-blue-400'/>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}

export default About