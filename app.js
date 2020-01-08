const accum = (s) => {
    // split array into a string first and save as a variable
    let arr = s.split('');
    return arr.map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())).join('-');
}

console.log(accum('bait'));