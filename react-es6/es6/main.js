import Point from './Point.js';
let body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23);

let test1 = new Point(222, 22);
console.log(test1);

console.log(new Date());

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './Hello'
ReactDOM.render(<Hello name="中国"/>, document.body);
