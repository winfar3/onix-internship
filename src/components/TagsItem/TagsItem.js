import './TagsItem.scss';

import PropTypes from "prop-types";

function TagsItem({ tagId }) {
  const linkRoot = "/onix-internship/";

  return(
      <a href={linkRoot + tagId} className="tags__item capitalize">
          {tagId}
      </a>
  );
}

TagsItem.propTypes = {
  tagId: PropTypes.string,
}

export default TagsItem;