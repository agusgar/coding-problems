// Flatten array problem

function getFlattenArray(items) {
  const flattenArray = items.reduce((itemsFlatten, item) => Array.isArray(item) ? [...itemsFlatten, ...item] : [...itemsFlatten, item], []);
  
  if (flattenArray.some(Array.isArray)) {
    return getFlattenArray(flattenArray);
  }

  return flattenArray;
}

module.exports = { getFlattenArray };
