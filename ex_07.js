fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

let index = 4
 
function getFruitNameFromIndex(index){

if (index === -1) {
return fruits[fruits.length-1] ;
}
else if (index < 0 || index >= fruits.length) {
return null
}
else {
	return fruits[index]
}
}
console.log(getFruitNameFromIndex(index))