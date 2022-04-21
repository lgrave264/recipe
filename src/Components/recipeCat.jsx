import React from 'react'

const recipeCat = ({recipe}) =>{
	return(
		<div className='firstBox'>
			{recipe.map((rec,i) => {
				const {title, servings, ingredients, instructions} = rec;
				var ingredients2 = ("")
				function space (ingredients){
					let temp = ingredients.split('|');
					ingredients2 = temp.join('\n');
					console.log(ingredients2)
				}
				space(ingredients);
				return(
					<article key={i}>
						<div className="recbox">
							<div className="rectitle">{title}</div>
							<hr className="hor"></hr>
							<div className="serv">{servings}</div>
							<div className="smallTitle">Ingredients</div>
							<pre className="ing">{ingredients2}</pre>
							<div className="smallTitle">Instructions</div>
							<div className="instruments">{instructions}</div>
						</div>
					</article>
				)
			})}
		</div>
	)
}

// const recipeCat = ({recipe}) => {
// 	console.log(typeof recipe)
// 	const [id, name] = recipe;
// 	function Recipe(){
// 		return(
// 			<div className='firstBox'>
// 				<article key={id}>
// 					<div>
// 						{name}
// 					</div>
// 				</article>
// 			</div>
// 		)
// 	}

//     return(
// 		Recipe()
// 	)
// }

export default recipeCat
