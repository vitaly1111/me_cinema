const API_KEY='eba8aefbf86dff7f6a06125214301d99'
const BASE_URL='https://api.themoviedb.org/3/';
const LANG=`&language=ru-RU`;

/* https://api.themoviedb.org/3/movie/550?api_key=eba8aefbf86dff7f6a06125214301d99 */

const getData = async(url)=>{
	return await fetch(url)
	.then(responce=>{
		if(responce.ok){
			return responce.json();
		}
		throw `Что то пошло не так ${responce.status}`
	})
	
	.catch(err=>console.error(err))
}

export const getTriends=async (type='all',period="week",page=1)=>{
	const url=`${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`;
	return await getData(url);
	//console.log(data)
}

