import { getTriends, getPopular, getTop } from "./services";

import { renderCards } from "./renderCards";

const title=document.querySelector('.other-films__title')
const filmWeek=document.querySelector('.film-week')

const getNav=document.querySelectorAll('.get-nav')

export const menuLink=()=>{
	getNav.forEach(nav=>{
		nav.addEventListener('click',e=>{
			const target=e.target.closest('.get-nav__link')
			if(target){
				e.preventDefault;
				filmWeek.style.display='none';
				title.textContent=target.textContent
				if (target.classList.contains('get-nav__link_popular-movies')){
					console.log('ok')
					getPopular('movie')
					.then(data=>renderCards(data.results))
				
				}
				if (target.classList.contains('get-nav__link_top-movies')){
					console.log('ok')
					getTop('movie')
					.then(data=>renderCards(data.results))
				
				}
				if (target.classList.contains('get-nav__link_popular-tv')){
					console.log('ok')
					getPopular('tv')
					.then(data=>renderCards(data.results))
				
				}
				if (target.classList.contains('get-nav__link_top-tv')){
					console.log('ok')
					getTop('tv')
					.then(data=>renderCards(data.results))
				
				}
				if (target.classList.contains('get-nav__link_triends')){
					console.log('ok')
					getTriends('day')
					.then(data=>renderCards(data.results))
				
				}
			}
		})
	})
}