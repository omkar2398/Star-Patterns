let n = 5;
let string = "";

for (i = 1; i <= n; i++) {
  for (j = 0; j <= n - i; j++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
