import * as plugin from "tailwindcss/plugin";
import { defaultSettings } from "./consts/defaultSettings";
import { PluginConfig } from "./types/PluginConfig";
import { generateClampValues } from "./utils/generateClampValues";
import { CSSRuleObject } from "tailwindcss/types/config";

module.exports = plugin.withOptions(function (customOptions: PluginConfig) {
  return function ({ addUtilities, e }) {
    const {
      minScreenWidth = 30,
      maxScreenWidth = 80,
      unit = "rem",
      prefix = "",
      suffix = "-fluid",
      values,
    } = {
      ...defaultSettings,
      ...customOptions,
    };

    const generatedUtilities = values.map(
      ({ fontSize, lineHeight, letterSpacing, key }) => {
        const classes: CSSRuleObject | CSSRuleObject[] = {};

        if (fontSize) {
          const fluidFontSize = generateClampValues(
            fontSize,
            minScreenWidth,
            maxScreenWidth,
            unit
          );

          classes.fontSize = fluidFontSize;
        }

        if (lineHeight) {
          const moltenLineHeight = generateClampValues(
            lineHeight,
            minScreenWidth,
            maxScreenWidth,
            unit
          );

          classes.lineHeight = moltenLineHeight;
        }

        if (letterSpacing) {
          const rubberyTracking = generateClampValues(
            letterSpacing,
            minScreenWidth,
            maxScreenWidth,
            unit
          );

          classes.letterSpacing = rubberyTracking;
        }

        return {
          [`.${e(`${prefix}text-${key}${suffix}`)}`]: classes,
        };
      }
    );

    addUtilities(generatedUtilities);
  };
});
