const optionToPropNames = {
  "--zero": "zeroReplacer",
  "-0": "zeroReplacer",
  "--one": "oneReplacer",
  "-1": "oneReplacer",
  "--per-line": "glyphsPerLine",
  "-p": "glyphsPerLine",
};

function parseCLIArgs() {
  const parsedArgs = {};

  for (let i = 2; i < process.argv.length; i++) {
    const currentArg = process.argv[i];

    const isStartsWithDash = currentArg[0] === "-";

    if (!isStartsWithDash) {
      if (parsedArgs.inputStr) {
        throw Error("Only one input string is allowed!");
      }
      parsedArgs.inputStr = currentArg;
      continue;
    }

    const [argName, argValue] = currentArg.split("=");
    const propName = optionToPropNames[argName];

    if (!propName) {
      throw Error(`Unknown argument specified: ${argName}`);
    }

    parsedArgs[propName] = argValue;
  }

  return parsedArgs;
}

function logResult(outputStr) {
  console.log("");
  console.log(outputStr);
  console.log("");
}

function logError(err) {
  console.error(`${err.message}!`);
}

module.exports = {
  logError,
  logResult,
  parseCLIArgs,
};
