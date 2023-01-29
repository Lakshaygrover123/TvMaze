import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import classes from "../styles/pages/Details.module.css";

function Details() {
  const [movie, setMovie] = useState({})
  const location = useLocation();
  useEffect(() => {
    setMovie(location.state.from)
  }, [location])

  return (
    <main className={classes.Container}>
      {movie.image ? (
        <>
          <section className={classes.Imgsection}>
            <img src={movie.image.medium} alt={movie.name} />
          </section>
          <section className={classes.Textsection}>
            <h2>{movie.name}</h2>
            <h4>Language-{movie.language}</h4>
            {movie.genres.map((val) => {
              return <span key={val.id}>{val},</span>
            })}
            <span> | {movie.rating.average}</span>
            <h5>Time Duration-{movie.weight} mins</h5>
            {/* Contained some tags incoming+++++++++++++++ */}
            <p dangerouslySetInnerHTML={{ __html: movie.summary }}/>
          </section>
        </>
      ) : (
        <h1>Loading..</h1>
      )}
    </main>
  )
}

export default Details