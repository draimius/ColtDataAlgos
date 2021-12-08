"use strict";
console.log("section-9");
//BONUS RECURSION CHALLANGES

// Reverse - write function that accepts a strign and returns new string in reverse

//iterable
// function reverse(str) {
//     let newStr = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         //i represents the index of current str order
//         console.log(newStr)
//         newStr += str[i]
//     }
//     return newStr

// }
//we can do the same thing for pure recursion
//we return a concatination array but then how in recursion join() it to str
//--maybe we the calling then below that ones its all done we do the join on the finished product
//---questin we did we push to array to the join why not make a string of the bat nothing preventing that

//slice like so (0, the -number (length) decrementing) - very likely i already wrote the solution just our slice was not correct att
// let productOfArray = function (arr) {
//     if (arr.length === 0) { return 1 }
//     return arr[0] * productOfArray(arr.slice(1))
// }

// pure recursion
function reverse(str) {
    if (str.length === 0) {
        return "";
    }
    return str[str.length - 1] + reverse(str.slice(0, -1));
}

// test.slice(-(test.length - 1))
// 'wesome'
// test.slice(-(test.length - 2))
// 'esome'
// test.slice(-(test.length - 3))
// 'some'
// test.slice(-(test.length - 4))
// 'ome'

// console.log(reverse('awesome'))
// console.log(reverse('ritmschool'))

//in itereble version how do i achive this definetly someting to do  with the length and indexes
//also thinking therean equation in there with the current index length and new index
//to go from back to front slicing use negative numbers, strating from it -length and decrememting
//nailed it needed the correct slice syntex and was simple had already done something just like it

//COLT SOLUTION --------------------
// function reverse(str) {
//     if (str.length <= 1) return str;
//     return reverse(str.slice(1)) + str[0];
// }

//param is different and also return is simply return str vs mine where i return empty string to be added some result but diff way to get there, his makes more sense
//--lets just return what we want we've reached the end no concern that we'll miss anything else
//---big difference is in the return mine same result but much more conplicated then his is very straight forward
// ----just str[0](first value + ) str.slice(1)(first value of next slice and so forth till the end clever)
// ---its in a sesnse same thing though he used the [0] start while i used the end length -1 
//----he's able to do that by the clever rearraging in the return where [0] comes after all slice evaluation (evals then fixed)
//---while in our right to  use what we used as way to achiever same with our evaluations coming after the fixed 
//--(very very interesting how much small change in order make such big change really)




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Is Plindrome - function which returns true if the string passed to it is a palindrome
// --(aka reads same forward and back, ex.racecar)

