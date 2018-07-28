/**
 * kebab-case to PascalCase.
 * @param {string} string
 * @returns {string}.
 */
export function kebakCaseToPascalCase(string){
  return string.split('-').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join('')
}

/**
 * Return the first number included in a String.
 * @param {string} string
 * @returns {string}.
 */
export function numberFromString(string){
  let number = string.match(/\d/)

  return number !== null ? parseInt(number[0]) : 0
}

/**
 * PascalCase to kebab-case.
 * @param {string} string
 * @returns {string}.
 */
export function pascalToKebabCase(string){
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
