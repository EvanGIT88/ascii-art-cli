/**
 * Converts an image into ASCII art and applies the specified text and background colors.
 *
 * @param {string} filePath - The path to the image file to be converted.
 * @param {object} options - The options for text and background colors.
 * @param {string} options.asciiColor - The color of the ASCII characters.
 * @param {string} options.bgColor - The background color for the ASCII art.
 * @param {boolean} options.brightAscii - Whether to use a bright version of the ASCII character color.
 * @param {boolean} options.brightBg - Whether to use a bright version of the background color.
 */
import chalk from "chalk";
import validator from "../others/validator.js";
import fs from "fs";
import { Jimp } from "jimp";
import { intToRGBA } from "@jimp/utils";

export default async function imageConverter(filePath, options) {
    const asciiChars = '@%#*+=-:. ';
    let asciiArt = '';

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        console.log('File does not exist.');
        process.exit(0);
    }

    // Read and process the image
    const image = await Jimp.read(filePath);
    image.resize({ w: 80, h: 40 }).greyscale();

    // Convert image pixels to ASCII characters
    for (let y = 0; y < image.bitmap.height; y++) {
        for (let x = 0; x < image.bitmap.width; x++) {
            const pixel = intToRGBA(image.getPixelColor(x, y));
            const brightness = (pixel.r + pixel.g + pixel.b) / 3;
            const index = Math.floor((brightness / 255) * (asciiChars.length - 1));
            asciiArt += asciiChars[index];
        }
        asciiArt += '\n';
    }

    // Validate and apply colors using chalk
    validator(options.asciiColor, options.bgColor, options.brightAscii, options.brightBg, function (bgColor, asciiColor) {
        console.log(chalk[asciiColor][bgColor](asciiArt));
    });
}
