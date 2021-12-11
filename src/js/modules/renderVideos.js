import { getTriends } from "./services";

const filmDay=document.querySelector('.film-week')


const firstRender = (item)=>{
	console.log('data:',item)
	filmDay.innerHTML=`
	 <div class="container film-week__container" data-rating=${item.vote_average}>
                <div class="film-week__poster-wrapper">
                    <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path}" alt="постер ${item.title||item.name}">
                    <p class="film-week__title_origin">${item.original_title || item.original_name}</p>
                </div>
                <h2 class="film-week__title">${item.title || item.name}</h2>
                <a  class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M" aria-label="смотреть трейлер"></a>
            </div>`
}

export const renderVideo=async()=>{
	const data=await getTriends();

	firstRender(data.results[0])
}

