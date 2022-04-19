import {React, useState, useEffect} from 'react'
import RecipeCat from './recipeCat'

const Content = () => {
	const [home, setHome] = useState(true);
	const [about, setAbout] = useState(false);
	const [skill, setSkill] = useState(false);
	const [recipe,setRecipe] =useState([]);
	// var count = 0;
	const axios = require('axios').default;
	const [category, setCategory] = useState();

	function getRec(e){
		setCategory(document.getElementById("answer").value)
		e.preventDefault();
		window.location.reload(false);
		const options = {
			method: 'GET',
			url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
			params: {query: category},
			headers: {
				'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
				'X-RapidAPI-Key': '7a07494cf3mshf921222e65c9451p1b404ajsn45f1282f6be4'
			}
		};

		axios.request(options).then(function (response) {
			setRecipe(response.data)
			console.log(recipe);
		}).catch(function (error) {
			console.error(error);
		});
	}
	// useEffect(()=>{
	// 	getRec();
	// },[])

	if(home === true){
		return(
			<div id='bigdiv'>
				<form id="catlist">
					<input className="cats" id="answer" placeholder="Search Recipe..." type="text" />
					<button type="button" onClick={(e) => {getRec(e)}}>Submit</button>
				</form>
				<RecipeCat recipe={recipe}/>
			</div>
		)
	}
}


export default Content