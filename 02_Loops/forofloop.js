const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
    
}

const greet="Hello jii"

for (const num of greet) {
    console.log(`Each char is${num}`);
    
}

///   Maps

const map=new Map()
map.set('IN','India')
map.set('US','United States')
map.set('FR','France')
console.log(map);


//  For-of loop in maps

for (const key of map) {
    console.log(key);
    
    
}


// better way to use for-of loop  for the maps 

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}



// using for-of loop for the objects


const obj={
    'game1':'NFS',
    'game2':'spiderman'
}
for (const [key,value] of obj) {

    console.log(Key,':-',value);   // this object is not iterrable for this structrue of for-of loop
    
    
}
