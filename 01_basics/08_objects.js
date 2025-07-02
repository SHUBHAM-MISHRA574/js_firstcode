let mysbl=Symbol('key1')
const user={
    Name:"shubham",
    [mysbl]:"mykey2",
    age:18,
    location:"Buxar",
    email:"shubham@gmail.com",

};
console.log(user.Name);
;
console.log(user[mysbl]);
console.log(typeof user[mysbl]);
console.log(user);
///----->freeze will stop the furthur change in the object



// Object.freeze(user);
// user.Name="mithhu"
// console.log(user.Name)

//<-----------------------------

//---------------->declare a function as a key of the object<-----------------

user.me=function(){
    console.log("hello world!");
    
}

user.me();

//----------->refer the key value of the user(object) to the function<----------------------

user.me2=function(){
    console.log(`hello World this is ${this.Name}`);
    
}
user.me2();
//-------------->So here this is use to get info about the key of the object user <-----------------

