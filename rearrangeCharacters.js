// 

var rearrangeChar = function(strInput) {
  debugger;
  var output = [];
  var arrInput = strInput.split('');
  var arrSorted = arrInput.slice().sort();
  output.push(arrSorted[0]);
  arrSorted.shift();

  for (var i = 0 ; i < arrSorted.length; i++) {
    var b = Math.random();
    if(arrSorted[i] !== output[0]) {
      output.unshift(arrSorted[i]); 
      arrSorted.splice(i, 1);
      i=0;
    } else if (arrSorted[i] !== output[output.length-1]) {
      output.push(arrSorted[i]);
      arrSorted.splice(i, 1);
      i=0;

    } else {
      for (var j = 1; j < output.length-1; j++) {
        if(output[j-1] !== arrSorted[i] && output[j+1] !== arrSorted[i]) {
          output.splice(j, 1, arrSorted[i]);
          arrSorted.splice(i, 1);
            i=0;

        } 
        if(j === output.length-2) {
          i = 0;
          continue;
        }
      }
    }
    // for (var j = 0 ; j < output.length; j++) {
    // }
  }

  return output.join('');


}

// var rearrangeChar = function(strInput) {
//   // debugger;
//   var output = '';
//   var arrInput = strInput.split('');

//   var arrSorted = arrInput.slice().sort();

//   // traverse array in for loop
//   var i = 0 ; //output = 'abaca'
//   while (arrSorted) {
//     // debugger;
//     if(output.length < 1 || arrSorted[i] !== output[output.length-1]) {
//       output += arrSorted[i]; 
//       console.log('output', output);
//       arrSorted.splice(i, 1);
//       i = 0;
//     } else {
//       i++;
//     }

//     if(i === arrSorted.length && arrSorted[arrSorted.length-1] === output[output.length-1]) {
//       console.log('something')
//       break;
//     }

    
//   }; // [aa] // i = 0
//   console.log('-->output',output.length);
//   console.log('-->arrInput',arrInput.length);

//   console.log('output', output)

//   console.log('arrSorted', arrSorted);

//   if(arrInput.length === output.length) {
//     return output;
//   } else {
//     return null;
//   }
// }
//   // output += first element in array
//   // aaabc