// iterable
// function isPlindrome(str) {
//     let check = str.length - 1
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[check]) {
//             check--
//         } else { return false }
//     }
//     return true
// }



// take aways something that helped in these past two solution is runnig through it by hand
// just thinking about the relationshop between the input and output, what are the common variable between them
// --what does it take to get from one to the other, ect....

//COLT SOLUTION --------------------
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

//colt solution on this one is very different i was able to just eval everything and return true or false while he had multiple reassinments returns and if's
//bias but think my ligic for this simple test is actually better ,take that back my shit is actually broken yet still passed test guesss they were really simple whateves learn and move
// was abe to win out very simple using evel of last and first value 

//whats the logic here?
// ignoring the first 2 if the 3rd is checking if the first value matches the last and if so runs function again with str sliced by one from both ends
// also used aspect of palindromes if its even and if we get down to length of two well that last eval we need (so we return result of comparing the 2 if equal or not )
// and if its odd well if met param and all else has been sliced and only 1 value remains then its, its center and all else has matched therefor (return true)
// also note that there is no elseif or else meaning that if none of those are met (say we sliced one but now no match and length is larger then 2 )
//---well then that's were the default comes in and we return false


// console.log(isPalindrome('foobar'))
// console.log(isPalindrome('foobar'))
// console.log(isPalindrome('tacocat'))
// console.log(isPalindrome('awesome'))
// console.log(isPalindrome('racecar'))



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Some Recursive - functino accepts an array and a (callback)??
//  --the function returns true if a single value in the array returns true when passed to the callback (othewise false)

// this one under stand challange was is actually input and output

function someRecursive(arr, call) {
    // WE DONT COMPLETELY UNDERSTAND WHAT ITS ASKING FOR**********
}

// SAMPLE INPUT / OUTPUT
// const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// console.log(someRecursive([4, 6, , 8, 9]))
// console.log(someRecursive([1, 2, 3, 4]))
// console.log(someRecursive([4, 6, 8]))

//i dont completely get what this challange is asking for in regards to the callback portion

//COLT SOLUTION --------------------
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

// this one dosent seem like anything crazy we isolated each value in array with the slice change in each funciton call
// -part i didnt get was the call back i had something very similar checking for if call back on value was true (portion i missed was the callback in the recusrion call)
//--adding that funciton call with no example monkey rench in understanding what was expected, we learn we move


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Flatten - function accepts array of array and return a nre array with all values flattened
// --(aka takes varying nested array and consolidates it to just one basic array of all the values)
// method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.

// iterable
// function flatten(arr) {
//this cheap way to do it great and powerful but for learning no go, want to emulate what it accomplishs without using it 
//     return arr.flat(arr.length + 1)
// }



///based on the length of the element should determine how far in wedd have to go ????

// pure recursion
function flatten(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.length <= 0) { return newArr }
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        }
        else {
            newArr.push(arr[i])
        }

    }
    return newArr
}
// we dont alwise have to change the input in the return now do we have to do it with slicing away at something 
//---there other ways to go through each value in the input then just slicing away at it like here a loop based on length
//----cleaverly the length changes but not by slice but by whats passed in as we move through the values in the original array

// return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
//why does this work????
// arr we get access the input , reduce method calling
//--acc and cur not sure what they represent here think the cur is (currentValue that make sense here and exaples i've seen)
//---the acc part still not sure but how its used, maybe the first value, or whole array itself (it represents the accululator)
// ok so we have arr.reduce function (acculilator , currentValue) {accumulator.concat(+) 
// then it goes to a ternary  param that checked if the current value is an array 
//---- if it is NOT an array it return the value as there is no nested no array can access value just like that 
// ----however if it is a array something bit more complicated happends, if its array it recurses fuction but only passed in the individual array/nested array 
//-- where if still an array will do again moving level further in and using that as its next iteration input and so forth till get to point that we 
//------can access the value's themselves}





//can it concatenate whole array or must it be only the individual value
// console.log(flatten([1, 2, 3, [4, 5]]))
// console.log(flatten([1, [2, [3, 4], [[5]]]]))
// console.log(flatten([[1], [2], [3]]))
// console.log(flatten([[[[1], [[[2]]], [[[[[3]]]]]]]]))

// so we know we have to return an array (basically same array just eliminate all of the nesting just one array )


// if we can flatted the nested array and pass that back in as the input and continue to do so till no more nested (it works but how do we know when to stop)
// if pass it in flattened just not slice cause we want the same value just eliminated a layer
// --two forms of change here(actually should just be the flattening dont think we should be slicing or????)
// --though was we slice and flatted two way to change the input 
// ---could still do both just depending whether if still nested the we run again with same slice but flatted vs if not the flat alreaddy done and we slice
// can somehow try to just edit and return existing array // or can create empty and concat (issue i see with concat is that we dont always do same actions but might still be able to)

// we dont need to get it to the value alone if we can grab it as an array alone can concat and still return as one array only 
// 

// COLT SOLUTION ---------------------------
// function flatten(oldArr) {
//     var newArr = []
//     for (var i = 0; i < oldArr.length; i++) {
//         if (Array.isArray(oldArr[i])) {
//             newArr = newArr.concat(flatten(oldArr[i]))
//         } else {
//             newArr.push(oldArr[i])
//         }
//     }
//     return newArr;
// }

