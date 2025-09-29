import {rgbToHex, rgbFunctionToHex, hexToRgb} from "./Functions.js";

// 1.1
console.log("\nUser Story 1.1:\n");
console.log(rgbToHex(12, 160, 52)+"\n");
console.log(rgbToHex(-1, 12, 200)+"\n");

// 1.2
console.log("\nUser Story 1.2:\n");
console.log(rgbFunctionToHex("ff")+"\n");
console.log(rgbFunctionToHex(12)+"\n");
console.log(rgbFunctionToHex("rgb(122,22,65%)")+"\n");
console.log(rgbFunctionToHex("rgb(187,22%,88)")+"\n");

// 1.3
console.log("\nUser Story 1.3:\n");
console.log(hexToRgb("#ffaa33", false)+"\n");
console.log(hexToRgb("#ffaa33", true)+"\n");
