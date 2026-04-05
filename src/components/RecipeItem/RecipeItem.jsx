import { IoMdTime } from "react-icons/io";
import { CiPizza } from "react-icons/ci";
import { MdOutlineLunchDining, MdDriveFileRenameOutline } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import RecipeInfo from "../RecipeInfo/RecipeInfo";

function RecipeItem({name, time, servings, calories, difficulty, image}) {
    return (
        <li key={name}>
                <RecipeInfo text={name} icon={<MdDriveFileRenameOutline/>}/>
                <RecipeInfo text={time} icon={<IoMdTime/>}/>
                <RecipeInfo text={servings} icon={<CiPizza/>}/>
                <RecipeInfo text={calories} icon={<MdOutlineLunchDining/>}/>
                <RecipeInfo text={difficulty} icon={<GiNetworkBars/>}/>
                <img src={image} alt={name} width={300} />
              </li>
    )
}

export default RecipeItem