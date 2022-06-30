import './Sidebar.scss';

import SidebarSection from '../SidebarSection/SidebarSection';
import AboutAuthor from '../AboutAuthor/AboutAuthor';
import FeaturedPosts from '../FeaturedPosts/FeaturedPosts';
import Categories from '../Categories/Categories';
import SocialMedia from '../SocialMedia/SocialMedia';
import Tags from '../Tags/Tags';
import useLocalization from '../../hooks/useLocalization';

function Sidebar() {
  const [t] = useLocalization();
  
  return (
    <aside className="sidebar">
      <SidebarSection
        title={t('sidebar_author')}
        blockClass="about-author"
        data={<AboutAuthor />}
      />
      <SidebarSection
        title={t('sidebar_featured')}
        blockClass="featured-posts"
        data={<FeaturedPosts />}
      />
      <SidebarSection
        title={t('sidebar_categories')}
        blockClass="categories"
        data={<Categories />}
      />
      <SidebarSection
        title={t('sidebar_social')}
        blockClass="social-media"
        data={<SocialMedia />}
      />
      <SidebarSection title="Tags" blockClass="tags" data={<Tags />} />
    </aside>
  );
}

export default Sidebar;
