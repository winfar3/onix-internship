import "./SidebarSection.scss";

export function SidebarSection(props) {
    return(
        <section className={"sidebar__section sidebar-section sidebar-section_" + props.blockClass}>
            <h3 className="sidebar-section__title">{props.title}</h3>
            <props.data/>
        </section>
    );
}