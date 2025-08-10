const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'

}

// for-in loop
for (const key in myObj) {
     console.log(`${key} shortcut is for ${myObj[key]}`);
     
}