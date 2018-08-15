/**
 * kebab-case to PascalCase.
 * @param {string} string
 * @returns {string} PascalCase
 */
export function kebabCaseToPascalCase(string){
  return string.split('-').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join('')
}

/**
 * Return the number included in a string.
 * @param {string} string
 * @returns {number} Given string as a number
 */
export function numberFromString(string){
  let number = string.match(/\d/)

  return number !== null ? parseInt(number[0]) : 0
}

/**
 * PascalCase to kebab-case.
 * @param {string} string
 * @returns {string} kebab-case
 */
export function pascalCaseToKebabCase(string){
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
