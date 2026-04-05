import RecipeItem from "../RecipeItem/RecipeItem";

function Recipe({recipies}) {
    return (
        <ul>{recipies.map((recipe)=>{
            return(
              // <li key={name}>
              //   <p><MdDriveFileRenameOutline />{name}</p>
              //   <p><IoMdTime />{time}</p>
              //   <p><CiPizza />{servings}</p>
              //   <p><MdOutlineLunchDining />{calories}</p>
              //   <p><GiNetworkBars />{difficulty}</p>
              //   <img src={image} alt={name} width={300} />
              // </li>
              <RecipeItem key={recipe.name} {...recipe}/>
            )
          })}</ul>
    )
}

export default Recipe