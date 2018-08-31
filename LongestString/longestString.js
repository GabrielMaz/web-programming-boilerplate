/**
 * Returns the longest of the given strings.
 *
 * @param {Array<String>} strings
 * @return {String}
 */
function longestsString(strings) {
  let longest = "";
  strings.forEach(element => {
    if (element.length > longest.length) {
      longest = element;
    }
  });

  return longest;
}

function longestsString2(strings) {
  let longest = "";

  for (const element of strings) {
    if (element.length > longest.length) {
      longest = element;
    }
  }

  return longest;
}
