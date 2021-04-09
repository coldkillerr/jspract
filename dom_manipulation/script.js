var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var list=document.getElementById('mylist');


button.addEventListener('click',addlistClick);
input.addEventListener('keypress',addlistkeypress);


function inputlength(){
	return input.value.length ;
}

function addlistClick() {
	// body...
	if (inputlength()>= 1){
		dataappend();
	}
}

function addlistkeypress(event) {
	// body...
	if (inputlength() >= 1 && event.which == 13){
		dataappend();
	}
}

function dataappend() {
	// body...
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	input.value="";
}
