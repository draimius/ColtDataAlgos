'use strict'
console.log('hello, world')

// Big O notation
// --Objectives:
// what is it, why we care about it
// simplify big o expressins 
// define 'time complexity' and space complexity'
// evaluate the time complexity and space complexity of diff algos using Big O notation
// descitbe what a logarithm is

// in code there are always multiple way to accomplish the same result 
// big o is a way to detemine which of those solutions is best 
//  --some solutiion will take longer to proces then other may take up less resources ect...
// big o is about the optimal solution in space and time (most efficient and effective for challenge at hand) 
// big o put things on a scale and allows us to compare our algorithms and structure
// and like in everything there are trades off between algorithms 
// become what works best most efficient but also tialored to our chanllange and reasorces availible
//learn what may be slowing down your code

// ----------------------------------------------------------------------------------------------------------------------------------------------
function addUpTo(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

// let addUpPreformance = performance.now()
// console.log(addUpTo(11000))
// let addUpPreformanceDone = performance.now()
// console.log(`run time: ${(addUpPreformanceDone - addUpPreformance) / 1000}`)
// VS.

function addUpTo1(n) {
    return n * (n + 1) / 2
}

// let addUpPreformance1 = performance.now()
// console.log(addUpTo1(11000))
// let addUpPreformanceDone1 = performance.now()
// console.log(`run time: ${(addUpPreformanceDone1 - addUpPreformance1) / 1000}`)

//one loops other dosent one is more like a mathatical formula (one you can see what is happening other is less intuative initially unless you know the math behind it)

// What makes one better then the other
// faster run time?
// less memory-intensive?
// more readable?

// Often the first two take precedent being faster and more efficient (less memory-intensive)
// -- which often is at the expensive of readability (so just get better at reading the effective code, have that become base of readable if can do that then all be like its reading to you)

// Problem with time:
// its not reliable read as times will vary on each run , running on different machines ect.. there will be a range
// also for algos that are extremly fast the incremental changes between them will not show 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Intead of counting time we count the number of simple operatinos a coputer has to perform
// why? becuase thay will remain constant (how many operation, evaluation, ect.... how many thing does it have to do)

//for example in the one liner function above we have (*)multiplication (+)addition (/)division - so that a total of 3 operations regardless of what value n might be (big o 3)
// vs. other
// we have a loop that cotinues till meets n meaning number of operation will vary dependent on value of n (meaning if 1billion mean 1billion operation have to be preformed)
// --does not scale well being (big O of (n))  add in also that the (++) and (+)(=) and (<=) eval will also be done on each loop even worse now (big O (5n  take +2))
// what really matters is the general tread +2 dosent really matter what does is that operation grown with value of n 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Big O notaion - how run time of an algorithm grows as the inputs grow
// describe how the change in input size effect the run time of algorithm

// Big O example:
// could be linear (f(n)=n) - loop function above
// could be quadratic (f(n)=n^2)
// could be constant (f(n)=1) - oneliner above
// function of n = ect..
// as n grows what will the trend look like 
// big o describe the worst case senario (the run times upper bounds)



// ----------------------------------------------------------------------------------------------------------------------------------------------

// no loops big o is constant(epual to the number of operation)
// one loops not nested will be big o of n or linear (or n times the number of loops + operatore) / summed up though as n * number of loops
// nested loops aka one in another big o to exponent (big o of n^2 / or big o n^number of loops )

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Simplifiying big o 
// we only care about the big picture view

// Rules: 
// constant dont matter: 
// aka O(2n) becomes O(n) - 2 times n = number of operations but are linear to the input (here the chart is linear as the input scales)
// or O(500) becomes O(1) - 500 operations everytime but are constant there for happen once (here the chart remains flat as the input scales)
// O(13n^2) becomes O(n^2) - where scale difference between two is almost nothing in scale so we simplify to n^2 removing any constants

// We also dont care about smaller term: 
// O(n +10) becomes O(n) - again becasue whats important is realtionship between ops and iputs and here the are linuearly correlated
// O(1000n + 50) becomes O(n) - also becomes O(n) because as input increases so does number of operations 
// o(n^2 + 5n +8) becomes o(n^2) - we focuse on upper bounds or worst case, where here n^2 is just that so thats what becomes big O we want the worst correlation (where to compare wouldnt even matter becuase of its effect)

// rules that apply most of the time: 
// arithmetic operations are constant (aka 1 + 1 and 1billion + whatever take same amount of time)
// variable assignment is constant (let i = 0 and let word = 'hello' same take taken)
// Accessing elements in an array by index, object key is constant ( arr[index] or object.test take same time)
// In loop complexity is the length of loop times the complexity of whats happening inside the loop




// *** WHAT MATTERS IS THE RELATIONSHIP BETWEEN THE INPUT AND NUMBER OF OPERATIONS (always assum n is billions)***

// ----------------------------------------------------------------------------------------------------------------------------------------------

// TIME COMPLEXITY - relatioship between the input and amount of time till completion
// SPACE COMPLEXITY - amount of memory taken up in relation to the input 
// - auxiliary space is specificly the space required by the algo nothing else

// rules of thumb:
// -most primitive types are contant space (booleans, numbers, undefined, null)
// -strings require O(n) space n being length
// -refrence types like objexts and arrays will also required O(n) n being elements in array or keyvalue pairs in objects (length of array and number of key's)

// Ex.
let addUpNumbers = function sum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
// --the array passed in guess isn't accounted for because defined or passed in outside of the actual algorithm
//what are the things that take up space:
// -assignment of total
// -the assignment of i
// no matter how large n is spaced used is limited to above 
// it is constant space no matter n is 5 or 5billion same amount of space is used
// the above in regards to space complexity would be a big O(1) constant

// Ex.
let double = function (arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}
//vs. here we have to assigment of newArr
// aswell as the assignment of i 
// however in the loop newArr is growing at the same rate of the input do to the push method
// this now becomes big O(n) as the space needed grows in direct correlation with the input
// space complexity look for when the algo directly ineracts/or by proxi with the algo (otherwise if only interact with a constatnt then its just that)
// only when the algo interacts with the input is its space complexity effected otherwise just remains and O(1) aka a constant
// effect complexity when something is being accumilated based on or directly from the input (gonna be done whatever n number of times is)
// if noithing is being accumilated using the input then its constant
// for space complexity we dont really care about the loops like we do for time complexity

// ----------------------------------------------------------------------------------------------------------------------------------------------

// LOGARITHMS - logrithms is the inverse/oppisite of exponetiation

//log 2^(8) = 3
// How?
// asking 2 to what power do we get 8
// would have to be 3 / 2^3 = 8 / 2*2*2=8
// pretty much sums it up just wont be clean whole numbers all the time
// logarithms will not always be base 2 can be 3, 5 ect...
//  most common once are binary based 2, 10, e

// and now speaking in regards to big O we omit the base and only care for general trend aka big O(log n)

// rule of thumb:
// log roughly measure the number of times you can divide that number by 2 before you get a value that's less than or equal to one 
// ex. 8/2 = 4 | 4/2= 2 | 2/2=1
// --was able to divide it 3 times so eproximet answer is ~3
// ex. 25/2 =  12.5 then 6.25 then 3.12 then 1.56 then 0.78 so we know the answer is somewhere between 4-5  (where exact answer is 4.64)

//we always want to aim for O(n) and lower, perferable O(log n)

// Why do we care about Log
// certain searching algorithms have log time complexity  (also very effective and efficient)
// efficient sorting algorithms involve logarithms
// recursion sometimes also involves logarithmix space complexity

// RECAP:
// to analyze the performance of algos , we use big O notation
// big O can give us a high level understatnding of the time and/or space complexity of a algorithm
// big O doesn't care about precision, only general trands [upper bounds/worst case secario] (linear, quadratic, constant, log, ect...)
// for each time and space its about the correlatins of each in regards to the input, how does input effect each 
// time and space complexiaty depends only on the algorithm, and not hardware involved

// ----------------------------------------------------------------------------------------------------------------------------------------------







