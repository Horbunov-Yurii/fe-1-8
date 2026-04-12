import style from "./GameList.module.css"
import game from "../../game.json"
import { GameItem } from "../GameItem/GameItem"


function GameList() {
    return (
        <ul className={style.list}>
            {game.map(({ id, images, title, developer, year, platform, rating, isOnline, time: { start, end } }) => {
                return (
                    // <li key={id}>
                    //     <img src={images} alt={title} />
                    //     <h1>{title}</h1>
                    //     <h3>{developer}</h3>
                    //     <h4>{year}</h4>
                    //     <p>{platform}</p>
                    //     <p>{rating}</p>
                    //     <p>{isOnline ? "true" : "false"}</p>
                    //     <p>{start}</p>
                    //     <p>{end}</p>
                    // </li>
                    <GameItem
                        key={id}
                        images={images}
                        title={title}
                        developer={developer}
                        year={year}
                        platform={platform}
                        rating={rating}
                        isOnline={isOnline}
                        start={start}
                        end={end}
                    />
                )
            })}
        </ul>
    )
}

export default GameList