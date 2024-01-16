import * as plugin from "tailwindcss/plugin";
import { defaultSettings } from "../consts/defaultSettings";
import { generateClampValues } from "../utils/generateClampValues";
export const FluidTypographyPlugin = plugin.withOptions(function (customOptions) {
    return function ({ addUtilities, e }) {
        const { minScreenWidth = 30, maxScreenWidth = 80, unit = "rem", prefix = "", suffix = "-fluid", values, } = Object.assign(Object.assign({}, defaultSettings), customOptions);
        const generatedUtilities = values.map(({ fontSize, lineHeight, letterSpacing, key }) => {
            const classes = {};
            if (fontSize) {
                const fluidFontSize = generateClampValues(fontSize, minScreenWidth, maxScreenWidth, unit);
                classes.fontSize = fluidFontSize;
            }
            if (lineHeight) {
                const moltenLineHeight = generateClampValues(lineHeight, minScreenWidth, maxScreenWidth, unit);
                classes.lineHeight = moltenLineHeight;
            }
            if (letterSpacing) {
                const rubberyTracking = generateClampValues(letterSpacing, minScreenWidth, maxScreenWidth, unit);
                classes.letterSpacing = rubberyTracking;
            }
            return {
                [`.${e(`${prefix}text-${key}${suffix}`)}`]: classes,
            };
        });
        addUtilities(generatedUtilities);
    };
});
