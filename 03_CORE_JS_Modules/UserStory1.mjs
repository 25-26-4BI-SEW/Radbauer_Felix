// -1 is returned if a/the parameter has the wrong type
// -2 is returned if a/the parameter has a wrong format

export const rgbFuncPattern = /rgb\(\d{1,3}%?,\d{1,3}%?,\d{1,3}%?\)/;

// 1.1
export function rgbToHex(r, g, b) {
    if (![r, g, b].every(n => Number.isInteger(n) && n > 0)) {
        console.error("Values for r, g and b must be poitive integers.");
        return -1;
    }
    const toHex = (n) => {
        const hex = String(parseInt(n, 16)).toUpperCase();
        return hex.length === 1 ? `0${hex}` : hex;
    }
    return "#" + toHex(r) + toHex(g) + toHex(b);
}

// 1.2
export function rgbFunctionToHex(rgbFunc) {
    if (typeof rgbFunc !== 'string') {
        console.error('The argument must be a string');
        return -1;
    }
    if (!rgbFunc.match(rgbFuncPattern)) {
        console.error("The argument must be a functional rgb() notation like 'rgb(187,22%,88)'");
        return -2;
    }

    rgbFunc = rgbFunc.replace("rgb(", "").replace(")", "");
    const colorValues = rgbFunc.split(",");
    let hexString = "";

    for (const cV of colorValues) {
        const trimmed = cV.trim();
        if (trimmed.endsWith("%")) {
            let percent = parseFloat(trimmed.replace("%", ""));
            let val = Math.round(percent * 2.55);
            hexString += val.toString(16).padStart(2, "0").toUpperCase();
        } else {
            const val = Number(trimmed);
            hexString += val.toString(16).padStart(2, "0").toUpperCase();
        }
    }

    return "#" + hexString;
}

// 1.3
export function hexToRgb(hexString, isPercentage) {

    if (typeof hexString !== 'string') {
        console.error('The argument must be a string');
        return -1;
    }

    hexString = hexString.substring(1);

    if (hexString.match(/^[a-fA-F0-9]{3}$/))
        hexString = shortHexToLongHex(hexString);

    if (!hexString.match(/^[a-fA-F0-9]{6}$/)) {
        console.error('The argument must be a hexadecimal value e.g #FF22CC or use the short notation #F2C (case-insensitive)');
        return -2;
    } else {
        let result = "rgb(";
        const r = parseInt(hexString.substring(0, 2), 16),
            g = parseInt(hexString.substring(2, 4), 16),
            b = parseInt(hexString.substring(4, 6), 16);

        if (!isPercentage) {
            result += `${r}, ${g}, ${b})`;
            return result;
        } else {
            result += `${Math.round(r / 2.56)}%, ${Math.round(g / 2.56)}%, ${Math.round(b / 2.56)}%)`;
            return result;
        }
    }
}

const shortHexToLongHex = (hexString) => {
    let result = "";
    for (let i = 0; i < hexString.length * 2; i++) {
        result += hexString.charAt(i);
        result += hexString.charAt(i);
    }
    return result;
}