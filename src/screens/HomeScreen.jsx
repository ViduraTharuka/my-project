import { useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar"
import About from "../components/About";
import TextCard from "../components/TextCard";
import CarList from "../components/CarList";
import ContactUs from "../components/ContactUs";


function HomeScreen () {
    return(
        <div className="">
            <NavBar/>
            <About/>
            <CarList/>
            <ContactUs/>
        </div>
    )
}

export default HomeScreen