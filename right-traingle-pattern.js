let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (j = 0; j < i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);
