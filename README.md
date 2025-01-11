# ASCII Art Converter

## Overview
The ASCII Art Converter is a CLI (Command-Line Interface) tool that transforms text and images into colorful ASCII art. It provides options to customize text and background colors and supports both standard and bright color variations.

## Features
- Convert text to ASCII art.
- Convert images to ASCII art.
- Fully customizable text and background colors.
- Support for bright color variations.
- List all available color options.

## Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd ascii-art-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make the CLI executable:
   ```bash
   chmod +x index.js
   ```

## Usage

### Commands

#### Convert Text to ASCII Art
```bash
./index.js text <message> [options]
```
**Options:**
- `-t, --text-color <textColor>`: Customize text color (default: `green`).
- `-b, --bg-color <bgColor>`: Customize background color (default: `black`).
- `--bright-text`: Use bright version of the text color.
- `--bright-bg`: Use bright version of the background color.

Example:
```bash
./index.js text "Hello, ASCII!" -t blue -b white --bright-text
```

#### Convert Image to ASCII Art
```bash
./index.js image <path> [options]
```
**Options:**
- `-a, --ascii-color <asciiColor>`: Customize ASCII character color (default: `green`).
- `-b, --bg-color <bgColor>`: Customize background color (default: `black`).
- `--bright-ascii`: Use bright version of the ASCII color.
- `--bright-bg`: Use bright version of the background color.

Example:
```bash
./index.js image ./path/to/image.jpg -a red -b yellow --bright-ascii
```

#### List Allowed Colors
```bash
./index.js list
```
This command displays all available text and background colors.

## Example Output

### Text to ASCII Art
![Text Example](./examples/text-example.png)

### Image to ASCII Art
![Image Example](./examples/image-example.png)

## Dependencies
- [chalk](https://www.npmjs.com/package/chalk) - For colored console output.
- [figlet](https://www.npmjs.com/package/figlet) - For generating ASCII art from text.
- [jimp](https://www.npmjs.com/package/jimp) - For image processing.
- [@jimp/utils](https://www.npmjs.com/package/@jimp/utils) - Utility functions for Jimp.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request.

## Author
[Your Name]

