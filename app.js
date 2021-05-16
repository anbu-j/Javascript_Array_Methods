//var animals =["Dog","Goat","buffalo","Ant eater","Cat"]
// .pop = removes the last item in the array
//console.log(animals.pop()
//console.log(animals)

// .push - add onto the array at the end
////animals.push("Bird")
//console.log(animals)
//.shift = removes the first item in an array
//animals.shift()
//console.log(animals)
//.unshift = adds onto the beginning of the array
//animals.unshift("Bird")
//console.log(animals)
// .split = split into individual indexes in a new array
/* var word ="Hello"
var newArray = word.split()
word.split()
console.log(newArray) */

// forEach = runs a function for each item in the array/*
//var animals =["Dog","Goat","buffalo","Ant eater","Cat"]
//animals.forEach((item)=>{
//console.log(item)
//})

//animals.forEach((itemsInTheArray,index)=>{
////console.log("Hello " + itemsInTheArray + " " + index )
//}
//)
// create an array ,add 5 to each number in an array
//var numbers = [1,2,3,4,5,6,7,8,9,10]

///*
/*numbers.forEach(add);
function add(item,index,arr) {
    console.log("Value of item is" + item)
console.log("Value of index is",index)
console.log("Value of arr is",arr)
    arr[index] = item + 5;
    console.log(arr[index],index)
}
//*/
/*numbers.forEach((item,index)=> {
    console.log(item +5, numbers[index])

}
)*/
//.map = runs a function for each item in the array and places them in a new array
var animals =["Dog","Goat","buffalo","Ant eater","Cat"]
var newAnimals =animals.map((item)=>{
   return item
    console.log(item)
})
console.log(newAnimals)