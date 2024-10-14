import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = ({ selectedBook, onBookSelect }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://52.195.171.228:8080/books/')
            .then(res => setBooks(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="flex justify-center space-x-4 p-4">
            {books.map((book) => (
                <button
                    key={book.id}
                    className={` font-semibold ${selectedBook === book.id ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`}
                    onClick={() => onBookSelect(book.id)}
                >
                    {book.title}
                </button>
            ))}
        </div>
    );
};

export default BookList;
