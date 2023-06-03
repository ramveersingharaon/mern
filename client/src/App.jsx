import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element ={Home()} />
      <Route path='/register' element ={Register()} />
      <Route path='/login' element ={Login()} />
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
