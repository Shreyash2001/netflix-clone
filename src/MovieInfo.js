import axios from './axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from "./Nav"
import "./MovieInfo.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

function MovieInfo({ fetchApi }) {
    const {movieId} = useParams();
    const [showMovie, setShowMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${fetchApi}&language=en-US`);
              setShowMovie(request.data);
            
            return request
        }
        fetchData();
        return () => {
            setShowMovie([]);
        }
       }, [movieId]);

       const opts = {
        height: "370",
        width: "100%",
        playVars: {
            autoplay: 1
        }
    };
        
    const handleClick = (showMovie) => {
        
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(showMovie?.original_title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch(error => console.log(error));
        }
    }

    return (
        <>
        <div className="movieInfo__top">
      <Link to="/">  <img className="movieInfo__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo" /></Link>
        <img className="movieInfo__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        </div>
        <div className="movieInfo">
        
            <div className="movieInfo__picture">
                <img src={`https://image.tmdb.org/t/p/original/${showMovie.poster_path}`} alt="" />
            </div>
            <div className="movieInfo__description">
                <h3>{showMovie.original_title}</h3>
                <p className="tagline">({showMovie.tagline})</p>
                <h4>Overview:</h4>
                <p className="overview">{showMovie.overview}</p>
                <div className="movieInfo__basicInfo">
                    <p>language: {showMovie.original_language}</p>
                    <p>Release Date: {showMovie.release_date}</p>
                    <p>{showMovie.runtime} mins</p>
                </div>
                <div className="movieInfo__imdb">
                <h1>Imdb: {showMovie.vote_average}⭐</h1>
                <h1>People Voted: {showMovie.vote_count}</h1>
                <div onClick={() => handleClick(showMovie)} className="player">
                <h2>Play Trailer</h2>
                <PlayCircleFilledWhiteIcon fontSize="large"/>
                </div>
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
        </>
    )
}

export default MovieInfo
