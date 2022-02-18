import "./Tags.scss";

export function Tags() {
    const tagsData = [{
        id: "Business"}, {
        id: "Freelance"}, {
        id: "Money"}, {
        id: "Experience"}, {
        id: "Lifestyle"}, {
        id: "SEO"}, {
        id: "Wordpress"}, {
        id: "Marketing"}, {
        id: "UX"}, {
        id: "Modern"}, {
        id: "Success"}, {
        id: "Nature"
    }]

    return(
        <div className="tags__wrapper">
            {tagsData.map(tagsDataItem =>
                <SocialItem {...tagsDataItem} key={tagsDataItem.id} />
            )}
        </div>
    );
}

function SocialItem(props) {
    return(
        <a href="#" className="tags__item">
            {props.id}
        </a>
    );
}