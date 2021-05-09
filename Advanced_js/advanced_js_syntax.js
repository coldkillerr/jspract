 // let vs const

 const player = 'bob';
 let exp=100;
 let wizlevel=false;

 if (exp < 90){
 	let wizlevel = true;
 	console.log('inside',wizlevel)
 	// value of wizlevel is true because it is placed inside the if clause
 }

 console.log('outside',wizlevel)
 // the value of this wizlevel will be false because it is the initialized wizlevel


// but with objects the case is different

const obj = {
	player:'bobby',
	exp:100,
	wizlevel:false,
}


obj = 5 ; //this will throw error  : "Uncaught TypeError: invalid assignment to const 'obj'"

obj.wizlevel = true; // this will be executed successfully and contents of obj will be altered.

const {player} = obj;
const {exp} = obj;
const {wizlevel} = obj;

// player = 'bobby' , exp =100 , wizlevel = false

val1 = 'name'
[val2] = 'age'
const obj2 ={
	[val1] : 'Ram',
	[val2] : 25

}

//  obj2  Object { name: "Ram", age: 25 }

// Template Strings :

name = 'Ram'

const greeting = 'hello'+name+' You seem to be doing good'; // without template strings

const greetingwithtemplate = `Hello ${name} You seem to be doing good`; // same result

// arrow function

function add(a,b) {
	// body...
	return a+b
}

const add2 = (a,b) => a+b

or 

const add2 = (a,b) => {return a+b;}

/* return values

add(1,2) : 3
add2(1,2) :  3

*/

const first =() =>{
	const greet = 'hi';
	const second =() => {

		alert (greet);


	}
	return second;
}

