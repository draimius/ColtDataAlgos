'use strict'
console.log('section-3')

// Built-in Data Structures and Methods
// Objectives:
// -understand how objects and arrays work, through the lens of big O
// -explain why adding elements to the beginning of an array is constly
// -compare and contrast the runtimes for arrays and objects, as well as built in methods

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Objects - unordered data structures (key value pairs)
// used when:
// -you don't need order
// -when you need fast access/insertin and removal
// aka constant time for:
// insertion - O(1)
// removal - O(1)
// access - O(1)
// but searching is linear time
// --aka checking if a given value exist withing the object (would have to check all)
// searching - O(n)

// also has objext methods like: (range from constant to linear)
// object.keys - O(n)
// object.values - O(n)
// object.entries - O(n)
// hasOwnProperty - O(1)

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Arrays - ordered list of values (inlike object is ordered)
// the order useful but come at a cost
// used when: 
// need order (even if you need order there are others data structures that also provide it)
// methods: 
// accessing is constant O(1)
// searching is linear O(n) - (side note helful and viable if data is sorted)
// removal and insertion will vary because of the instrinsic order and where in list will method occure

// when accesing pulling with index array dosent count up to find the one you want, there is a direct short cut to each that is accessed through 

// insertion and removal from begining creats issue of having everything being reindexed as everything shifts
// --adding and removing from the END of array is always faster then adding or removing from the beginning of the array
// even if the reindexing is done automatically by the method if any data/or functino interacted with that and relied on that well now its pulling the wrong information as its all been shifted in index/location

// ----------------------------------------------------------------------------------------------------------------------------------------------

// big O operations of Arrays
// push -    O(1)
// pop -     O(1)
// shift -   O(n)
// unshift - O(n)
// concat -  O(n)
// slice -   O(n)
// splice -  O(n)
// sort -    O(n * log n) - is larger than O(n)
// forEach/map/filter/reduce/ect.. - O(n)

// ----------------------------------------------------------------------------------------------------------------------------------------------















