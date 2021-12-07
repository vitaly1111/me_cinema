//navigation
import { slideMenu } from "./modules/menu"

const burgerBtn=document.querySelector('.header__burger-btn');
const menu=document.querySelector('.navigation')


slideMenu({
	openBtn: burgerBtn,
	menu: menu,
	classActivemenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close'
})

/* 
burgerBtn,menu,'navigation_active','.navigation__link, .navigation__close'
*/

//popup()



//# sourceMappingURL=main.js.map
