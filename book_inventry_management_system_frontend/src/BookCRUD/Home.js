import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getAllBooksActionCreator } from "../ActionCreator/BookActionCreator";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getAllBooksActionCreator(dispatch);
    }, [dispatch]);

    const books = useSelector(state => state.books);
    console.log(books);

    const handleDeleteForm = (e) => {
        e.preventDefault();
        const bookId = e.target.elements.id.value;
        console.log(e.target.elements.id.value);
        deleteBook(bookId, dispatch);
    };

    const handleUpdateForm = (e) => {
        e.preventDefault();
        console.log(e.target.elements.id.value);
        const bookId = e.target.elements.id.value;
        const bookToUpdate = books.find( book => book.id == parseInt(bookId));

        if(bookToUpdate){
            navigate('/BookDetails', {state : bookToUpdate});

        } else {
            alert('Book not found');

        }

        // Add your update logic here (navigate to update page or show form, etc.)
    };

  
    
    return (
        
        <>

<Navbar></Navbar>

            <div className="container my-4">
                <h2 className="text-center mb-4">Book Inventory</h2>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Image</th>
                            <th scope="col" className="col-sm-2">Book Name</th>
                            <th scope="col" className="col-sm-3">Author</th>
                            <th scope="col">Language</th>
                            <th scope="col">Price</th>
                            <th scope="col" colSpan="2" className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img
                                        src={book.imgUrl}
                                        style={{ height: "100px", width: "80px", objectFit: "cover" }}
                                        alt={book.name}
                                    />
                                </td>
                                <td>{book.name}</td>
                                <td>{book.auther}</td>
                                <td>{book.language}</td>
                                <td>${book.price}</td>
                                <td className="text-center">
                                    <form onSubmit={handleUpdateForm}>
                                        <input type="number" name="id" value={book.id} hidden="true" />
                                        <button type="submit" className="btn btn-warning btn-sm">
                                            Update
                                        </button>
                                    </form>
                                </td>
                                <td className="text-center">
                                    <form onSubmit={handleDeleteForm}>
                                        <input type="number" name="id" value={book.id} hidden="true" />
                                        <button type="submit" className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Home;