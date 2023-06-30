// Function to generate ASCII art
function generateAsciiArt(letters, size, direction) {
  const blockSize = Math.max(size, 3);
  const spaceChar = " ".repeat(blockSize);
  const verticalSpace = "\n".repeat(blockSize);
  let asciiArt = "";

  // Map the three letters
  const mappings = {
    X: () => {
      let result = "";
      for (let i = 0; i < blockSize; i++) {
        let line = spaceChar;
        line = line.substring(0, i) + "O" + line.substring(i + 1);
        line =
          line.substring(0, blockSize - i - 1) +
          "O" +
          line.substring(blockSize - i);
        result += line + "\n";
      }
      return result.trim();
    },

    Y: () => {
      let result = "";
      for (let i = 0; i < blockSize; i++) {
        let line = spaceChar;
        if (i < Math.round(blockSize / 2)) {
          line = line.substring(0, i) + "O" + line.substring(i + 1);
          line = line.substring(0, blockSize - i - 1) + "O";
        } else {
          line =
            line.substring(0, Math.floor(line.length / 2)) +
            "O" +
            line.substring(Math.floor(line.length / 2));
        }
        result += line + "\n";
      }
      return result;
    },

    Z: () => {
      let result = "";
      result += "O".repeat(blockSize) + "\n";
      for (let i = 1; i < blockSize - 1; i++) {
        let line = spaceChar;
        line =
          line.substring(0, blockSize - i - 1) +
          "O" +
          line.substring(blockSize - i);
        result += line + "\n";
      }
      result += "O".repeat(blockSize);
      return result;
    },
  };

  // Generate ASCII Art
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i].toUpperCase();
    const mapping = mappings[letter];
    if (mapping) {
      asciiArt +=
        mapping() +
        (i < letters.length - 1
          ? direction === "vertical"
            ? verticalSpace
            : spaceChar
          : "");
      asciiArt += "\n\n";
    }
  }

  return asciiArt;
}

console.log(generateAsciiArt("XYZ", 5, "horizontal"));
