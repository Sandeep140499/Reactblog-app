
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';

function App() {
  return (


    
    <div >
    <h1 className = "Heading"> <span className = "rotate">The</span> siren </h1>
    <Nav />
    <Routes>

    <Route path='/' element={<Home/>} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/food' element={<Food />} />

    </Routes>




    
    </div>
  );
}

export default App;
