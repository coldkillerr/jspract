// Challenge 5 : Blackjack



document.querySelector('#blackjack-hit').addEventListener('click',blackjackhit);
document.querySelector('#blackjack-deal').addEventListener('click',blackjackdeal);
document.querySelector('#blackjack-stand').addEventListener('click',dealerlogic);

let blackjackgame = {
	'you':
	{ 'scorespan':'#your-blackjack-result',
	  'div':"#your-box",
	  'score':0 
	},

	'dealer':
	{ 'scorespan':'#dealer-blackjack-result',
	  'div':"#dealer-box",
	  'score':0 
	},

	'cards': ['2','3','4','5','6','7','8','9','10','A','K','Q','J'],

	'cardmap':
	{

			'2':2,
			'3':3,
			'4':4,
			'5':5,
			'6':6,
			'7':7,
			'8':8,
			'9':9,
			'10':10,
			'J':10,
			'Q':10,
			'K':10,
			'A':11


	},

	'wins':0,
	'losses':0,
	'ties':0,

	'isStand':false,
	'turnOver':false,
	'myturnover':false,
	'sessionover':false

};

const YOU = blackjackgame.you;
const DEALER = blackjackgame.dealer;
const hitsound= new Audio('static/sounds/swish.m4a');
const cashingsound = new Audio('static/sounds/cash.mp3');
const loss_sound = new Audio('static/sounds/aww.mp3');









function blackjackhit() {

	if (blackjackgame.isStand == false)
	{
	card = randomcardgenerator();
	carddisplay(card,YOU);
	updatescore(YOU,card);
	showscore(YOU,card);
	blackjackgame.myturnover=true;
}

	
}

function blackjackdeal() {

	
	
	if (blackjackgame.turnOver == true)
	{
		
		blackjackgame.isStand = false;

		let yourimages=document.querySelector(YOU.div).querySelectorAll('img');
		
		for (let i = 0; i <yourimages.length; i++) {
			yourimages[i].remove();
		}

		let dealerimages=document.querySelector(DEALER.div).querySelectorAll('img');
		
		for (let i = 0; i <dealerimages.length; i++) {
			dealerimages[i].remove();
		}

		YOU.score=0;
		DEALER.score=0;

		document.querySelector(YOU.scorespan).textContent=0;
		document.querySelector(YOU.scorespan).style.color='white';
		document.querySelector(DEALER.scorespan).textContent=0;
		document.querySelector(DEALER.scorespan).style.color='white';

		document.querySelector('#blackjack-result').textContent="Let's Play !!";
		document.querySelector('#blackjack-result').style.color="black";
		blackjackgame.turnOver = false;
		blackjackgame.myturnOver = false;
		
	

 }




	
}


// helper function for blackjackhit

function randomcardgenerator() {
	// body...
	cardNum = Math.floor(Math.random() * 13);
	return blackjackgame.cards[cardNum];
}

function carddisplay(card,activeplayer) {
	// body...
	if (activeplayer.score <= 21){
		console.log(activeplayer.score);
	let cardImage = document.createElement('img');
	cardImage.src = `static/images/${card}.png`;
	document.querySelector(activeplayer.div).appendChild(cardImage);
	hitsound.play();
    }
}

function updatescore(activeplayer,card) {

	if (activeplayer['score'] < 21){

	activeplayer['score']+=blackjackgame.cardmap[card];
	console.log(blackjackgame.cardmap[card],activeplayer);
	console.log(activeplayer.score);
}

		// body...
}

function showscore(activeplayer,card) {
	// body...

	if (activeplayer['score']> 21)
	{
		
		document.querySelector(activeplayer.scorespan).textContent = activeplayer['score']+' BUST !!';
		document.querySelector(activeplayer.scorespan).style.color = 'red';
	}

	else
	{
	
	document.querySelector(activeplayer.scorespan).textContent=activeplayer.score;
	}

}

async function dealerlogic() {

	if (blackjackgame.myturnover == true)

	{

		blackjackgame.isStand = true;
		

		while ( DEALER.score < 16 && blackjackgame.isStand == true)
		{
		let card = randomcardgenerator();
		carddisplay(card,DEALER);
		updatescore(DEALER,card);
		showscore(DEALER,card);
		await sleep(1000);
		}

		blackjackgame.turnOver = true;
		let winner = computewinner();
		showwinner(winner);
		await sleep(1000);
	}


	
	
	// body...
}

function computewinner() {
	// update the wins,losses and draws and compute the winner
	let winner;


	if (YOU.score > 21 && DEALER.score > 21){
		console.log('YOU TIED');
		blackjackgame.ties++;
		document.querySelector('#draws').textContent=blackjackgame.ties;
	}

	else if (YOU.score <= 21){

		if (YOU.score > DEALER.score || DEALER.score > 21){
			console.log('You won !!');
			blackjackgame.wins++;
			document.querySelector('#wins').textContent=blackjackgame.wins;
			winner=YOU;
		}

		else if (YOU.score < DEALER.score){

			console.log('Dealer won !!');
			blackjackgame.losses++;
			document.querySelector('#losses').textContent=blackjackgame.losses;
			winner=DEALER;

		}

		else if (YOU.score == DEALER.score){

			console.log('Tied !!');
			blackjackgame.ties++;
			document.querySelector('#draws').textContent=blackjackgame.ties;
			

		}

	}

	else {
		
		if ( DEALER['score'] <= 21){
			console.log('You lost !!!');
			winner = DEALER;
			blackjackgame.losses++;
			document.querySelector('#losses').textContent=blackjackgame.losses;
		}

		else {

			console.log('You won !!!');
			winner =YOU;
			blackjackgame.wins++;
			document.querySelector('#wins').textContent=blackjackgame.wins;

		}
	}



		
		return winner;

}

function showwinner(winner) {
	let message,messagecolor;
	// body...

	if (blackjackgame.turnOver==true)
	{

		if (winner==YOU){
			message='YOU WON';
			messagecolor='green';
			cashingsound.play();

		}
		else if ( winner==DEALER){

			message='YOU LOST';
			messagecolor='red';
			loss_sound.play()

		}
		else{
			message= 'YOU TIED';
			messagecolor='black';
		}

		document.querySelector('#blackjack-result').textContent = message;
		document.querySelector('#blackjack-result').style.color = messagecolor;
	}

}

function sleep (ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}