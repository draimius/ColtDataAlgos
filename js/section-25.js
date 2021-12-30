'use strict'
console.log('section-25')

// Hash Tables/Map - Intro

//used very frequently, build into every language

//Objectives:
//-explain what a hash table is
//-define what a hashing algo is
//-descuss what makes a good hash algo
//-understand how collusions occur in a hash table
//-handle collisions using separate chaining or linear probing


//What is a hash table?
//hash tables are used to store key value pairs
//similar to array but dont have inherite order
//hash table are fast for all of the following: seaching, adding, and removing values (sounds pretty darn ideal)
//becuase of thier speed the are used very commonly

//why should i care?
//nearly every programming language has a sort of hash table data structure (javascript object??)
//some hash table in dif languages ( py has dictionaries, JS has object and maps, java, go, scala have maps, ruby has hashes, ect...)
//js objects have some restriction but aside from that work in the same way

//say wanted to make our own
//we could store in list array but order dosent matter so not best
//human readable keys to represent the values
// i think object sounds good here , search add and removal all constant as long as have key for search/pull values



// ----------------------------------------------------------------------------------------------------------------------------------------------

// More About Hash Tables

//here we'll use a array to implements our hash table (ps would like to try with other things like object, map)
//reinventing wheel here for learning purpose, sounds like if we'd actually need one would use an object or map

//in order to look up values by key, we need a way to convert keys into valued array indicies
//--enter in a hash function ( convert key to indecy in this case)
//idea is we pass in a string and returns a number and be consistent in value returned based on string
//---pointing back to object by why not just base in on the value pair of key(guess still same things as to where actually get stored hmm...)
// the return of hash function or any data must be consistent


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Intro to Hash Functions

//in our example here we will be taking a string and having that convert to an array index
//hash function are used in everything crytography, crypto, big in security, resposible for log ins ect... they are everywhere
//literal countries,  team, ect... work to create and better hash functions

//hash function are wicked, return predefined number value to represent data / ex. shown shows set of like 14 16 digit return cool

//What makes a good hash function?
//-fast must be constant time (interesting)
//-must not cluster inputs at specific indices, but distributes uniformly
//-must be consistent, same input should yeild the same output

// side note: i see why prime numbers would be involved with hash table or function as to keep things consistent and accurate


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Writing Our First Hash Function

//our simple hash function, this case for only strings
//say we pass in hash('string', number)
//the string can be any string value that will represent the key
//and the numer will represent and array of the size
//and function would place the key in that array of 100 someone in valid index in that array

//very basic hash function(not perfect as some reapeats)
// function hash(key, arrLength) {
//     let total = 0
//     for (let char of key) {
//         let value = char.charCodeAt(0) - 96
//         total = (total + value) % arrLength
//     }
//     return total
// }
//only hashes string 
//is not constant
//not random

//bettering basic hash function to meet params
//make closer to constant time 
//and make a bit more random

function hash(key, arrLength) {
    let total = 0
    let prime = 31
    for (let i = 0; i < key.length; i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total + prime + value) % arrLength
    }
    return total
}
//prime are used i believe becuase prime numbers are unique
//the larger the prime number the better, larger number = less collusions
// ( which my guess means that, more than one value store in same place, which creates issue and dont want that)
//so with hash funciton the length used (here arrLength) should always be a prime number larger better




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Handling Collisions
//even with a leage arrray and a great hash function, collisions are inevitable.
///there are many stategies for dealing with collisions, but we'll focus on two :

//Separate Chining
// chining at each index in our array we staore values using a more sophisticated data structure(like likned list, array)
// this allows us to store multiple key value parirs at same index
// basically for example becomes an array withing that one index in the array (nested array)
// one benefit to this type of strategy is that we will have more space than the inintial array length as we have nested arrays

//Linear Probing
// we store only one value in each position only
// when we find a collision, we search through the array/ect.. to find the next empty slot (i like this)
// looks ahead or backward to look for the next empty slot to store value




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Hash Table Set & Get
// set 
//accepts a key and values 
//hashees the key 
//stores the key-value pair in the hash table array via separate chaining
// get
//accepts a key
//hashes the key 
//retrieves the value matching key withing the nested array 
//if the key isn't found , returns undefined


//beacuse we are chaining means if slot is empty we will store it startig as a nested array, array of values added
//and is slot not empty we just add/push new value to the array of values stored withing that all incompass array index



