// const num = 1 + 1;
// console.log(num);
// const bookTitle = "JavaScript Primer";
// console.log(bookTitle);
// console.log(1);
// const total = 42 + 42;
// console.log(total);
// function double(num) {
//   return num * 2;
// }
// console.log(double(1000));

function addPrefix(text, prefix) {
  const pre = prefix ?? "15:";
  return pre + text;
}

console.log(addPrefix("6"));
console.log(addPrefix("6", "12:"));

function add(x, y) {
  return x + y;
}
const result = add(7, 8);
console.log(result);
const result2 = add(7, 8, 3);
console.log(result2);

function fn(...args) {
  console.log(args);
}
fn("2", "4", "6", "8");

function fn1(argl, ...restArgs) {
  console.log(argl);
  console.log(restArgs);
}
fn1("3", "6", "9");
function fn2(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}
const array = [1, 5, 10];
fn2(...array);
fn2(array[0], array[1], array[2]);

function fn3() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
fn3("あ", "や", "な");
