import Lodash from 'lodash'
import './reset.css'
import Dog from './dog.jpg'
import Index from './first.json'

function component(){
	
	 var element = document.createElement('div');

	 // Lodash, now imported by this script
    element.innerHTML = Lodash.join(['世界你好', 'webpack'], ' ');
	element.classList.add('hello');
	var Img = new Image();
	Img.src=Dog;
	element.appendChild(Img);
    return element;
}
 document.body.appendChild(component());