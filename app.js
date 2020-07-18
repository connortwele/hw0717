//falsy bouncer
function bouncer(arr) {
        var newArray = [];
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) newArray.push(arr[i]);
        }
        return newArray;
      
  }
  
  bouncer([7, "ate", "", false, 9]);
  console.log(  bouncer([7, "ate", "", false, 9]));

 //chunky monkey 
  function chunkArrayInGroups(arr, size) {
    var emptyArray = [];
    for (var i = 0; i < arr.length; i += size) {
      emptyArray.push(arr.slice(i, i + size));
    }
    return emptyArray;
  }
  
   
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//learn Object Oriented Programming: Create a Basic JavaScript Object

let dog = {
    name: 'Dawg',
    numLegs: 3
};
//Use Dot Notation to Access the Properties of an Object
 console.log(dog.name, dog.numLegs);

 //Create a Method on an ObjectPassed
 let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){ return 'This dog has ' + dog.numLegs + ' legs.'}

};
dog.sayLegs();


//Make Code More Reusable with the this Keyword

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//Define a Constructor FunctionPassed

function Dog (){
  this.name = "Dawg";
  this.color = "Gold";
  this.numLegs = 3;
}

//Use a Constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line


let hound = new Dog();

//Extend Constructors to Receive Arguments
function Dog(name,color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;

}

let terrier = new Dog();
terrier.name = "Terry";
terrier.color = "Brown";

//Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House;

//Understand Own PropertiesPassed

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}


//Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;



// Only change code above this line
let beagle = new Dog("Snoopy");


  