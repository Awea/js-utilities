/**
 * kebab-case to PascalCase.
 * @param {string} string
 * @returns {string} PascalCase
 */
function kebabCaseToPascalCase(string) {
  return string
    .split("-")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}
module.exports.kebabCaseToPascalCase = kebabCaseToPascalCase;

/**
 * Return the number included in a string.
 * @param {string} string
 * @returns {number} Given string as a number
 */
function numberFromString(string) {
  var number = string.match(/\d/);

  return number !== null ? parseInt(number[0]) : 0;
}
module.exports.numberFromString = numberFromString;

/**
 * PascalCase to kebab-case.
 * @param {string} string
 * @returns {string} kebab-case
 */
function pascalCaseToKebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
module.exports.pascalCaseToKebabCase = pascalCaseToKebabCase;
