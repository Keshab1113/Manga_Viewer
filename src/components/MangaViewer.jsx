import React, { useEffect, useState } from "react";
import axios from "axios";

const MangaViewer = ({ chapterId, changeChapter }) => {
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (chapterId) {
            axios
                .get(`http://52.195.171.228:8080/chapters/${chapterId}/`)
                .then((res) => {
                    setPages(res.data.pages);
                    setCurrentPage(0);
                })
                .catch((err) => console.error(err));
        }
    }, [chapterId]);

    const goToNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            changeChapter("next");
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            changeChapter("previous");
        }
    };

    const handleClick = (e) => {
        const { clientX, currentTarget } = e;
        const middle = currentTarget.offsetWidth / 2;

        if (clientX > middle) {
            goToNextPage();
        } else {
            goToPreviousPage();
        }
    };

    return (
        <div className="relative w-full h-full">
            <div
                className="h-full w-full flex justify-center"
                onClick={handleClick}
            >
                <img
                    src={pages[currentPage]?.image?.file}
                    alt={`Page ${currentPage + 1}`}
                    className="max-w-full max-h-full"
                />
            </div>

            <h1 className="text-center font-bold text-xl pb-4">
                {currentPage + 1}/{pages.length}
            </h1>
        </div>
    );
};

export default MangaViewer;
