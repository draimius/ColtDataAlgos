'use strict'
console.log('section-10')

// SEARCHING ALGORITHMS

// Objectives
// describe what a searching algotithm is 
// implement linear search on arrays 
// implement binary search on sorted arrays
// implement a naive string seraching algorithm
// implement the 'KMP' string searching algorithm



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Intro to linear search -

// looking at every element in data structure
// depending if data is sorted or not can change our algorithm approach

// javascript has some build in methos for linear search like:
// -indexOf
// -includes
// -find
// -findIndex, ect... 

// Linear Search - 

// function accepts arr and a value
// loop through array and check if value is matched
// if found return index, else return -1

// ----------------------------------------------------------------------------------------------------------------------------------------------

// linear search exercise - function accepts array and value, return the index where value is found in array else -1 

function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) { return i }
    }
    return -1
}

// console.log(linearSearch([1, 2, 3, 4, 5], 3))

// ----------------------------------------------------------------------------------------------------------------------------------------------

// linear search solution - 

function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) { return i }
    }
    return -1
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

// linear search Big O - 

// big O(n) - linear algorithm
// time and space complexity is O(n)
// the time and space will grow in direct correlatin with the data passed in 
// linear search is the best we can do with unsorted data


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Intro to Binary Search -

// faster then linear search
// rather them eliminating one element at a time , you can eliminate half of remaining elements at a time
// only works on sorted arrays

// binary search works by first picking a mid point in the data 
// now because data is sorted and we know what the middle element is, that gives us informatino to know 
// ---on which side of that mid point does the data we are looking for exist (if the middle elemtn isnt it right)
// once evaluated which side may contain our value , we ignore the other side comletly
// we then pick a new mid point in the side chossen and then evaluate again  and continue to do this 
// ---till either value is found or we've exausted all possibilities

// divide and conquer - 
// -split array and check each half
// -we pick a pivot point and eval if value looking for greater or less then pivot point
// -eliminate half not containig, select new pivot point in half containig and repeat till 
//---find value wanted or exausted datapoints to check
// as long a we can check for less then or greater then is some form we can inplement binary

// ----------------------------------------------------------------------------------------------------------------------------------------------

// binary pseudocode - 
// accepts array and value
// create a left pointer at the start of arr and a right pointer at the end of arr
// while left come before right:
// -create a middle pointer
// -if value found return index
// -if the value it too small, move the pointer up
// -if value to large, move pointer down


// ----------------------------------------------------------------------------------------------------------------------------------------------

// binary search execise - 
function binarySearch(arr, num) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        //set mid point
        let mid = parseInt((left + right) / 2)
        //check for match
        if (arr[mid] === num) { return mid }
        //working window movement
        if (num < arr[mid]) { right = mid - 1 }
        else if (num > arr[mid]) { left = mid + 1 }
    }
    return -1
}
//you'd +1 or -1 because we already checked the value with pivot so we move one past it
//important that in the while param we have that = also with < or > else will run extra loops that break it 
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 23, 24, 25, 26, 26], 10))

//nailed it



// ----------------------------------------------------------------------------------------------------------------------------------------------

// binary search solution - 
function binarySearch(arr, elem) {
    let start = 0
    let end = arr.length
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    // return middle
    return (arr[middle] === elem) ? middle : -1
}
//v2

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 23, 24, 25, 26, 26], 15))


// i like that used the while like a circut break where we dont even loop in the even that arr[mid] === elem 
//--takes declaring mid before the loop 

//both work though slight diff , id like to know wether one is better then the other and if so HOW???
//im bias but i like mine better think its more straight forward
//--not a fan of having middle declare twice when not needed and while param is longer than needed i think
//---though both are thing that i think dont really make a diff in great view of thing just preference and cleanliness

//also like the idea of using a ternary for the return 
//linear is best when working with unsorted 
//--and binary is best for sorted 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// binary search Big O - 
// believe in time and space is O(log n)

//ex of log
//arr length of 16
// number steps taken 
//would be 16log2
//meaning 2 to what exponent give us 16 this case
//answer is 4
// 2*2 =4 *2 =8 *2 =16


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Naive String Search - 
// looking for a substring withing a larged string

//loop over the longer string
//loop over the shorte string 
// if dont match break out of the inner loop 
// if the char do match keep going 
// if we complete the inner loop and find a match , incremnet the count of matches
// return count

// ----------------------------------------------------------------------------------------------------------------------------------------------

// naive string search exercise - 



function naiveString(str, sub) {
    let start = 0
    let end = 0
    let count = 0

    while (start < str.length) {
        if (str[start] === sub[end]) {
            end++
            start++
        }
        else {
            start++
            end = 0
        }

        if (end === sub.length - 1) { count++ }
    }
    return count
}


