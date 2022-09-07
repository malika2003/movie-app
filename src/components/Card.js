import React from "react";


const Card = (movie) => {
    console.log(movie.info)
    let img__path =  "https://image.tmdb.org/t/p/w500/"
    return (
        <>
            <div className="card__movie">
                <img src={img__path+movie.info.poster_path} className=" card___poster"/>
                <div className="card__datails">
                    <div className="card__box">
                        <h4 className="card___title">{movie.info.title}</h4>
                        <p className="card__rating">{movie.info.vote_average}</p>
                    </div>
                    <div className="card__overview">
                        <h4 >{movie.info.overview}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card