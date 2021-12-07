const openMenu=(nav,active)=>{
	nav.classList.add(active)
}
const closeMenu=(nav,active)=>{
	nav.classList.remove(active)
}


export const slideMenu=({openBtn,menu,classActivemenu,closeTrigger})=>{
	const navigationClose=document.querySelectorAll(closeTrigger)
	
	openBtn.addEventListener('click',()=>{
		openMenu(menu,classActivemenu)
	})

	navigationClose.forEach(item=>{
		item.addEventListener('click',()=>{
			closeMenu(menu,classActivemenu)
		})
	})

}