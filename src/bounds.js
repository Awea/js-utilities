/**
 * Return a boolean value that indicates the overlapping status between two DOMRect.
 * @param {DOMRect} boundingRectA given by [getBoundingClientRect](https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect)
 * @param {DOMRect} boundingRectB given by [getBoundingClientRect](https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect)
 * @returns {boolean} Overlapping status
 */
function boundingRectsAreOverlapping(boundingRectA, boundingRectB) {
  return !(
    boundingRectA.right < boundingRectB.left ||
    boundingRectA.left > boundingRectB.right ||
    boundingRectA.bottom < boundingRectB.top ||
    boundingRectA.top > boundingRectB.bottom
  );
}
module.exports.boundingRectsAreOverlapping = boundingRectsAreOverlapping;

/**
 * Return a boolean value that indicates whether the pointer is in the given bounding rectangle.
 * @param {MouseEvent} pointer
 * @param {DOMRect} boundingRect given by [getBoundingClientRect](https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect)
 * @returns {boolean} Pointer is in the given bounding rectangle
 */
function pointerInBoundingRect(pointer, boundingRect) {
  return (
    boundingRect.left < pointer.pageX &&
    pointer.pageX < boundingRect.right &&
    boundingRect.top < pointer.pageY &&
    pointer.pageY < boundingRect.bottom
  );
}
module.exports.pointerInBoundingRect = pointerInBoundingRect;
