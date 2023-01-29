import React from 'react'
import classes from "../styles/components/Genre.module.css";
import { Link } from 'react-router-dom';

function Genre({ data }) {
  return (
    <div className={classes.Conatiner}>
      {data.map((values) => {
        return (
          <div key={values.id}>
            <Link to="/details" state={{from:values}}>
              <img src={values.image.medium} alt={values.name} className={classes.img} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Genre