//This one is very interesting in the fact that it utilizes a for loop with recursion
//--portion i got and understood before view solution was needing to check if it was an array or not we had that
//---also had fact that we would need to concat and reassign newArr with it (though specified order or to specific if didnt quite get)
//----we knew we'd return newArr (we were fairly close to getting soulution on own where really close only part we check for array and where to concat and recurse)




// ----------------------------------------------------------------------------------------------------------------------------------------------

// CapitalizeFirst - accepts an array of strings , capitile the first char of each of thoughs string and return new capitalized Array

// iterable
// function capitalizeFirst(arr) {
//     let newArr = []
//     for (let item of arr) {
//         newArr.push(item[0].toUpperCase() + item.slice(1))
//     }
//     return newArr
// }


// pure recursion
function capitalizeFirst(arr) {
    let newArr = []
    if (arr.length <= 0) { return newArr }
    newArr = newArr.concat(arr[0][0].toUpperCase() + arr[0].slice(1))
    return newArr.concat(capitalizeFirst(arr.slice(1)))
    //its doing waht we want but not over all string, are recursion call isn't right
    //still dont think this is the best way to do it something in the return and reassignment is redundent and think therea a better way to do it 
    //though we got that working and understood it pretty well glad, im learning the patterns i can tell
}


//first thing is accesing every string 
//then accesing the first value in each of those strings 
//also do we return a new array or mutated (thinking newArr)
//what should our basecase be (could slice away this way [0] is always first to work with meaning base case is based on the arr.length)

// console.log(capitalizeFirst(['cat', 'taco', 'hello']))

// COLT SOLUTION ---------------------------------
function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

//solutions very different he's has much more maybe chekcing for other things i didnt consider or really just same functionality just different 
//i declare var, base case on length tha return var back, reassign var concat, return var concat with recursion call on slice
//-he has base case based on length but the returns arr[0][0] first letter to upper + the rest of the array
//--note base case is not really a base case but a edge case where only string is lenght 1 (aka only 1 letter)
//the var = recursive call on arra slice excuding the last value/string ( why not sure?)
//other var = array slice by it's length -1(common theme in this type why?) then its 00 first letter to upper + another slice by lenght -1 [0].substring(1) (whyyy?????)
// then recursive call .push other var => then return recursive
//---note that the push could have simply been done from the values = to res (guess just did to look simpler or nicer)
//*********run through by hand */


//very similar to the word upper recursion

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Nested Even Sum - return the sum of Even number in an Object which may conatain nested object

//pure recursion
function nestedEvenSum(obj) {
    let sum = 0
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        }
        else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key]
        }
    }
    return sum
}




var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}


var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

// console.log(nestedEvenSum(obj1)) // 6  --able to solve this one fine but our algorithm doesnt work for below function call/input
// console.log(nestedEvenSum(obj2)); // 10

// COLTS SOLUTION ------------------------------
// function nestedEvenSum(obj, sum = 0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object') {
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
//             sum += obj[key];
//         }
//     }
//     return sum;
// }

//recursive solution my solition was iterable and only worked for one input unfortunatly let learn
//again a loop within a recursive function interesting
//he loops over the obj grabbing the keys
//--checks if the obj[key] = to an object
//---if yes then sum += recursive call with now that as the input (obj[key]) becomes the object to loop over
//else if the obj[key] is a number and even 
//--sum+= obj[key]
//then retur the sum


// with operation and recursion or where we need to go in several leverl of depth in something we've seen loops used
//--that basically what our framework was just we didnt know exactly how to write it checking for obj if not value become new obj go in
// else would +=
// one thing havent seen in bit and didnt expect here is that in the initial call he add a variable with value
//our iterable solution very close actually glad let review and keep learnings


//again want to learn more about working with and manipulating object nested ect... working with key and value ect.....
//--object method ect...




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Capitalize Words - accepts an array of words, and return a new array of the same words capitilized

