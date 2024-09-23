global.name = "srujan";
function makeUser() {
  obj = {
    name: "john",
    ref: this,
  };
  return obj;
}
var user = makeUser();
console.log(user);
console.log(user.ref.name);

var name;
global.name = "Sai";

console.log(global.name);