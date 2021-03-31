
function rpsgame(yourchoice) {
	
	var humanchoice,botchoice;
	humanchoice = yourchoice.id;
	console.log('user clicked',humanchoice);
	botchoice= randomChoice()
	console.log('bot clicked',botchoice);
	decision = decideWinner(humanchoice,botchoice);
	
	rpsfrontend(decision)
	//results = decideWinner(humanchoice,botchoice)  // [0,1] human lost | bot won

	
}

function randomChoice(){
	options = ['rock','paper','scissors'];
	return options[Math.floor(Math.random()*3)]
}

function decideWinner(userchoice,botchoice){
	
	rpsdb= {

		'rock':{
			'scissors':1,
			'rock':0.5,
			'paper':0
		},

		'paper':{
			'rock':1,
			'paper':0.5,
			'scissors':0
		},

		'scissors':
		{
			'rock':0,
			'paper':1,
			'scissors':0.5
		}
	}

	yourscore = rpsdb[userchoice][botchoice];
	
	computerscore=rpsdb[botchoice][userchoice];
	
	
	var color,message;
	if (yourscore>computerscore){
		color='green';
		message='You Won'
	}
	if (yourscore<computerscore){
		color='red';
		message = 'You Lost'
	}
	if (yourscore==computerscore){
		color='blue'
		message='You tied'
	}
	result={
		'yourscore':yourscore,
		'computerscore':computerscore,
		'color':color,
		'message':message,
		'userchoice':userchoice,
		'botchoice':botchoice
	}

	return result;
}

function rpsfrontend(decision) {

	// get user and bot image source
	console.log(decision);
	userimage = document.getElementById(decision.userchoice).src;
	console.log(userimage);
	botimage=document.getElementById(decision.botchoice).src;
	console.log(botimage);

	// remove all images

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	// create divs

	var humandiv = document.createElement('div');
	var botdiv = document.createElement('div');
	var messagediv=document.createElement('div');

	// add html to the divs

	humandiv.innerHTML = "<img src= '"+userimage+"' height=150 width=150 style='box-shadow :0px 10px 50px rgba(37,50,233,1);'>";
	document.getElementById('rps').append(humandiv);

	messagediv.innerHTML = "<h1 style='font-size:60px; padding:30px; color: "+decision.color+"'>"+decision.message+"</h2>"
	document.getElementById('rps').append(messagediv);

	botdiv.innerHTML = "<img src= '"+botimage+"' height = 150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
	document.getElementById('rps').append(botdiv);


	
}