// recursion with a for loop in it based on the length of string paseed in  (didint need it*)

//iterable
// function capitalizeWords(arr) {
//     let newArr = []
//     for (let item of arr) {
//         newArr.push(item.toUpperCase())
//     }
//     return newArr
// }
//we have end increment to loop through the stings ( and will reset when end and that strings length are === )
//--and the starting point moves up one as well to move onto the next string/word


// pure recursion
function capitalizeWords(arr) {
    let newArr = []
    if (arr.length == 0) { return newArr }
    newArr.push(arr[0].toUpperCase())
    //we know that in the return we want to call functino with slice as input to change it
    return newArr.concat(capitalizeWords(arr.slice(1)))
}


// ************%%%%%%************************%%%%%%************************%%%%%%%*********************%%%%%%%**********


let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words))
//nailed it
//we want the action needed then concatian of the function call/recurtion


// COLT SOLUTION ---------------------------
function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
}

//solutions are different, interesting i created a new array emplty arreay he didn't, 
//base case is if the array length = 1
//declared varible the = arr - the lest value (not sure why?)
//takes that var and pushed array.slice(to it's length -1)[index 0] to uppercase (not sure why?)
//--the uppercase makes sense index [0] i get cause gonna slice so its a way of going through every value in the arr
//----the slice at length not sure yet? that would grab the last value in arr then [0 so string? or just arr] grabs what was previsouly removed in previous slice
//the return var where every thing got uppercased and pushed
// again dont completely get why that work the var and slices are interesting 
//----gonna walk through by hand later



// ************%%%%%%************************%%%%%%************************%%%%%%%*********************%%%%%%%**********



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Stringify Numbers - accepts an object and finds all the value of 'number' type and converts them from int to string



// function stringify(obj) {
//     // console.log(obj)
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             stringify(obj[key]);
//         }
//         else if (typeof obj[key] === 'number') {
//             obj[key] = obj[key] + ''
//         }

//     }
//     return obj
// }
//works but ***(mutates) existing obj (and guess test dosent want that)
//so we have the frame work to pull values from nested or not nested objects
//we use that then we just look for the value to match number type the replace it with that + '' to make it a string

function stringify(obj) {
    let newObj = {}
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key] + ''
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            //key to check for array(as array technically is an object this way we exclude it and copy exact whats passed in)
            newObj[key] = stringify(obj[key]);
        }
        else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
//bro we had it just test will give error if function is not named exactly like it's been asked for 

//***returns a new obj with everything copied but number are now strings */ ----issue where test returnt {} instead of [] why????
//key there is to have to else we put in to add anything that didnt meet object or number aka anything else 
//---we checked for array insure that dosent get passed in as object cause it will cause technical array is an object right
//----so specificly exclude array that way moves to the else where it just adds it to the newObj and done noice

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

//seems wants me to mutate existing object just return same object but number become strings
// if can access obj[key] value then can reassign it the that obj[key] + ''  which will turn in into string and done
//--thining will need some type of for in loop here

console.log(stringify(obj))

//COLT SOLUTION -------------------
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Collect Strings - accepts and obj and return an array of all the values in the object that are 'string' type

function collectStrings(obj) {
    // console.log(obj)
    let newArr = []
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            newArr = newArr.concat(collectStrings(obj[key]))
        }
        else if (typeof obj[key] === 'string') {
            newArr.push(obj[key])
        }
    }
    return newArr
}
//albe to get each value as need 
//now just need to concat them all together and return whole array together 


//thnking concat to an array 

const obj3 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// console.log(collectStrings(obj3)) // ["foo", "bar", "baz"])
//nailed it logic was right from the start just we'rent seeing the return so log showed diff right but whateves we learn
// did well with the loop,  return,  reassignment and push overall did very well 



// ----------------------------------------------------------------------------------------------------------------------------------------------

// the ones related to object show me that we want o learn to work with them more and more as feed lack a greater understanding of working with and manipulation them*****
