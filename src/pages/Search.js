import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from "../styles/pages/Search.module.css";

function Search() {
    const [movies, setMovies] = useState([])
    const paramas = useParams();
    async function Searchresult() {
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${paramas.value}`);
        setMovies(data)
    }
    useEffect(() => {
        Searchresult();
        // eslint-disable-next-line
    }, [paramas.value])
    return (
        <div className={classes.Container}>
            <h2>Search Results for {paramas.value}</h2>
            <div className={classes.Grid}>
                {movies && movies.map((data) => {
                    return (
                        <div key={data.show.id}>
                            {/* <Link to="/details" state={{from:data}}> */}
                                <img src={data.show.image ? data.show.image.medium : null} alt={data.show.name} />
                                <h3>{data.show.name}</h3>
                            {/* </Link> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search