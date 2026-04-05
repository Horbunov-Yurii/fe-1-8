import { IoMdTime } from "react-icons/io";
import { CiPizza } from "react-icons/ci";
import { MdOutlineLunchDining, MdDriveFileRenameOutline } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";

function RecipeItem({name, time, servings, calories, difficulty, image}) {
    return (
        <li key={name}>
                <p><MdDriveFileRenameOutline />{name}</p>
                <p><IoMdTime />{time}</p>
                <p><CiPizza />{servings}</p>
                <p><MdOutlineLunchDining />{calories}</p>
                <p><GiNetworkBars />{difficulty}</p>
                <img src={image} alt={name} width={300} />
              </li>
    )
}

export default RecipeItem