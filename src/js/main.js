/*  import "core-js/stable";
import "regenerator-runtime/runtime";  */
//navigation

import { slideMenu } from "./modules/menu"
import { renderVideo} from './modules/renderVideos'


const burgerBtn=document.querySelector('.header__burger-btn');
const menu=document.querySelector('.navigation')


slideMenu({
	openBtn: burgerBtn,
	menu: menu,
	classActivemenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close'
})

renderVideo();

/* 
burgerBtn,menu,'navigation_active','.navigation__link, .navigation__close'
*/

//popup()



//# sourceMappingURL=main.js.map
