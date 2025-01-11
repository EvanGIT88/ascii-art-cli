#!/usr/bin/env node

// Import the Commander.js library to create a CLI interface
import { program } from 'commander';

// Import custom modules for text and image conversion to ASCII art
import textConverter from './converter/fromText.js';
import imageConverter from './converter/fromImage.js';

/**
 * Define the "text" command for converting text to ASCII art.
 * This command accepts the following options:
 * - `--text-color <textColor>`: Set the color of the ASCII text (default: 'green').
 * - `--bg-color <bgColor>`: Set the background color of the ASCII art (default: 'black').
 * - `--bright-text`: Use a bright version of the text color.
 * - `--bright-bg`: Use a bright version of the background color.
 */
program
    .command('text <message>') // Define the "text" command with a required message argument
    .description('Convert text to ASCII art') // Description of the command
    .option('-t, --text-color <textColor>', 'Customize text color', 'green')
    .option('-b, --bg-color <bgColor>', 'Customize background color', 'black')
    .option('--bright-text', 'Edit the text color to bright version')
    .option('--bright-bg', 'Edit the background color to bright version')
    .action((message, options) => {
        // Call the textConverter function with the provided options and message
        textConverter(options, message);
    });

/**
 * Define the "list" command to display the allowed colors for text and background.
 * This command does not accept any arguments or options.
 */
program
    .command("list") // Define the "list" command
    .action(() => {
        console.log('Allowed Colors:');
        for (let i = 0; i < 8; i++) {
            console.log(`${i + 1}. ${allowedColors[i]}`); // Display each allowed color with its index
        }
    });

/**
 * Define the "image" command for converting an image to ASCII art.
 * This command accepts the following options:
 * - `--ascii-color <asciiColor>`: Set the color of the ASCII text (default: 'green').
 * - `--bg-color <bgColor>`: Set the background color of the ASCII art (default: 'black').
 * - `--bright-ascii`: Use a bright version of the ASCII text color.
 * - `--bright-bg`: Use a bright version of the background color.
 */
program
    .command('image <path>') // Define the "image" command with a required path argument
    .description('Convert an image to ASCII art') // Description of the command
    .option('-a, --ascii-color <asciiColor>', 'Customize text color', 'green')
    .option('-b, --bg-color <bgColor>', 'Customize background color', 'black')
    .option('--bright-ascii', 'Edit the text color to bright version')
    .option('--bright-bg', 'Edit the background color to bright version')
    .action(async (path, options) => {
        // Call the imageConverter function with the provided path and options
        await imageConverter(path, options);
    });

// Parse the command-line arguments and execute the corresponding command
program.parse(process.argv);
