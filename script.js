let user = {
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
console.log(user.getUser());
