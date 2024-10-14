import React from 'react';

function ChapterList({ chapters, selectedChapter, onChapterSelect }) {
    if (!chapters || chapters.length === 0) {
        return <p>No chapters available</p>;
    }

    return (
        <div className="flex justify-center space-x-2 p-4">
            {chapters.map((chapter) => (
                <button
                    key={chapter}
                    onClick={() => onChapterSelect(chapter)}
                    className={`px-4 py-2 rounded-lg border ${selectedChapter === chapter ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                        }`}
                >
                    {chapter}
                </button>
            ))}
        </div>
    );
}

export default ChapterList;
