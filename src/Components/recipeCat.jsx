import React from 'react'

const recipeCat = ({recipe}) =>{
	return(
		<div className='firstBox'>
			{recipe.map((rec,i) => {
				const {title, servings} = rec;
				return(
					<article key={i}>
						<div>
							{title}
							{servings}
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
