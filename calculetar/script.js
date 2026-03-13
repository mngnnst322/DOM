const input = document.getElementById("input");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const plus = document.getElementById("plus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const nine = document.getElementById("nine");
const percentage = document.getElementById("percentage");
const divide = document.getElementById("divide");
const times = document.getElementById("times");
const minush = document.getElementById("minust");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const bracke = document.getElementById("bracke");
seven.addEventListener("click", () => {
  input.value += "7";
});
eight.addEventListener("click", () => {
  input.value += "8";
});
plus.addEventListener("click", () => {
  input.value += "+";
});
one.addEventListener("click", () => {
  input.value += "1";
});
two.addEventListener("click", () => {
  input.value += "2";
});
three.addEventListener("click", () => {
  input.value += "3";
});
four.addEventListener("click", () => {
  input.value += "4";
});
five.addEventListener("click", () => {
  input.value += "5";
});
six.addEventListener("click", () => {
  input.value += "6";
});
zero.addEventListener("click", () => {
  input.value += "0";
});
nine.addEventListener("click", () => {
  input.value += "9";
});

minus.addEventListener("click", () => {
  input.value += "-";
});

dot.addEventListener("click", () => {
  input.value += ".";
});
percentage.addEventListener("click", () => {
  input.value += "%";
});
// minus.addEventListener("click", () => {
//   input.value += "(-)";
// });
times.addEventListener("click", () => {
  input.value += "*";
});
divide.addEventListener("click", () => {
  input.value += "/";
});
equal.addEventListener("click", () => {
  input.value = eval(input.value);
});
clear.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
bracke.addEventListener("click", () => {
  input.value = input.value.slice(0, -input);
});
