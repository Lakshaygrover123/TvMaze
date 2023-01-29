import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import classes from "../styles/components/Header.module.css";

function Header() {
    const [value, setvalue] = useState();
    console.log(value)
    return (
        <main className={classes.Container}>
            <div className={classes.logo}>
                <h1><NavLink to="/" className={classes.link}>Tv Maze </NavLink></h1>
            </div>
            <div className={classes.SearchModule}>
                <input type="text" value={value} onChange={(e) => setvalue(e.target.value)} placeholder="Search Your Movie Here" />
                <Link to={`/search/${value}`}>
                    <button onClick={()=>setvalue('')}>Search</button>
                </Link>
            </div>
        </main>
    )
}

export default Header