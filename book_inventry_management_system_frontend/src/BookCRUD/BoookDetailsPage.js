import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { updatebook } from "../ActionCreator/BookActionCreator";
import Navbar from "../NavBar/NavBar";

const BookDetailsPage = () => {
    const location = useLocation();
    const initialBook = location.state;
    const [book, setBook] = useState(initialBook);

    const categories = useSelector(state => state.category);
    // console.log(categories);

    const [showImage, setShowImage] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (book?.imgUrl) {
            setShowImage(true);
        }
    }, [book]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        const sanitizedValue = name === "auther" ? value.replace(/[^a-zA-Z\s]/g, '') : value;

        setBook(
            prevState => (
                {
                    ...prevState,
                    [name]: sanitizedValue
                }
            )
        );
    }

    const handleChangeInCategory = (e) => {

        const categoryId = e.target.value;
        setBook(
            prevState =>
            (
                {
                    ...prevState,
                    category_id: categoryId,
                    category: categories.find(category => category.id === categoryId) // Find the category 

                }
            )
        )
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedBook = {
            ...book,
            category_id: book.category ? book.category.id : book.category_id, // Make sure to use category_id
            category: undefined, // Remove the category object before sending it to the API
        };

        updatebook(updatedBook, dispatch, navigate);

    }

    return (
        <>
            <Navbar></Navbar>


            <div className="container my-5">
                <div className="row g-4">
                    {showImage && (
                        <div id="image" className="col-12 col-lg-6 d-flex p-5 justify-content-center">
                            <img
                                className="img-fluid rounded shadow-lg mt-5"
                                src={book.imgUrl}
                                alt={book.name}
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                    <div className="col-12 col-lg-6">
                        <div className="card p-4 shadow-sm">
                            {
                                book.name && <h3 className="mb-4 text-center">{book.name}</h3>
                            }
                            <form onSubmit={handleUpdate}>
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label">Book Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        name="name"
                                        value={book.name}
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
                                        value={book.auther}
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
                                        value={book.pageCount}
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
                                        value={book.publishedDate}
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
                                        value={book.publisher}
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
                                        value={book.overView}
                                        placeholder="Enter Overview of the Book"
                                        rows="4"
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edition" className="form-label">Edition</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edition"
                                        name="edition"
                                        value={book.edition}
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
                                        value={book.language}
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
                                        value={book.price}
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
                                        value={book.imgUrl}
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
                                        value={!book.category_id && book.category.id || book.category_id}  // Use category_id to control the value
                                        onChange={handleChangeInCategory}
                                        required
                                    >

                                        {!book.category_id && !book.category && (
                                            <option value="" disabled>Select a category</option>
                                        )
                                        }



                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    className="btn btn-warning  mt-4"
                                   
                                >
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetailsPage;