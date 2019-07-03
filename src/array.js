/**
 * Shuffle array in place.
 * Source: https://stackoverflow.com/a/6274381/616095
 * @param {array} a
 * @returns {array} Shuffled
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
module.exports.shuffle = shuffle;

/**
 * Filter array by unique values.
 * Source: https://stackoverflow.com/a/14438954/616095
 * @param {array} a
 * @returns {array} Without duplicates
 */
function unique(a) {
    return a.filter(function(v, i, a) {
        return a.indexOf(v) === i;
    });
}
module.exports.unique = unique;
