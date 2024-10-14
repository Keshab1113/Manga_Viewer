// src/components/MangaViewer.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MangaViewer = ({ chapterId }) => {
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    
    console.log(pages);
    console.log(currentPage);
    
    useEffect(() => {
        if (chapterId) {
            axios.get(`http://52.195.171.228:8080/chapters/${chapterId}/`)
                .then(res => setPages(res.data.pages))
                .catch(err => console.error(err));
        }
    }, [chapterId]);

    const goToNextPage = () => {
        
    };

    const goToPreviousPage = () => {
        
    };
    

    return (
                <div className="relative w-full h-full">
                    {
                    pages.map((i) => (
                        <img
                        src={i.image.file}
                        alt={`Page ${currentPage + 1}`}
                        className="max-w-full max-h-full"
                        onClick={goToNextPage}
                        />
                       ))
                    }
                    
                    <button
                        className="absolute left-0 top-1/2 bg-gray-600 text-white p-4"
                        onClick={goToPreviousPage}
                    >
                        Prev
                    </button>
                    <button
                        className="absolute right-0 top-1/2 bg-gray-600 text-white p-4"
                        onClick={goToNextPage}
                    >
                        Next
                    </button>
                </div>
    );
};

export default MangaViewer;
