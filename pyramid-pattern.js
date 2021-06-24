let n = 5; // you can take input from prompt or change the value
let string = "";

// External loop
for (let i = 1; i <= n; i++) {
  for (j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//1<=0
//2<=2
//3<=4
//4<=6
//5<=8
