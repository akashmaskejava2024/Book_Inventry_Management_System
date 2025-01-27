import logo from './logo.svg';
import './App.css';
import Home from './BookCRUD/Home';
import { Route, Routes } from 'react-router-dom';
import BookDetailsPage from './BookCRUD/BoookDetailsPage';
import AddNewBook from './BookCRUD/AddNewBook';

function App() {
  return (
    <>
    <Routes>

      <Route path='/' Component={Home}></Route>
      <Route path='/BookDetails' Component={BookDetailsPage}></Route>
      <Route path='/AddNewBook' Component={AddNewBook}></Route>
     </Routes>
    
    </>
  );
}

export default App;
