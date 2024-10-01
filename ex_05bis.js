    let array = ["strawberry", "strawberry", "strawberry", "apple", "apple", "lime", "lime", "peach", "pear", "pear"]
    
    function getBasketContent() { 
    return array
    
    }
    
    
    let number = 12
    
    console.log(array.length-number)
    
    if (number > array.length) {
    
    console.log("Too many fruit(s)selected")
    
    
    }
    array.splice(0,number)
    
    getBasketContent();