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
        <div className="flex justify-center space-x-4 bg-gray-800 p-4">
            {books.map((book) => (
                <button
                    key={book.id}
                    className={`text-white ${selectedBook === book.id ? 'bg-blue-500' : 'bg-gray-700'} px-4 py-2 rounded`}
                    onClick={() => onBookSelect(book.id)}
                >
                    {book.title}
                </button>
            ))}
        </div>
    );
};

export default BookList;