// console.log(naiveString('omgomomgwowomgzomg', 'omg'))
// console.log(naiveString('wowomgzomg', 'omg'))
// console.log(naiveString('the red foxjumfoxped over', 'fox'))
// thinking sliding window with params the increment with match and reset when not and outer loop the moves through larger string
//--also with no match, 
// moving window , increments, and resets (on match , no match , or reach end of substring)


//count should increment when end = sub length (may vary)
//start should increment when end=sublenth or if firs check is no match then move to next on large string
//end is our loop 
// first try use a slice didnt work out so just used the large string [start] worked great

// ----------------------------------------------------------------------------------------------------------------------------------------------

// naive string - nested loop
// this if done is O(n^2) quadratic and is garbage 
// not gonna even add the example 

// my above solution diff previously learned and has much better time and space complexity
// abouve solution is O(nlogn) think for time which also isn't great in space its O(1) constant


// ----------------------------------------------------------------------------------------------------------------------------------------------

// KNP - knuth-morris-pratt 3 dude made algo
// create almost like a map of the substring before its compated to the main string 
// made by looking for a pattern the is a prefix(at the start) that is also i sufix(near end)
// does this to track progress so that when comparing we can identify possible matchs
// where insted of resetting back to the index[0] of patter to then compare to string 
// --if we've identified match sufix it jumps to that instead saving iteration on the main string 
// ---but also now comparig it starts at the next char after matches portion savint iteration on the pattern string as well

//very clever algo

// ex.
// string 'adsgwadsxdsgwadsgz'
// pattern 'dsgwadsgz'
// --'map' of pattern  :
// d    s    g   w   a   d   s   g   z (char in pattern )
// 0    1    2   3   4   5   6   7   8 (index )
// 0    0    0   0   0   1   2   3   0 (map) - show at what index should return to in event we have matching sufix appear in main str

//its a whole algo just to make the table/map
//then whole other to do the actual search

//complexities time O(n+m) and space O(n) 

// IN JAVASCRIPT
var makeKMPTable = function (word) {
    if (Object.prototype.toString.call(word) == '[object String]') {
        word = word.split('');
    }
    var results = [];
    var pos = 2;
    var cnd = 0;

    results[0] = -1;
    results[1] = 0;
    while (pos < word.length) {
        if (word[pos - 1] == word[cnd]) {
            cnd++;
            results[pos] = cnd;
            pos++;
        } else if (cnd > 0) {
            cnd = results[cnd];
        } else {
            results[pos] = 0;
            pos++;
        }
    }
    return results;
};

var KMPSearch = function (string, word) {
    if (Object.prototype.toString.call(string) == '[object String]') {
        string = string.split('');
    }
    if (Object.prototype.toString.call(word) == '[object String]') {
        word = word.split('');
    }

    var index = -1;
    var m = 0;
    var i = 0;
    var T = makeKMPTable(word);

    while (m + i < string.length) {
        if (word[i] == string[m + i]) {
            if (i == word.length - 1) {
                return m;
            }
            i++;
        } else {
            m = m + i - T[i];
            if (T[i] > -1) {
                i = T[i];
            } else {
                i = 0;
            }
        }
    }
    return index;
};



var test = 'fact';

var string = "This fact implies that the loop can execute at most 2n times. For, in each iteration, it " +
    "executes one of the two branches in the loop. The first branch invariably increases i and does not " +
    "change m, so that the index m + i of the currently scrutinized character of S is increased. The second " +
    "branch adds i - T[i] to m, and as we have seen, this is always a positive number. Thus the location m " +
    "of the beginning of the current potential match is increased. Now, the loop ends if m + i = n; " +
    "therefore each branch of the loop can be reached at most k times, since they respectively increase " +
    "either m + i or m, and m = m + i: if m = n, then certainly m + i = n, so that since it increases by " +
    "unit increments at most, we must have had m + i = n at some point in the past, and therefore either " +
    "way we would be done.";

let result = KMPSearch(string, test);
console.log(result)

// IN JAVA
// public static int[] buildPattern(String substring) {
//     int[] pattern = new int[substring.length()];
//     Arrays.fill(pattern, -1);
//     int j = 0;
//     int i = 1;
//     while (i < substring.length()) {
//         if (substring.charAt(i) == substring.charAt(j)) {
//             pattern[i] = j;
//             i++;
//             j++;
//         } else if (j > 0) {
//             j = pattern[j - 1] + 1;
//         } else {
//             i++;
//         }
//     }
//     return pattern;
// }

//   public static boolean doesMatch(String string, String substring, int[] pattern) {
//     int i = 0;
//     int j = 0;
//     while (i + substring.length() - j <= string.length()) {
//         if (substring.charAt(j) == string.charAt(i)) {
//             if (j == substring.length() - 1) {
//                 return true;
//             }
//             i++;
//             j++;
//         } else if (j > 0) {
//             j = pattern[j - 1] + 1;
//         } else {
//             i++;
//         }
//     }
//     return false;
// }



// ----------------------------------------------------------------------------------------------------------------------------------------------




