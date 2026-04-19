import {Item, Caption, Text, List, Status} from "./Movie.style"


function MovieItem({id, title, year, genre, rating, durationMinutes, isClassic}){
  return(
     <Item key={id}>
                 <Caption>{title}</Caption>
                 <Text>{year}</Text>
                 <List>{genre.map((item,index)=> {
                    return (
                        <li key={index}>
                            <p>{item}</p>
                        </li>
                    )
                 })}</List>
                 <Text>{rating}</Text>
                 <Text>{durationMinutes}</Text>
                 <Status $classic={isClassic}>{isClassic? "classic": "nonClassic"}</Status>
                </Item>
  )
}

export default MovieItem