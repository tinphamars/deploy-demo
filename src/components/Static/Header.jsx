import React from 'react';
import {
    Link
} from "react-router-dom";

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">Chart</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Pagination</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">More load</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/detail">noe</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

};

export default Header;