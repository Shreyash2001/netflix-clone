import React, { useEffect, useState } from 'react'
import "./searchMovies.css"
import axios from "./axios";
import { Link } from 'react-router-dom';


function SearchMovies({ movies }) {
    const [search, setSearch] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${movies}&language=en-US&query=${search}&page=1&include_adult=true`);
             setSearchMovies(request.data.results);
            return request
        }
        fetchData();
        return () => {
            setSearchMovies([]);
        }
       }, [search]);

    return (
        <div>
             <div className="search">
               <input type="text" placeholder="Search Movies" onChange={(event) => setSearch(event.target.value)} />
                
                {searchMovies.map(searchMovie => (
                 <div key={searchMovie.id} className="search__title">
                 {/* <Avatar src={`https://image.tmdb.org/t/p/original/${searchMovie.poster_path}`} /> */}
                 <Link to={`/movies/${searchMovie.id}`}>{searchMovie.original_title}</Link>
                 <p style={{fontSize:"12px", fontWeight:"300"}}>:{" "}{searchMovie.release_date} <span>{searchMovie.original_language}</span></p>
                 </div>
            ))}
            
            </div>
            
        </div>
    )
}

export default SearchMovies
