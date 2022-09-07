import React, { useEffect, useState } from "react";
import Card from "./Card";
let API_KEY = "&api_key=8a19be0600db8b8ee1c163ea59b6798d"
let BASE_URL = "https://api.themoviedb.org/3"
let Url = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedia"]

const Main = () => {
    const [movieData, setMovieData] = useState([])
    const [url_set, setUrl] = useState(Url)
    const [search, setSearch] = useState()
    useEffect(() => {

        fetch(url_set).then(res => res.json()).then(data => {
            // console.log(data.results)
            setMovieData(data.results)
        })
    }, [url_set])


    const getData = (movieType) => {
        if (movieType == "Popular") {
            Url = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY
        }
        if (movieType == "Theatre") {
            Url = BASE_URL + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" + API_KEY
        }
        if (movieType == "Kids") {
            Url = BASE_URL + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc " + API_KEY
        }
        if (movieType == "Drama") {
            Url = BASE_URL + "/discover/movie?with_genres=18&primary_release_year=2014" + API_KEY
        }   
        if (movieType == "Comedia") {
            Url = BASE_URL + " /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" + API_KEY
        }
        setUrl(Url)
    }

    const    searchMovie= (evt)=>{
        if(evt.key=="Enter"){
            Url = BASE_URL+"/search/movie?api_key=8a19be0600db8b8ee1c163ea59b6798d&query="+search
            setUrl(Url)
            setSearch(" ")
        }
    }

    return (
        <>
            <div className="main__header">
                <nav>
                    <ul>
                        {
                            arr.map((value) => {
                                return (
                                    <li><a href="#" name={value} onClick={(e) => {getData(e.target.name) }}> {value}</a></li>

                                )
                            })
                        }
                    </ul>
                </nav>
                <form>
                    <div className="main__search">
                        <input type="text" placeholder="Enter your movie" 
                        className="movie__input" onChange={(e) =>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie}>
                        </input>
                        <button>
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="main__conteiner">
                {
                    (movieData.length == 0) ? <p className="notFound">Not Found</p> : movieData.map((res, pos) => {
                        return (
                            <Card info={res} key={pos} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Main