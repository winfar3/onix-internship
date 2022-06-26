const byField = (field, isSorted) => {
  if (isSorted) {
    return (a, b) => (a[field] > b[field] ? -1 : 1);
  } 
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

export default byField;