// //my set and get functions
// //accepts two inputs the key and value wanting to store
// set(key, value) {
//     //capture the key value pair in array to push to keyMap later
//     let pair = [key, value]
//     //capture return value of hash(key) number aka index storing in
//     let position = this.hash(key)
//     //here we chech if anything in that position/index exist
//     if (!this.keyMap[position]) {
//         //if nothing then we initialize it with an empty array
//         this.keyMap[position] = []
//     }
//     //after above ran or not dependent if was empty or not 
//     //we then push the key values "pair" to the array in that position in the main array
//     this.keyMap[position].push(pair)
//     //return true that was successful/ thinking return the length but its already set and wont change right
//     return true
// }
// //accept a key that corrensponds the its value
// get(key) {
//     //capturen the return index/number from hash(key)
//     let position = this.hash(key)
//     //capture the nested array withing that position
//     let list = this.keyMap[position]
//     //if nested array exist, not empty(and filter non existent keys)
//     if (list) {
//         //we loop through all the array pairs
//         for (let item of list) {
//             //we compare the index [0] aka position of the keys in the pair to the key passed in 
//             if (item[0] === key) {
//                 //if we find a match then we return its value aka [1] index position in the pair
//                 return item[1]
//             }
//         }
//     }
//     //else if list dont exist (aka key passed in does not exist) we return undefined
//     return undefined
// }
// //few variation but pretty much the same as out function for it same exact logic used pretty much only differ in few var's
// coltSet(key, value) {
//     let index = this.hash(key)
//     if (!this.keyMap[index]) {
//         this.keyMap[index] = []
//     }
//     this.keyMap[index].push([key, value])
// }
// //pretty much same function give or take a few var set or not but logic exact same
// coltGet(key) {
//     let index = this.hash(key)
//     if (this.keyMap[index]) {
//         //
//         for (let i = 0; i < this.keyMap[index].length; i++) {
//             if (this.keyMap[index][i][0] === key) {
//                 return this.keyMap[index][i][1]
//             }
//         }
//     }
//     return undefined
// }



// idea is we have an array 
//--then withing that array inside each index there is another array
//---and withing that nested arrray is where we store all our values
//-though note that only the main array is initialize
//--each of its index starts empty, when we go to store we must initiate the nested array 
//-inintiate nested array and store values passed in, inside that newly nested array 
//also check if something already exist in the array previous to initiate *(if empty inintiate)
//else if not empty and there is something in there we simply push our passed in value to the nested array 




//now all sound pretty simply only thing is pushing into a nested array is where i have question 
//-guess it would be the main array to that position index then push ??? i think thats all let's test



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Hash Table Key and Values

//keys and values
//each return an array of all of its kinds
//keys return all keys in hashTable
//and values return all values in the hashTable
//how should we deal with duplicate data





class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
    hash(key) {
        let total = 0
        let prime = 31
        for (let i = 0; i < key.length; i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total + prime + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let pair = [key, value]
        let position = this.hash(key)
        if (!this.keyMap[position]) {
            this.keyMap[position] = []
        }
        this.keyMap[position].push(pair)
        return true
    }
    get(key) {
        let position = this.hash(key)
        let list = this.keyMap[position]
        if (list) {
            for (let item of list) {
                if (item[0] === key) {
                    return item[1]
                }
            }
        }
        return undefined
    }
    //should return all keys in the hashTable
    keys() {
        //create array where all keys will be stored
        let keys = []
        //loop over the main array and pull each slot
        for (let slot of this.keyMap) {
            //check if the slot is not empty
            if (slot) {
                //if yes then in that slot we loop over each one to access each nested array within
                for (let nested of slot) {
                    //them access the [0] value aka keys(and push to array for return later)
                    keys.push(nested[0])
                }
            }
        }
        //return the array with collectiong of all the keys
        return keys
    }
    //should return all values in the hashTable
    values() {
        //array to store all values from hashTable
        let values = []
        //loop over the main array and pull each slot
        for (let slot of this.keyMap) {
            //check if the slot is not empty
            if (slot) {
                //if yes then in that slot we loop over each one to access each nested array within
                for (let nested of slot) {
                    //them access the [1] value aka values(and push to array for return later)
                    values.push(nested[1])
                }
            }
        }
        //eliminate duplicate data (though this easy way sure more effective way in actual algo to filter them out)
        return [...new Set(values)]
        // return values
    }
    //not fan of how did it but for of loops may have not existed when this course was created my be why
    coltValues() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            for (let j = 0; j < this.keyMap.length[1].length; j++) {
                //adds in check before pushing, if it dosent already exist in our array only then do we push to array('values')
                //would like to know what is better in complexity this or something like our where we just create a set
                if (!valuesArr.includes(this.keyMap[i][j][1])) {
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr
    }

}

//note that keys should always be unique
//multiple keys can have to same value(s) but key mush always be unique
//in most cases languague if you attempt to add duplicate keys it would simple override you original one(no additional would add)



let hashTable = new HashTable()

hashTable.set('zero', 0)
hashTable.set('one', 1)
hashTable.set('two', 2)
hashTable.set('three', 3)
hashTable.set('theee', 3)
hashTable.set('four', 4)
hashTable.set('five', 5)
hashTable.set('six', 6)
hashTable.set('seven', 7)


console.log(hashTable)





// ----------------------------------------------------------------------------------------------------------------------------------------------

//Hash Table Big O Complexity

//insertion O(1)
//deletion O(1)
//access O(1)

//constant time, (hash function will effect this how fast, effective, distribution, ect...)
// hash function how fast it is and how it distribute data greatly effects O(from 1 to n)
// cryptographically storing data (something different then what doing now ) would be O(n) - but again different than above


// ----------------------------------------------------------------------------------------------------------------------------------------------

//Recap:
//hash tables are collections of key value pairs
//hash tables can find values quickly given a key
//hash table can add new values quickly
//hash tables store data in a large array, and work by hashing the keys
//a good hash should be fast O(1), distribute keys uniformly and be deterministic(aka consistent and accurate)







// ----------------------------------------------------------------------------------------------------------------------------------------------
