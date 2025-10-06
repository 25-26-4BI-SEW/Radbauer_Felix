// 2
// supported input formats are rgb and hex e.g
// use the following formats for outputs
// rgb => e.g. rgb(32, 200, 150)
// rgb% to convert to rgb percentages
// hex => e.g. #20C896
export default function convert(color, outFormat) {
    if (typeof color !== 'string' || typeof outFormat !== 'string') {
        console.error('The argument(-s) must be a string');
        return -1;
    }
    if (outFormat !== "hex" && outFormat !== "rgb" && outFormat !== "rgb%") {
        console.error("The outFormat must be rgb, rgb% or hex");
        return -2;
    }

}

export const primary = "#FFF";
export const secondary = "#0CC";
export const tertiary = "#0C0";