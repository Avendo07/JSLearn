class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `{Name: ${this.name}, age: ${this.age}}`;
    }
}


//Write map, forEach, reduce and filter implementations here.

//forRach implementation
function forEach(list, callback) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        callback(element, index);
    }
}

//map implementation
function map(list, callback) {
    let newList = [];
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        newList[index] = callback(element, index);
    }
    return newList;
}

//filter implementation
function filter(list, callback) {
    let newList = [];
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (callback(element, index)) {
            newList[newList.length] = element;
        } else {
            continue;
        }
    }
    return newList;
}

//reduce implementation
function reduce(list, callback, initialValue = 0) {
    let previousValue = initialValue;
    for (let index = 0; index < list.length; index++) {
        const currentValue = list[index];
        console.log(currentValue);
        previousValue = callback(previousValue, currentValue, index);
    }
    return previousValue;
}


//Initialising a list of persons
let people = [new person("A", 20), new person("B", 25), new person("C", 40), new person("D", 65), new person("K", 10), new person("E", 40)];
console.log(people.toString());
const peopleList = people.toString();


//map Test
const newPeople = map(people, (element) => {
    const newPerson = new person(element.name, element.age);
    newPerson.age += 2;
    return newPerson;
});
/* const newPeople = people.map((element) => {                                                                      //Original Implementation
    const newPerson = new person(element.name, element.age);
    newPerson.age +=2;
    return newPerson;
}); */
console.log(newPeople.toString());
const agedList = "The ages of the people in party after 2 years will be: " + newPeople.toString();


//filter Test
const adults = filter(
        people, (element, index) => element.age >= 18
    );
/* const adults = people.filter(                                                                                    //Original Implementation
        (element, index) => element.age >=18
    ); */
console.log(adults.toString());
const adultList = "The list of adults in the party is: " + adults.toString();


//forEach Test
const ages = [];
forEach(people, (element) => {
    ages.push(element.age);
});
/* people.forEach(element => {                                                                                      //Original Implementation
    ages.push(element.age);
}); */
console.log(ages);
const ageList = "The ages of the people in party are: " + ages.toString();


//reduce Test
const totalAge = reduce(ages, (totalYet, currentAge) => totalYet + currentAge);
/* const totalAge = ages.reduce(                                                                                    //Original Implementation
        (totalYet, currentAge) => totalYet + currentAge
    ); */                                
console.log(totalAge);
const totalAgeNumber = "The total of age of everyone in the party is: " + totalAge;



//Appending to the HTML of p tag
let text = "The following is the list of people in a party: ";
const newLine = "<br><br>";

text = newLine + text + newLine + peopleList + newLine + agedList + newLine + adultList + newLine + ageList + newLine + totalAgeNumber;

const paraReference = document.querySelector('p');
paraReference.innerHTML += text;







/* let naman = new person("Namen", 33);             //The console always shows the updated values of the object and not the logged object
console.log(naman);
naman.age = 22;
console.log(naman); */



/* let user = {
    name: "Naman",
    age: 35,
    email: "naman@gmail.com",
    location: "Delhi",
    blogs: ["Pre Reads", "Java Script", "Flutter"],
    logBlogs: function(){
        this.blogs.forEach((blog) => console.log(blog));
    },
    getUser: function(){
        return this;
    },
    login: function(){                                                      
        console.log(`${this.name} has been logged in`);
    },
    logout: () => {                                                                 //Name is not printed here as the window object doesn't have one
        console.log(`${this.name} has been logged out`);
    },
    // getUser: () => this         //Will not work, will return window object as shown abovegi
};

user.login();
user.logout();
user.logBlogs();
console.log(user.getUser()); */