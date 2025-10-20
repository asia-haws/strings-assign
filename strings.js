function isString(input) {
  return typeof input === "string";
}

console.log(isString("abc"));
console.log(isString(190));

function isBlankString(str) {
  return typeof str === "string" && str.trim().length === 0;
}

console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));

function capitalizeFirst(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirst("abcdef"));

function abbr(name) {
  const parts = name.trim().split(" ");
  if (parts.length < 2) return name;
  return `${parts[0]} ${parts[1].charAt(0).toUpperCase()}.`;
}

console.log(abbr("Ryan Curtis"));

function truncate(sentence, length) {
  if (sentence.length <= length) return sentence;
  return sentence.slice(0, length) + "...";
}

console.log(truncate("I am a long sentence", 6));

const str = "The practitioners grappled on the road side!";
const result = str.slice(str.indexOf("g"));
console.log(result);
