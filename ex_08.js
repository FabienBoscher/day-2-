fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];


function getFruit(){

let parameterArray = "Mango"

if (parameterArray===value.toString()){
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
}


else if (parameterArray===Number(value)){

    function getIndexFromName (fruitName){
        let index=fruits.indexOf(fruitName)

        if (index === -1) {
          return null ;
        } else {
          return index
        }
      }
   	 function displayResult(result) {
        console.log(result);
			} 
  }   
  }