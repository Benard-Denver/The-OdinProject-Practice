let data = 45;
let datCopy = data;
datCopy = 50;

console.log(data); // 45
console.log(datCopy); // 50
// making changes to data copy won't affect data.

const object = { data: 43 };
const objCopy = object;

objCopy.data = 50;
console.log(objCopy);
console.log(object);
// making changes to object copy changes the object it is refering to.

let arr = [5, 2, 1, -10, 8];

function descending(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  if (a === b) return 0;
}

arr.sort(descending);
console.log(arr);