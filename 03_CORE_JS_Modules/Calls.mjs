import {hexToRgb, rgbFunctionToHex, rgbToHex} from "./UserStory1.mjs";
import convert, {primary, secondary, tertiary} from "./UserStory2.mjs";

// 1.1
console.log("\nUser Story 1.1:\n");
console.log(rgbToHex(12, 160, 52) + "\n");
console.log(rgbToHex(-1, 12, 200) + "\n");
console.log(rgbToHex(32, 200, 150) + "\n");

// 1.2
console.log("\nUser Story 1.2:\n");
console.log(rgbFunctionToHex("ff") + "\n");
console.log(rgbFunctionToHex(12) + "\n");
console.log(rgbFunctionToHex("rgb(122,22,65%)") + "\n");
console.log(rgbFunctionToHex("rgb(187,22%,88)") + "\n");


// 1.3
console.log("\nUser Story 1.3:\n");
console.log(hexToRgb("#fa3", false) + "\n");
console.log(hexToRgb("#fa3", true) + "\n");


// 2
console.log("\nUser Story 2:\n");
console.log(convert("#C4A") + "\n");
console.log(convert("#f11") + "\n");
console.log(convert("rgb(12%,7%,0%)") + "\n");
console.log(convert("rgb(50,50,50)") + "\n");
console.log(convert("rgb(12,42,140)") + "\n");
console.log(convert("rgb(50%,50%,50%)") + "\n");



// 3
const colors = [primary, secondary, tertiary];
console.log(colors);
let convertedColors = [];
colors.forEach(color => {
   convertedColors.push(convert(color));
});
console.log(convertedColors)
