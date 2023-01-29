import React, { useEffect,useState } from 'react'
import Genre from '../component/Genre'
import axios from "axios";
import classes from "../styles/pages/Home.module.css";

function Home() {
    const [values, setvalue] = useState([])
    async function data() {
        const { data } = await axios.get('https://api.tvmaze.com/shows');
        setvalue(data)
    }
    useEffect(() => {
        data()
    }, [])
    return (
        <main className={classes.Container}>
            <div>
                <h1>Action</h1>
                <Genre data={values.slice(0, 20)} />
            </div>
            <div>
                <h1>Drama</h1>
                <Genre data={values.slice(20, 40)} />
            </div>
            <div>
                <h1>Comedy</h1>
                <Genre data={values.slice(40, 60)} />
            </div>
        </main>
    )
}

export default Home