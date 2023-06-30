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
