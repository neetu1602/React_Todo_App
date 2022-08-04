import React from "react"
//import {Link} from 'react-router-dom';

const Header = () => {

    const headerStyle = {
        background: "#333",
        padding: "20px 0",
        lineHeight: "1.5em",
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#fff",
        textAlign: "center",
    }

    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

export default Header;
