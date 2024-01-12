import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
