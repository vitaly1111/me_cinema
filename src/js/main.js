/*  import "core-js/stable";
import "regenerator-runtime/runtime";  */
//navigation

import { slideMenu } from "./modules/menu"
import { renderVideo} from './modules/renderVideos'

import { menuLink } from "./modules/menuLincs";


const burgerBtn=document.querySelector('.header__burger-btn');
const menu=document.querySelector('.navigation')


slideMenu({
	openBtn: burgerBtn,
	menu: menu,
	classActivemenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close'
})

renderVideo();
menuLink();

/* 
burgerBtn,menu,'navigation_active','.navigation__link, .navigation__close'
*/

//popup()



//# sourceMappingURL=main.js.map
