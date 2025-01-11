/**
 * Converts a text message into ASCII art and applies the specified text and background colors.
 *
 * @param {object} options - The options for text and background colors.
 * @param {string} options.textColor - The text color.
 * @param {string} options.bgColor - The background color.
 * @param {boolean} options.brightText - Whether to use a bright version of the text color.
 * @param {boolean} options.brightBg - Whether to use a bright version of the background color.
 * @param {string} message - The message to be converted to ASCII art.
 */
import figlet from 'figlet';
import chalk from 'chalk';
import validator from '../others/validator.js';

export default function textConverter(options, message) {
    validator(options.textColor, options.bgColor, options.brightText, options.brightBg, function (bgColor, textColor) {
        console.log(chalk[textColor][bgColor](figlet.textSync(message)));
    });
}
