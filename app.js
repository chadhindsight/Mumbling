const accum = (s) => {
    //Split array into a string first and save that string value as a variable
    let arr = s.split('');
    
    return arr.map((y, index) => y.toUpperCase() + Array(index + 1).join(y.toLowerCase())).join('-');
}

console.log(accum('stadium'));