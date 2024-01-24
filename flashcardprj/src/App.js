import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/main'
import Landingpage from './Components/landingpage/landingpage';
import Timer from './Components/timerpage/timer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/timer' element={<Timer />}></Route>
   
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
