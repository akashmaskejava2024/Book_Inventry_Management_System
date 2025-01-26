import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between">
                <Link className="navbar-brand" to={'/'}>
                    Book Inventry Management System
                </Link>


                <Link className="nav-link active" aria-current="page" to={'/AddNewBook'}>
                    <button className="btn btn-outline-success" type="submit" >
                        AddNewBook
                    </button>

                </Link>



            </div>
        </nav>
    );
};

export default Navbar;