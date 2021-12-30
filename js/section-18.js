'use strict'
console.log('section-18')

// DATA STRUCTURES INTRODUCTION


//Which datastructure is best ??
//the one best suite for your use case

//name a few -
//binary seach trees, queus, binary heaps, directed graphs, hash tables, singly and doubly linked lists , stacks, priority queus, ect....

//what do they do ??
//collection of values, relatioshops among them, and thr functions or operations that can be applied to the data

//why are there so many ??
//different data structure excel at different things
//some are more specialize other common

//end of day they all store data but differ in the way they store said data in relation to all its data points
// and their functionality

//why care ??
//more time spend as a engineer, more likely you'll need to use one of these data structure
//of challange or project arisees where the basic array and object just wont do
//also we've already worked with several of these unknowingly
//and of course interviews



// ----------------------------------------------------------------------------------------------------------------------------------------------

// ES2015 Class Syntax Overview

//Objectives
//-explain what a class is
//-understand how javascript implements the idea of classes
//-define tems like abstraction, encapsulation and polymorphism
//-use es2015 classes to moplement data structures

//Whats is a class?
//-a blueprint for creating objects with pre-defined properties and methods ( create methods for said class/structure)


//my understanding in the difference between class based and prototype based inheritance
// in class base languagues like c++ or Java the class and instances(aka copies or version of that class) are completly different
//---and seperate individual whole new, While in prototype base we have the class then instances are not something completly new
//----they are a refrence the that original class (one you could add or remove things to without effecting origal (class) in
// any way as they are completely seperate, while in other say wanted to remove something , its not possible only way to achieve
// similar result would be to simple not use the method,portion not wanted though will still exist,
// **one create whole new thing just like the original ,
// **the other build something not new or whole but shell to use original as refrence




// ----------------------------------------------------------------------------------------------------------------------------------------------

//Data Structures: The Class Keyword
// class Student {
//     constructor(firstName, lastName, year) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.year = year
//     }
// }

// let jose = new Student('jose', 'arduous', 11)
// console.log(jose)

//we define the structure then use 'new' to run/pass in new instances
//works very much just like an object
//'this' for this instance this.firstName = firstName (aka whats passed in) [works just like this line reads]
//instance and a copy/or version of the class like above we have a version of the class with name of jose a var name



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Data Structure: Adding Instance Methods

class Student {
    //note these arguments are all that avalible to be passed in not required in each instance
    //constructor is where can define all this. used case variable to than be used in the defined methods
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.year = year
        this.late = 0

        this.scores = []
    }
    fullName() {
        return 'Your full name is ' + this.firstName + ' ' + this.lastName
    }
    markLate() {
        this.late += 1
        if (this.late <= 3) {
            return 'You are EXPELLED!!!!'
        }
        return `number of times late is ${this.late}`
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    //def better way to write this though feel this clearly illistrates whats happening and logic and where everything is pulling form
    calcAvg() {
        let total = 0
        for (let num of this.scores) {
            total += num
        }
        return total / this.scores.length
    }

}


let draimius = new Student('draimius', 'arduous', 11) //we need to first create/define a new instance
console.log(draimius.fullName()) //then we can use the 
//this runs the function
console.log(draimius.markLate())    //here before change to markLate it didint like that i named the var and the function late (noted)
//this logs the value of variable
console.log(draimius.late)
//note use the new Student/ instance is created , can access inside of the Class with draimius as if same thing

console.log(draimius.addScore(11))
console.log(draimius.addScore(33))
console.log(draimius.scores)

console.log(draimius.calcAvg()) //gotta be a naming protocall to avoid this lengthy, or cofusin calling
console.log(draimius.addScore(100))
console.log(draimius.calcAvg())

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Data Structure: Adding Cless Methods  (STATIC = UTILITY METHOD)
// -using 'static' keyword (not common)
// -used to create utility function for an application , not related to any individual instance


class Testing {
    constructor() {

    }
    static EnrollStudent() {
        return 'STUDENT ENROLLED'

    }
}
let check = new Testing()
//note we can not use '   check.EnrollStudent() ' returns not a function

//we would need to do '     Testing.EnrollStudent() ' - for it to work
console.log(Testing.EnrollStudent())
//its specied to the original class itself and not any instance of it (version , copy) [not specific to any one instance only main]

//pupose is to organize

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Recap:
//classes are blueprint that when created make objects know as instances
//classes are creaed with the 'new' keyword
//the constructor function is a special function that gets run when the calss is initiated
//instance methods can be added to classes similar to methods in objects
//class methods can be added using the static keyword

