import React from"react";


const RecipeInfo = ({recipes, handleDelete}) => {
    
  const RecipeFrame = recipes.map((recipe, index) => (
     <tr key={index}> 
       <td>{recipe.name}</td>
       <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt="Recipe"/>
      </td>
       <td className="content_td">
         <p>{recipe.ingredients}</p>
       </td>
       <td className="content_td">
         <p>{recipe.preparation}</p>
       </td>
       <td>
         <button name="delete" onClick={() => handleDelete(recipe.name)}>
           Delete
         </button>
       </td>
      </tr>
     ))
  return RecipeFrame;
}

    


 export default RecipeInfo;
  