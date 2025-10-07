// 2
// supported input and output formats are rgb, rgb% and hex e.g
import {hexToRgb, rgbFunctionToHex, rgbFuncPattern} from "./UserStory1.mjs";

// export default function convert(color, outFormat) {
//     if (typeof color !== 'string' || typeof outFormat !== 'string') {
//         console.error('The argument(-s) must be a string');
//         return -1;
//     }
//     if (!["rgb", "rgb%", "hex"].includes(outFormat)) {
//         console.error("The outFormat must be rgb, rgb% or hex");
//         return -2;
//     }
//
//     // hex => rgb
//     if (isHexFormat(color) && outFormat === "rgb") {
//         return hexToRgb(color, false);
//     }
//
//     // hex => rgb%
//     if (isHexFormat(color) && outFormat === "rgb%") {
//         return hexToRgb(color, true);
//     }
//
//     // rgb or rgb% => hex
//     if (color.match(rgbFuncPattern) && outFormat === "hex") {
//         return rgbFunctionToHex(color);
//     }
//
//     // rgb => rgb%
//     if (color.match(strictRgbFuncPattern) && outFormat === "rgb%") {
//         // strictRgbFuncPattern ensures no % in input
//         const hex = rgbFunctionToHex(color);
//         console.log(hex)
//         return hexToRgb(hex, true);
//     }
//
//     // rgb% => rgb
//     if (color.match(rgbFuncPattern) && color.includes("%") && outFormat === "rgb") {
//         const hex = rgbFunctionToHex(color);
//         return hexToRgb(hex, false);
//     }
//
//     console.error("Input format equals outFormat or invalid combination");
//     return -2;
// }
//
//
// const isHexFormat = (color) => {
//     if (typeof color !== 'string') {
//         console.error('The argument(-s) must be a string');
//         return -1;
//     }
//     return color.match(/^#[a-fA-F0-9]{3}$/)
//         || color.match(/^#[a-fA-F0-9]{6}$/);
// };
export default function convert(color, asPercentage=false){
    if (typeof color !== 'string') {
        console.error('The argument(-s) must be a string');
        return -1;
    }
    if (color.match(rgbFuncPattern))
        return rgbFunctionToHex(color);
    else if (color.match(/^#[a-fA-F0-9]{3}|#[a-fA-F0-9]{6}/))
        return hexToRgb(color, asPercentage);
    else {
        console.error("The supported formats are Hex like #FFCC22 / #FC2 and rgb functional notation like rgb(12,42,255) or rgb(12%,125,60%)");
        return -2;
    }
}

export const primary = "#FFF";
export const secondary = "#0CC";
export const tertiary = "#0C0";