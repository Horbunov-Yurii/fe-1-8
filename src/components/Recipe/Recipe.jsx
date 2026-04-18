import RecipeItem from "../RecipeItem/RecipeItem";

function Recipe({recipe}) {

  
    return (
        <ul>{recipe.map((item)=>{
            return(
              <RecipeItem key={item.name} {...item}/>
            )
          })}</ul>
    )
}

export default Recipe