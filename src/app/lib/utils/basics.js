export function SortNameAlphabetically(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

/**
 * Escapes spaces and turns them into dashes. Useful for generating ids for aria-labelledby attributes.
 * @param {String} text
 * @returns {String} text, with the spaces escaped with `-`
 */
export function makeAttributeSafe(text) {
  const escapeExpression = new RegExp(/(\s|\:|,|\.)/g);
  return text.replace(escapeExpression, "-").toLowerCase();
}
