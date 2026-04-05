import RecipeItem from "../RecipeItem/RecipeItem";

function Recipe({recipies}) {
    return (
        <ul>{recipies.map((recipe)=>{
            return(
              <RecipeItem key={recipe.name} {...recipe}/>
            )
          })}</ul>
    )
}

export default Recipe