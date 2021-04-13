var css = document.querySelector('h3');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.getElementById('gradient');
css.textContent=body.style.background;

// color1.addEventListener('change',colorchangeh3);
// color2.addEventListener('change',colorchangeh3);
color1.addEventListener('input',colorchangebg);
color2.addEventListener('input',colorchangebg);


function colorchangeh3() {
	// body...
	
}


function colorchangebg(){
 
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent=body.style.background+';';
	
	// console.log(body.style.background);
}

