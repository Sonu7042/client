import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>

        </div>
      </Router>
    </>
  )
}

export default App
