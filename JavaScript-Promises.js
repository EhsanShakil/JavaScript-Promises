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

