import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Menu() {
    return (

        <nav>
            <Link to="/">Home</Link>|{" "}
            <Link to="/relatorio">Relatorios</Link>|{" "}
            <Link to="/upload">upload</Link>|{" "}
        </nav>

    )
}

export default Menu