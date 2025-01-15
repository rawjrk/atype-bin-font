function convertText(inputStr, config = {}) {
  const { zeroReplacer, oneReplacer, glyphsPerLine } = config;

  let outputStr = "";

  for (let i = 0; i < inputStr.length; i++) {
    const charCode = inputStr.charCodeAt(i);

    if (!isValidCharCode(charCode)) {
      const char = inputStr[i];
      throw Error(
        `"${char}" in position ${i} is outside of printable ANSI character set`,
      );
    }

    for (let j = 7; j >= 0; j--) {
      const isOneBit = charCode & (2 ** j);
      outputStr += isOneBit ? oneReplacer : zeroReplacer;
    }

    const isEndOfTheLine = (i + 1) % glyphsPerLine === 0;
    const isEndOfTheString = i + 1 === inputStr.length;

    if (isEndOfTheLine && !isEndOfTheString) {
      outputStr += "\n";
    }
  }

  return outputStr;
}

function isValidCharCode(charCode) {
  return charCode >= 32 && charCode < 256;
}

module.exports = {
  convertText,
};
