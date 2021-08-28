const map = new Map();

map.set("userid", 1);
map.set(undefined, "default");
map.set("default", undefined);

console.log(map.get(undefined));
console.log(map.get("default"));

console.log(map.has("userid"));

map.set("userid", 2);
