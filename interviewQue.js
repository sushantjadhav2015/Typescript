
// TODO sum of all count number (gajanan sir interview question)

const response = {
  maran: {
    count: 1,
  },
  gas: {
    count: 2,
  },
  prelude: {
    count: 5,
  },
  keys: ["maran", "gas", "prelude"],
};

// For loop
let sum = 0;
for (let index = 0; index < response.keys.length; index++) {
  const elemet = response[response.keys[index]].count;
  sum = sum + elemet;
}
console.log(`using for loop`, sum);

// ForOf loop
let add = 0;
for (const iterator of response.keys) {
  add = add + response[iterator].count;
}
console.log(`using for of loop`, add);

// for in loop
let total = 0;
for (const key in response) {
  if (Object.hasOwnProperty.call(response, key)) {
    const x = response[key];
    if (typeof x.count == "number") {
      total += x.count;
    }
  }
}
console.log(`Using for In loop`, total);

// using for Each method
let tot = 0;
response.keys.forEach((element) => {
  tot = tot + response[element].count;
});
console.log(`Using for Each loop`, tot);
