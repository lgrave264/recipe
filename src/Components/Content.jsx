import {React, useState, useEffect} from 'react'
import RecipeCat from './recipeCat'

const Content = () => {
	const [home] = useState(true);
	const [recipe,setRecipe] =useState([]);
	// var count = 0;
	const axios = require('axios').default;
	const [category,setCategory] = useState('Italian Pasta');
	const getRec = () => {
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
			console.log(response.data)
			setRecipe(response.data)
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
				<ul id="catlist">
					<li><button className='genre'onClick={()=>{setCategory('Italian Pasta');}}>Italy</button></li>
					<li><button className='genre'onClick={()=>{setCategory('French');}}>France</button></li>
					<li><button className='genre'onClick={()=>{setCategory('German');}}>Germany</button></li>
				</ul>
				<RecipeCat recipe={recipe}/>
			</div>
		)
	}
}


export default Content