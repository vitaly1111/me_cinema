const listCard=document.querySelector('.other-films__list')

export  const renderCards= (data) => {
	listCard.textContent="";

	const cards=data.map((item,index)=>{
		const card=document.createElement('li')
		card.classList.add('other-films__item')
		const link=document.createElement('a');
		link.className='other-films__link';
	
			link.dataset.rating=item.vote_average?
			item.vote_average:
			'-'
		
		
		const img=document.createElement('img');
		img.className='other-films__img';
		img.alt=`Постер ${item.mame || item.title}`;
		img.src=`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`
		link.append(img)
		card.append(link)

		return card;
	})
	listCard.append(...cards)
	console.log(listCard)
}



