module.exports = function multiply(first, second) {
  //to array of numbers and reversed
  let firstInArr = first.split("").reverse();
  let secondInArr = second.split("").reverse();
  let stack = [];
  //multiply one array to another
  for (let i =0; i<firstInArr.length; i++) {
    for (let j=0; j<secondInArr.length; j++) {
        let valForPush = firstInArr[i]*secondInArr[j];
  //if there is a number on this index, concat this number to the value    
        if(stack[i+j]) {
          stack[i+j] = stack[i+j]+valForPush;
        }
        else {stack[i+j] = valForPush;}
    }
  }
  //carry over dozens and other orders
  for (let k = 0; k < stack.length; k++) {
    let num = stack[k] % 10;              // last decimal digit
    let moveUp = Math.floor(stack[k] / 10); // before last decimal digit
    stack[k] = num;                       // last decimal digit to stack
    // up all before last decimal digit
    if (stack[k + 1]) {
      stack[k + 1] += moveUp;}
    else if (moveUp != 0) {
      stack[k + 1] = moveUp;}
  }
  let result = stack.reverse().join('');
  return result;
};
