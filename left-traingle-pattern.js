let n = 5;
let string = "";

for (i = 1; i <= n; i++) {
  //printing spaces
  for (j = 0; j < n - i; j++) {
    string += " ";
  }
  //printing stars
  for (k = 0; k < i; k++) {
    string += i;
  }
  string += "\n";
}

console.log(string);
