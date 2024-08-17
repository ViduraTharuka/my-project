
import HomeScreen from '../src/screens/HomeScreen'
import BookingScreen from '../src/screens/BookingScreen'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router basename="/my-project">
      <Routes>
        <Route  path='/' element={<HomeScreen/>}/>
        <Route path='/booking' element= {<BookingScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App
