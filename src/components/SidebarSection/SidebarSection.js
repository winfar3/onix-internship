import './SidebarSection.scss';

import PropTypes from 'prop-types';

function SidebarSection({ 
  title, blockClass, data 
}) {
  return (
    <section
      className={
        `sidebar__section sidebar-section sidebar-section_${blockClass}`
      }
    >
      <h3 className="sidebar-section__title">{title}</h3>
      {data}
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  blockClass: PropTypes.string.isRequired,
  data: PropTypes.element.isRequired,
};

export default SidebarSection;
