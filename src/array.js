/**
 * Shuffles array in place. [Source](https://stackoverflow.com/a/6274381/616095).
 * @param {array} a
 * @returns {array}.
 */
export function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/**
 * Filter array by unique values.
 * Source: https://stackoverflow.com/a/14438954/616095
 */
export function unique(a){
  return a.filter((v, i, a) => a.indexOf(v) === i);
}
