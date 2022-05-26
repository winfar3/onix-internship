import "./Main.scss";

import { useEffect, useState } from "react";

import { PostCard } from "../../components/PostCard/PostCard";
import { Pagination } from "../../components/Pagination/Pagination";
import { data } from '../../database/database.js';

export function Main() {
    const [postCardData] = useState(data);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(7);
    const maxPageNumber = Math.ceil(postCardData.length / postsPerPage);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = postCardData.slice(firstPostIndex, lastPostIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };
    const nextPage = () => {
        if (currentPage < maxPageNumber) {
            setCurrentPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        const elementMain = document.querySelector('.main');

        elementMain.scrollIntoView({
            behavior: 'smooth'
        });
    }, [currentPage]);

    return (
        <main className="main">
            {currentPosts.map(postCardItem =>
                <PostCard post={postCardItem} key={postCardItem.id} />
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