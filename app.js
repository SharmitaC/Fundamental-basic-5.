// JavaScript Document
myArray = ["variable.name", "variable.age", "variable.genre"];
variable.name = "Mike";
console.log(treat_it_as_variable_name(myArray[0]));

var person = {name:"Tahir Akhtar", occupation: "Software Development" };
var p1="name";
var p2="occupation";
console.log(person[p1]); //will print Tahir Akhtar
console.log(person[p2]); //will print Software Development

var tahir=person;
console.log(eval('person.occupation'));//will print Software Development
console.log(eval('tahir.occupation'));//will print Software Development

var bob = {
    firstName: "Bob",
    lastName: "Jones",

    phoneNumber: "(650) 777 - 7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",



 phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson (person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactSize = contacts.length;
    for (i = 0; i < contactSize; i++) {
        printPerson(contacts[i]);
    }
}

var search = function(lastName) {
    var contactSize = contacts.length;
    for(i = 0; i < contactSize; i++){
     if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
    }
};

var add  = function(firstName, lastName, email, telephone)
{
var contactSize = contacts.length;
var Person = new Object();
Person.firstName = firstName;
Person.lastName = lastName;
Person.email = email;
Person.telephone = telephone;
contacts[contactSize] = Person;


};

list();
search("Jones");
var response1 = prompt("First Name?");
var response2 = prompt("Last Name?");
var response3 = prompt("Email?");
var response4 = prompt("Telephone No.?");
add(response1, response2, response3, response4);



// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
name: "Susan Jordan",
age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan.name = 'Susan Jordan';
susan.age = 24;