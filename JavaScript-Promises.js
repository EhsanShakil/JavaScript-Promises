//Promises are used to handle asynchronous operations in JavaScript. 
//They are easy to manage when dealing with multiple asynchronous operations 
//where callbacks can create callback hell leading to unmanageable code.

/*********************************************************************/

var promise = new Promise((resolve, reject) => { 
  const number1 = 5; 
  const number2 = 5;
  if(number1 === number2) { 
    resolve(console.log(`Success: Yeah it's same`)); 
  } else { 
    reject(); 
  }
}); 

promise
	.then()
	.catch(() => console.log(`Failed: Opps it's not same`));

/*********************************************************************/

console.log('Hello World 1')

const anyFunction = () => {
  return (((Math.floor(Math.random() * 10)) % 2) === 0)
}

const resolveFunction = () => console.log('Success')
const rejectFunction = () => console.log('Failure')

const result = new Promise((res, rej) => {
  setTimeout(() => (anyFunction() ? res() : rej()), 2000)
})

result.then(resolveFunction).catch(rejectFunction)

console.log('Hello World 2')

/*********************************************************************/

function food() {
	const preparefood = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Preparing Food")
			resolve("Food is Ready")
		}, 3000)
	})
	return preparefood
}

function sweetdish() {
	const preparesweetdish = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Preparing Sweet Dish")
			resolve("Sweet Dish is Ready")
		}, 4000)
	})
	return preparesweetdish
}

let foods = food()

foods
	.then((value) => {console.log(value); return sweetdish()})
	.then((value) => {console.log(value)})
	.catch((error) => console.log("Error: ", error))

/*********************************************************************/

const computer = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Turn on the computer")
		resolve("Computer is turning on")
	}, 5000)
})

const software = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Install the  software")
		resolve("Software is installing now")
	}, 6000)
})

computer
	.then((value) => {console.log(value); return software})
	.then((value) => {console.log(value)})
	.catch((error) => console.log("Error: ", error))

/*********************************************************************/
