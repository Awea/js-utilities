/**
 * Get the viewport width.
 * @returns {number} Viewport width
 */
function documentWidth(){
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
}
module.exports.documentWidth = documentWidth
