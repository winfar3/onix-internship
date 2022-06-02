import "./FeaturedPosts.scss";

import { useState } from "react";

import PostCard from "../PostCard/PostCard";

import image12 from "../../assets/images/postcard/12.png"
import image13 from "../../assets/images/postcard/13.png"
import image14 from "../../assets/images/postcard/14.png"

export function FeaturedPosts() {
    const [postCardData] = useState([{
        id: 12,
        cardSize: "small",
        imageUrl: image12,
        isPositionTop: false,
        category: "jeans",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "2019-05-14",
        author: {
            firstName: "Rickie",
            lastName: "Baroch"
        },
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: 13,
        cardSize: "small",
        imageUrl: image13,
        isPositionTop: false,
        category: "City",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "2019-05-13",
        author: {
            firstName: "Rickie",
            lastName: "Baroch"
        },
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: 14,
        cardSize: "small",
        imageUrl: image14,
        isPositionTop: false,
        category: "Photography",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "2019-05-11",
        author: {
            firstName: "Rickie",
            lastName: "Baroch"
        },
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }]);

    return(
        <div className="featured-posts">
            {postCardData.map(postCardItem =>
                <PostCard post={postCardItem} key={postCardItem.id} />
            )}
        </div>
    );
}