// 2
// supported input and output formats are rgb, rgb% and hex
import {hexToRgb, rgbFunctionToHex, rgbFuncPattern} from "./UserStory1.mjs";

export default function convert(color, asPercentage=false){
    if (typeof color !== 'string') {
        console.error('The argument(-s) must be a string');
        return -1;
    }
    if (color.match(rgbFuncPattern)){
        return rgbFunctionToHex(color);
    }
    else if (color.match(/^#[a-fA-F0-9]{3}|#[a-fA-F0-9]{6}/))
        return hexToRgb(color, asPercentage);
    else {
        console.error("The supported formats are Hex (e.g. '#FFCC22' / '#FC2') and rgb functional notation (e.g. 'rgb(12,42,255)' / 'rgb(12%,125,60%)')");
        return -2;
    }
}

export const primary = "#FFF";
export const secondary = "#0CC";
export const tertiary = "#0C0";