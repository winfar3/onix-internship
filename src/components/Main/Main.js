import "./Main.scss";

import { useState } from "react";

import { PostCard } from "../PostCard/PostCard";
import { Pagination } from "../Pagination/Pagination";

import image1 from "../../assets/images/postcard/01.png";
import image2 from "../../assets/images/postcard/02.png";
import image3 from "../../assets/images/postcard/03.png";
import image4 from "../../assets/images/postcard/04.png";
import image5 from "../../assets/images/postcard/05.png";
import image6 from "../../assets/images/postcard/06.png";
import image7 from "../../assets/images/postcard/07.png";
import image8 from "../../assets/images/postcard/08.png";
import image9 from "../../assets/images/postcard/09.png";
import image10 from "../../assets/images/postcard/10.png";
import image11 from "../../assets/images/postcard/11.png";

export function Main() {
    const [postCardData] = useState([{
        id: "01",
        cardSize: "medium",
        imageUrl: image1,
        isPositionTop: false,
        category: "Tourism",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "June 6, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "02",
        cardSize: "medium",
        imageUrl: image2,
        isPositionTop: false,
        category: "sport",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "June 5, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "03",
        cardSize: "medium",
        imageUrl: image3,
        isPositionTop: true,
        category: "fashion",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "June 4, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "04",
        cardSize: "medium",
        imageUrl: image4,
        isPositionTop: false,
        category: "clothes",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "June 3, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "05",
        cardSize: "medium",
        imageUrl: image5,
        isPositionTop: true,
        category: "clothes",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "June 2, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "06",
        cardSize: "medium",
        imageUrl: image6,
        isPositionTop: false,
        category: "fashion",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "June 1, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "07",
        cardSize: "big",
        imageUrl: image7,
        isPositionTop: true,
        category: "Summer",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "May 30, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "08",
        cardSize: "medium",
        imageUrl: image8,
        isPositionTop: false,
        category: "Autumn",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "May 25, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "09",
        cardSize: "medium",
        imageUrl: image9,
        isPositionTop: true,
        category: "clothes",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "May 22, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "10",
        cardSize: "medium",
        imageUrl: image10,
        isPositionTop: false,
        category: "summer",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "May 19, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }, {
        id: "11",
        cardSize: "medium",
        imageUrl: image11,
        isPositionTop: false,
        category: "summer",
        title: "One of Saturn’s largest rings may be newer than anyone",
        date: "May 16, 2019",
        author: "Rickie Baroch",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
    }]);

    //TODO: Add attention movement to the beginning of the block with posts

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(7);
    const maxPageNumber = Math.ceil(postCardData.length / postsPerPage)

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = postCardData.slice(firstPostIndex, lastPostIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    };
    const nextPage = () => {
        if (currentPage < maxPageNumber) {
            setCurrentPage(prev => prev + 1);
        }
    };

    return (
        <main className="main">
        {currentPosts.map(postCardItem =>
            <PostCard {...postCardItem} key={postCardItem.id} />
        )}
        <Pagination 
            maxPageNumber={maxPageNumber} 
            postsPerPage={postsPerPage} 
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
        />
        </main>
    );
}