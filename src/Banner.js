import axios from './axios';
import React,{useEffect,useState} from 'react'
import './Banner.css'
import requests from './request';

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
                const request=await axios.get(requests.fetchNetflixOriginals)
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length-1 )
                    ]
                )
                console.log(request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1 )
                ])
                return request;
        }
        
        fetchData();
    }, [])

    //this is the function to truncata the string and takes string and the number of lines after which we are to truncate 
    function truncate(str, n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button button">Play</button>
                    <button className="banner_button button">My List</button>
                </div>
                <h1 className="baner_description">
                    {truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
