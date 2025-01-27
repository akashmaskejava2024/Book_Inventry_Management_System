import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewbookActionCreator } from "../ActionCreator/BookActionCreator";
import Navbar from "../NavBar/NavBar";


const AddNewBook = () => {
    const categories = useSelector(state => state.category);
    console.log(categories);

    const [showImage, setShowImage] = useState(false);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validate = (name, value) => {

    }

    const validateAutherName = (value) =>{
        return value.replace(/[^a-zA-Z\s]/g, '');

    }


    const [book, setBook] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;

     
          const sanitizedValue = name === "auther" ?   value.replace(/[^a-zA-Z\s]/g, '') : value;
     
        

        setBook(
            prevState => (
                {
                    ...prevState,
                    [name]: sanitizedValue
                }
            )
        );
        if (book.imgUrl) {
            setShowImage(true);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        addNewbookActionCreator(book, dispatch, navigate);

    }



    return (
        <>

            <Navbar></Navbar>
            <div className="container my-5">
                <div className="row g-4">
                    {showImage && (
                        <div id="image" className="col-12 col-lg-6 d-flex justify-content-center">
                            <img
                                className="img-fluid rounded shadow-lg"
                                src={book.imgUrl}
                                alt={book.name}
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="col-12 col-lg-6">
                            <div className="card p-4 shadow-sm">
                                {
                                    book.name && <h3 className="mb-4 text-center">{book.name}</h3>
                                }
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label">Book Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        name="name"
                                        placeholder="Enter Author Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label">Author</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        name="auther"
                                        value={book.auther || ''}
                                        placeholder="Enter Author Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pageCount" className="form-label">Number of Pages</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="pageCount"
                                        name="pageCount"
                                        placeholder="Enter Number of Pages"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="publishedDate" className="form-label">Published Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="publishedDate"
                                        name="publishedDate"
                                        placeholder="Enter Published Date"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="publisher" className="form-label">Publisher</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="publisher"
                                        name="publisher"
                                        placeholder="Enter Publisher Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="overview" className="form-label">Overview</label>
                                    <textarea
                                        className="form-control"
                                        id="overview"
                                        name="overview"
                                        placeholder="Enter Overview of the Book"
                                        rows="4"
                                        onChange={handleChange}

                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edition" className="form-label">Edition</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edition"
                                        name="edition"
                                        placeholder="Enter Edition"
                                        onChange={handleChange}
                                        required

                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="language" className="form-label">Language</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="language"
                                        name="language"
                                        placeholder="Enter Language"
                                        onChange={handleChange}
                                        required

                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        placeholder="Enter Book Price"
                                        onChange={handleChange}
                                        required

                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl" className="form-label">Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="imgUrl"
                                        name="imgUrl"
                                        placeholder="Enter Image URL"
                                        onChange={handleChange}
                                        required

                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select
                                        className="form-control"
                                        id="category"
                                        name="category_id"
                                        onChange={handleChange}
                                        required
                                    >


                                        <option value="" >Select a category</option>




                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    className="btn btn-warning w-30  mt-4"
                                    // onClick={handleSubmit}
                                >
                                    Add New Book
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}
export default AddNewBook;