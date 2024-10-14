import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import ChapterList from './components/ChapterList';
import MangaViewer from './components/MangaViewer';
import axios from 'axios';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Fetch chapters whenever a new book is selected
  useEffect(() => {
    if (selectedBook) {
      axios.get(`http://52.195.171.228:8080/books/${selectedBook}/`)
        .then(res => {
          setChapters(res.data.chapter_ids);
          setSelectedChapter(res.data.chapter_ids[0]);  // Start with the first chapter by default
        })
        .catch(err => console.error(err));
    }
  }, [selectedBook]);

  const handleNextChapter = () => {
    const currentChapterIndex = chapters.findIndex(chapter => chapter === selectedChapter);
    console.log(currentChapterIndex);
    if (currentChapterIndex < chapters.length - 1) {
      setSelectedChapter(chapters[currentChapterIndex + 1]);
    }
  };

  const handlePreviousChapter = () => {
    const currentChapterIndex = chapters.findIndex(chapter => chapter === selectedChapter);
    if (currentChapterIndex > 0) {
      setSelectedChapter(chapters[currentChapterIndex - 1]);
    }
  };
  

  return (
    <div className="h-screen flex flex-col">
      <BookList selectedBook={selectedBook} onBookSelect={setSelectedBook} />
      {selectedBook && (
        <ChapterList
          chapters={chapters}
          selectedChapter={selectedChapter}
          onChapterSelect={setSelectedChapter}
        />

      )}
      {selectedChapter && (
        <MangaViewer
          chapterId={selectedChapter}
        />
      )}
    </div>
  );
}

export default App;
