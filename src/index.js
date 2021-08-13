function XO(str) {
  // Setting variable for x and o.
  let x = 0;
  let o = 0;
  //  Looping through 'str'.
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "o") {
      o++;
    } else if (str[i].toLowerCase() === "x") {
      x++;
    }
  }
  return x === o ? true : false;
}

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
