class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    toString(){
        return `{Name: ${this.name}, age: ${this.age}}`;
    }
}


//Write map, forEach, reduce and filter implementations here.










//Initialising a list of persons
let people = [new person("A", 20), new person("B", 25), new person("C", 40), new person("D", 65), new person("K", 10), new person("E", 40)];
console.log(people.toString());
const peopleList = people.toString();

//map Test
const newPeople = people.map((element) => {
    const newPerson = new person(element.name, element.age);
    newPerson.age +=2;
    return newPerson;
});
console.log(newPeople.toString());
const agedList = "The ages of the people in party after 2 years will be: " + newPeople.toString();


//filter Test
const adults = people.filter((element, index) => element.age >=18)
console.log(adults.toString());
const adultList = "The list of adults in the party is: " + adults.toString();


//forEach Test
const ages = [];
people.forEach(element => {
    ages.push(element.age);
});
console.log(ages);
const ageList = "The ages of the people in party are: " + ages.toString();


//reduce Test
const totalAge = ages.reduce((totalYet, currentAge) => totalYet + currentAge);
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