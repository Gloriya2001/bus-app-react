import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div>

      <BrowserRouter>
      
      <Routes>

<Route path='/' element={<Signin/>}/>
<Route path='/signup' element={<Signup/>}/>


      </Routes>
      
      </BrowserRouter>
    



    </div>
  );
}

export default App;
