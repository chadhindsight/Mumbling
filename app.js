const accum = (s) => {
    //Split array into a string first and save that string value as a variable
    let arr = s.split('');
    
    return arr.map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())).join('-');
}

console.log(accum('waiter'));