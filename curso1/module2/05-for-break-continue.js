// break e continue;

// for (let i = 1; i < 51; i++) {
//   if (i === 30) {
//     break;
//   }

//   console.log(i);
// }

for (let i = 1; i < 51; i++) {
  if (i % 5 === 0 || i % 4 === 0) {
    continue;
  }

  console.log(i);
}

console.log("----");
