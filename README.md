# Manga Viewer Website

This is a simple Manga Viewer web application built using **React** and **Tailwind CSS**. The website allows users to browse manga books, select chapters, and navigate through manga pages with smooth transitions between chapters and pages. It fetches manga data from an external API.

## Features

- **Book List**: Allows users to switch between different manga books.
- **Chapter List**: Displays the chapters of a selected manga book, allowing the user to switch between them.
- **Page Navigation**: Users can navigate through manga pages by clicking on the left or right side of the image to move forward or backward.
- **Chapter Transitions**: Automatically moves to the next chapter when the last page of the current chapter is reached, and to the previous chapter when moving back from the first page.
  
## API

Manga data is fetched from the following API:

- **Base URL**: `http://52.195.171.228:8080/`
  
### API Endpoints:

- `/books/`: Retrieve the list of manga books.
- `/books/:bookId/`: Get details of a specific book, including the chapters.
- `/chapters/:chapterId/`: Get details of a specific chapter, including the pages.

> **Note**: All API URLs should end with a trailing slash `/` (e.g., `http://52.195.171.228:8080/books/`).

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Keshab1113/Manga_Viewer.git
   cd Manga_Viewer
   npm install
   npm run dev
   ```

### Key Components
- **App.jsx**: The main app component that handles state management and routing between books, chapters, and pages.
- **BookList.jsx**: Displays available books and allows users to select one.
- **ChapterList.jsx**: Displays available chapters for the selected book and allows users to switch between them.
- **MangaViewer.jsx**: Displays the manga pages and handles page navigation.

### API Integration
The website fetches data from the provided API using Axios. API calls are made to get the list of books, chapters, and pages for the selected book and chapter.