import { scrollHandler } from "./js/Andyeeee.js";
console.log(scrollHandler);
// import { navbar } from '../compoment/aaaa.js'
window.addEventListener('scroll', scrollHandler);
/*這裡或是指定html的script擇一打 */



import nav from "./compoment/nav.js";
import Resultnav from './compoment/Resultnav.js'
import footer from './compoment/footer.js'
// 在這裡使用 `nav` 函數
nav();
Resultnav();
footer();

