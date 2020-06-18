import _ from 'lodash'
//import './reset.css'
import Dog from './dog.jpg'
import Index from './first.json'
import {file,helpers} from '../globals.js'
function component(){
	let arr = [1,1,1,4,5,6,7];
	console.log([...new Set(arr)])
	var element = document.createElement('div');

	 // Lodash, now imported by this script
    element.innerHTML =join(['世界你好', 'webpack'], ' ');
	element.classList.add('hello');
	var Img = new Image();
	Img.src=Dog;
	console.log(Index)
	element.appendChild(Img);
    return element;
}
 document.body.appendChild(component());