import "./Sidebar.scss";

import { SidebarSection } from "../SidebarSection/SidebarSection";
import { AboutAuthor } from "../AboutAuthor/AboutAuthor";
import { FeaturedPosts } from "../FeaturedPosts/FeaturedPosts";
import { Categories } from "../Categories/Categories";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Tags } from "../Tags/Tags";

export function Sidebar() {
    return(
        <aside className="sidebar">
            <SidebarSection title="About the author" blockClass="about-author" data={AboutAuthor}/>
            <SidebarSection title="Featured posts" blockClass="featured-posts" data={FeaturedPosts}/>
            <SidebarSection title="Categories" blockClass="categories" data={Categories}/>
            <SidebarSection title="Social media" blockClass="social-media" data={SocialMedia}/>
            <SidebarSection title="Tags" blockClass="tags" data={Tags}/>
        </aside>
    );
}