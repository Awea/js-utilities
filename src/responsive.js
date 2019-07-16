/**
 * Get the viewport width.
 * @returns {number} Viewport width
 */
function documentWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
module.exports.documentWidth = documentWidth;

/**
 * Get the viewport height.
 * @returns {number} Viewport height
 */
function documentHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
module.exports.documentHeight = documentHeight;
