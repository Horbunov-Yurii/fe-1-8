import style from "./GameItem.module.css"

export const GameItem = ({ id, images, title, developer, year, platform, rating, isOnline, start, end }) => {
    return (
        <li className={style.item} key={id}>
            <img className={style.img} src={images} alt={title} />
            <h2 className={style.title} >{title}</h2>
            <h3 className={style.developer} >{developer}</h3>
            <h4 className={style.year} >{year}</h4>
            <p className={style.platform} >{platform}</p>
            <p className={style.rating} >{rating}</p>
            <p className={style.online} >{isOnline ? "Онлайн" : "Офлайн"}</p>
            <p className={style.start} >{start}</p>
            <p className={style.start} >{end}</p>
        </li>
    )
}