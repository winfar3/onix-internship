import "./Tags.scss";
import { TagsItem } from "../TagsItem/TagsItem";

export function Tags() {
    const tagsData = [{
        id: "business"}, {
        id: "freelance"}, {
        id: "money"}, {
        id: "experience"}, {
        id: "lifestyle"}, {
        id: "SEO"}, {
        id: "wordpress"}, {
        id: "marketing"}, {
        id: "UX"}, {
        id: "modern"}, {
        id: "success"}, {
        id: "nature"
    }]

    return(
        <div className="tags__wrapper">
            {tagsData.map(tagsDataItem =>
                <TagsItem {...tagsDataItem} key={tagsDataItem.id} />
            )}
        </div>
    );
}