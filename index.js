const { logResult, parseCLIArgs, logError } = require("./cli-utils");
const { convertText } = require("./font-utils");

function main() {
  try {
    const userConfig = parseCLIArgs();

    const {
      inputStr = "test",
      zeroReplacer = " ",
      oneReplacer = "\u2588",
      glyphsPerLine = 2,
    } = userConfig;

    const converterConfig = { zeroReplacer, oneReplacer, glyphsPerLine };
    const outputStr = convertText(inputStr, converterConfig);

    logResult(outputStr);
  } catch (err) {
    logError(err);
  }
}

main();
