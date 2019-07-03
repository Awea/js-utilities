/**
 * Consistent cross-browser `querySelectorAll` (on Edge you can’t use `.forEach` on a NodeList).
 * @param {Element} $container any element
 * @param {string} selector used by `querySelectorAll`
 * @returns {array} Of elements
 */
function querySelectorAllAsArray($container, selector) {
  return Array.from($container.querySelectorAll(selector));
}
module.exports.querySelectorAllAsArray = querySelectorAllAsArray;
