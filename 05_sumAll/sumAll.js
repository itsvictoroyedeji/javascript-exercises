const sumAll = function(start, end) {
  let sum = 0;

// Here's one way:
//   if (Number.isInteger(start) && Number.isInteger(end) ) {
//     if (start > 0 && end > 0) {
//       if (start < end) {
//         for (let i = start ; i <= end ; i++) {
//           sum += i;
//         }
//       } else if (start > end) {
//         for (let i = start ; i >= end ; i--) {
//           sum += i;
//         }
//       } else {
//         sum = 'ERROR';
//       } 
//     } else {
//       sum = 'ERROR';
//     }
//   } else {
//     sum = 'ERROR';
//   }
//   return sum;
// }

  // Here's the other:
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return 'ERROR';
  }
  if (start < 0 || end < 0) {
    return 'ERROR';
  }

  if (start < end) {
    for (let i = start ; i <= end ; i++) {
      sum += i;
    }
  } else {
    for (let i = start ; i >= end ; i--) {
      sum += i;
    }
  }
  return sum;
}
// Do not edit below this line
module.exports = sumAll;
