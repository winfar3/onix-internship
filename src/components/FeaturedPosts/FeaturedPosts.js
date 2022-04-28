import { PostCard } from "../PostCard/PostCard";
import "./FeaturedPosts.scss";
import image12 from "../../assets/images/postcard/12.png"
import image13 from "../../assets/images/postcard/13.png"
import image14 from "../../assets/images/postcard/14.png"

export function FeaturedPosts() {
    const postCardData = [{
        id: "12",
        cardSize: "small",
        imageUrl: image12,
        isPositionTop: false,
        category: "jeans",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "May 14, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "13",
        cardSize: "small",
        imageUrl: image13,
        isPositionTop: false,
        category: "City",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "May 13, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "14",
        cardSize: "small",
        imageUrl: image14,
        isPositionTop: false,
        category: "Photography",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "May 11, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }]

    return(
        <div className="featured-posts">
            {postCardData.map(postCardItem =>
                <PostCard {...postCardItem} key={postCardItem.id} />
            )}
        </div>
    );
}