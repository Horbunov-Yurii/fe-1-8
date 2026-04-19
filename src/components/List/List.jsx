import movies from "../../movies.json"
import MovieList from "./LIst.style";
import MovieItem from "../MovieItem/MovieItem";



function List() {

  console.log(movies);
    return (
       <MovieList>
        {movies.map (({id, title, year, genre, rating, durationMinutes, isClassic}) => {
            return ( 
                <MovieItem key={id} title={title} year={year} rating ={rating} genre={genre} durationMinutes={durationMinutes} isClassic={isClassic}/>
            )
        })}
       </MovieList>
    )
}

export default List