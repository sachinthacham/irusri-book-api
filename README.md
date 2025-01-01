React TypeScript Book Finder App

This is a React TypeScript application created using Vite. It allows users to search for books using the Google Books API, view details about a selected book, and navigate results with pagination. The app is styled using Tailwind CSS.

Features
Search books by title, category, and language.
Filter results using Google Books API parameters.
Pagination for smooth navigation through search results.
Modal view for detailed book information.
Graceful handling of errors and no-result scenarios.

![Search Page](src/assets/screenshots/screen01.png)
*A search page allows users to find books by title, category, and language.*

![pagination](src/assets/screenshots/screen2.png)
*Easily navigate through search results using pagination.*

![Book Details model](src/assets/screenshots/screen3.png)
*View detailed information about a book in a modal.*




Technologies Used
React (with TypeScript)
Vite
Tailwind CSS
Axios
Google Books API

Follow these steps to set up the project locally:
Clone the repository:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install dependencies:
npm install

Run the app locally:
npm run dev


Usage
Open the app in your browser.
Use the search bar to find books by title.
Filter results by category or language.
Click on a book to view more details in a modal.
Use pagination to browse through results.

src/
├── assets/               # Static assets like images
├── components/           # Reusable components (BookCard, Pagination, etc.)
├── context/              # Context for managing app-wide state
├── pages/                # Main pages of the app
├── App.tsx               # Root component
├── main.tsx              # Entry point for the app
└── index.css             # Tailwind CSS imports

