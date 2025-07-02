// exact date and time 
const myDate=new Date()
console.log(myDate);
// exact date and time in string lets see
console.log(myDate.toString());///

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

//---->to create the time and date by own we do this--->

const myCreatedDate=new Date(2023,0,28)
// In javascript month starts from zero  means 0->jan,1->feb,.....,11->dec

console.log(myCreatedDate.toLocaleString());

//------->TimeStamp<-------
// after consoling it we will get a very big value which is in miliseconds.
let myTimestamp=Date.now()
console.log(myTimestamp)

// To get time from our own created date we just use ".getTime()" because Date() itself a object and we get time from it very easily by .getTime().
//-------------->Let's see how<-------------
console.log(myCreatedDate.getTime());

//----------------><-----------------------//
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());

//------------>we can customise the dates also using  "toLocalString()" as<---------------

newDate.toLocaleDateString('default',{
    month:"long"
})
console.log(newDate);



