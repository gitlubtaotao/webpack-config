
import Data from './data.jpg';

import './index.css';

import './index_scss.scss';


console.log('hello world');

var btn = document.createElement('button');
btn.innerHTML="新增"
document.body.appendChild(btn);

btn.onclick = function () {
	// body...
	var div = document.createElement('div')
	div.innerHTML = 'item';
	document.body.appendChild(div);
}


//  Tree Shaking  ES Module

import {add} from './math.js';

add(1,2);





