import {React, useState, useEffect} from 'react'
import RecipeCat from './recipeCat'

const Content = () => {
	const [home, setHome] = useState(true);
	const [about, setAbout] = useState(false);
	const [skill, setSkill] = useState(false);
	const [recipe,setRecipe] =useState([]);
	// var count = 0;
	const axios = require('axios').default;
	const [category, setCategory] = useState('pizza');

	function getRec(e){
		// e.preventDefault();
		const options = {
			method: 'GET',
			url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
			params: {query: document.getElementById("answer").value},
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
	useEffect(()=>{
		getRec();
	},[category])

	if(home === true){
		return(
			<div id='bigdiv'>
				<form id="catlist" onSubmit={(e) => {getRec(e)}}>
					<input className="cats" id="answer" placeholder="Search Recipe..." type="text" />
					<button type="submit">Submit</button>
				</form>
				<RecipeCat recipe={recipe}/>
			</div>
		)
	}
}


export default Content