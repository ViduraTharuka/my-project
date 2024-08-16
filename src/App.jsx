
import HomeScreen from '../src/screens/HomeScreen'
import BookingScreen from '../src/screens/BookingScreen'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route  path='/' element={<HomeScreen/>}/>
      <Route path='/booking' element= {<BookingScreen/>}/>
    </Routes>
  )
}

export default App
