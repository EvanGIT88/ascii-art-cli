// Import allowed colors and background colors from the allowedColors.js file
import { allowedColors, allowedBg } from "./allowedColors.js";

/**
 * Validates the provided text and background colors and executes an action if valid.
 *
 * @param {string} textColorRaw - The raw text color provided by the user.
 * @param {string} bgColorRaw - The raw background color provided by the user.
 * @param {boolean} brightText - Whether to use a bright version of the text color.
 * @param {boolean} brightBg - Whether to use a bright version of the background color.
 * @param {function} action - The action to execute if the colors are valid.
 *
 * @returns {object} - An object indicating the validation status of text and background colors.
 */
export default function validator(textColorRaw, bgColorRaw, brightText, brightBg, action) {
    // Format text color based on brightness option
    const textColor = brightText
        ? (textColorRaw.toLowerCase() + "Bright")
        : textColorRaw.toLowerCase();

    // Format background color based on brightness option
    let bgColor = "bg" + String(bgColorRaw).charAt(0).toUpperCase() + String(bgColorRaw).slice(1).toLowerCase();
    bgColor = brightBg ? bgColor + "Bright" : bgColor;

    // Validate the colors
    const isValid = {
        textColor: allowedColors.includes(textColor),
        bgColor: allowedBg.includes(bgColor),
        all: allowedColors.includes(textColor) && allowedBg.includes(bgColor),
    };

    // Execute the action if both colors are valid
    if (isValid.all) {
        action(textColor, bgColor);
    } else if (!isValid.bgColor && !isValid.textColor) {
        // Log error if both colors are invalid
        console.log(`${bgColor} and ${textColor} is invalid background and text/ascii color`);
    } else {
        // Log specific error for invalid text or background color
        const finalError = isValid.bgColor
            ? `${textColorRaw} is invalid text/ascii color`
            : `${bgColorRaw} is invalid background color`;
        console.log(finalError);
    }

    return isValid;
}
