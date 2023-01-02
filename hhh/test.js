let iniArray = [18,28,38,19,39,30,49,11,2,4,10,6,7,8,9,3,5,1,2]

for (let index = 0; index < iniArray.length; index++) {
    for (let i = 0; i < iniArray.length; i++) {
        if (iniArray[i]>iniArray[i+1]) {
            let temp = iniArray[i]
            iniArray[i]=iniArray[i+1]
            iniArray[i+1]=temp
        }
    }
}
console.table(iniArray)


// let iniArray = [3, 5, 1, 2] //=> [1,2,3,5,7,9]

//   for (let i = 0; i < iniArray.length; i++) {
//     if (iniArray[i] > iniArray[i + 1]) {
//       let temp = iniArray[i];
//       iniArray[i] = iniArray[i + 1];
//       iniArray[i + 1] = temp;
//     }
//   }


// console.log(iniArray);