import logo from './logo.svg';
import './App.css';
import Home from './BookCRUD/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>

      <Route path='/' Component={Home}></Route>
      
    </Routes>
    
    </>
  );
}

export default App;
