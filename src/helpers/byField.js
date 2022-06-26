import { string, bool } from 'prop-types';

const byField = (field, isSorted) => {
  if (isSorted) {
    return (a, b) => (a[field] > b[field] ? -1 : 1);
  } 
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

byField.propTypes = {
  field: string.isRequired,
  isSorted: bool,
};

byField.defaultProps = {
  isSorted: false,
};

export default byField;
