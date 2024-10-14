import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import ChapterList from './components/ChapterList';
import MangaViewer from './components/MangaViewer';
import axios from 'axios';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    if (selectedBook) {
      axios.get(`http://52.195.171.228:8080/books/${selectedBook}/`)
        .then(res => {
          setChapters(res.data.chapter_ids);
          setSelectedChapter(res.data.chapter_ids[0]);  // Set first chapter as default
        })
        .catch(err => console.error(err));
    }
  }, [selectedBook]);

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
          changeChapter={(direction) => {
            const currentChapterIndex = chapters.indexOf(selectedChapter);
            if (direction === 'next' && currentChapterIndex < chapters.length - 1) {
              setSelectedChapter(chapters[currentChapterIndex + 1]);
            } else if (direction === 'previous' && currentChapterIndex > 0) {
              setSelectedChapter(chapters[currentChapterIndex - 1]);
            }
          }}
        />
      )}
    </div>
  );
}

export default App;
