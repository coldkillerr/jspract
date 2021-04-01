// Challenge 4 : Changing colour of buttons

var allbuttons = document.getElementsByTagName('button');
var copybuttons=[]
	for (let i =0; i < allbuttons.length; i++) {
		copybuttons.push(allbuttons[i].classList[1]);
	}


function buttonchangecolour(option){
	
	buttoncolor(option.value);



}

function buttoncolor(value){

	

	if (value=='random'){

			values=['btn-primary','btn-success','btn-danger','btn-warning'];

			
			for (let i=0; i< allbuttons.length;i++)
			{
				let randomnum=Math.floor(Math.random() * 4);
				allbuttons[i].classList.remove(allbuttons[i].classList[1]);
				allbuttons[i].classList.add(values[randomnum]);
			}
	}

	else if (value == 'reset')
	{
		for (let i=0; i< allbuttons.length;i++)
			{
				
				allbuttons[i].classList.remove(allbuttons[i].classList[1]);
				allbuttons[i].classList.add(copybuttons[i]);
			}


	}	

	
	

	

	else{
		
		let colordb={
		'red':'btn-danger',
		'green':'btn-success',
		'blue': 'btn-primary'
	};

		for (let i=0; i< allbuttons.length;i++)
		{
				allbuttons[i].classList.remove(allbuttons[i].classList[1]);
				allbuttons[i].classList.add(colordb[value]);
		}
	}


}
