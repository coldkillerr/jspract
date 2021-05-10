

// forEach
//forEach loops over the array and does whatever the function says , doesn't return anything 

const arr = [1,2,3,4];
const double =[];
const newArr = arr.forEach((num) => {
	double.push(num*3);
})

console.log(double); // prints [3,6,9,12]


//map :
//unlike foreach map has the restriction to return forEach iteration
const mapArr = arr.map(num => num*2);
console.log(mapArr); // prints [ 2, 4, 6, 8 ]

//filter
//filter adds elements to array based on a provided condition
const filterArr = arr.filter(num => num > 2);
console.log(filterArr); // prints [ 3, 4 ]

// reduce 
// acc stands for accumulator where all the values are stored
const reduceArray = arr.reduce((acc,num) => acc+num , 5);
console.log(reduceArray); 
// return accumulator value which is 15 . the second passed argument is the acc initialization (in this case 5)






