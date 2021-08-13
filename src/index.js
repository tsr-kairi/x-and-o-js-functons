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

// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

// function XO(str) {
//   var a = str.replace(/x/gi, ''),
//       b = str.replace(/o/gi, '');
//   return a.length === b.length;
// }

// function XO(str) {
//   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

// function XO(str) {
//   return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
// }

// const XO = str => {
//   let x = (str.match(/x|X/g) || []).length;
//   let o = (str.match(/o|O/g) || []).length;
//   return x === o;
// }
