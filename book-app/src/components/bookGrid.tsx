import React from "react";
import BookCard from "./bookCard";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ViewDetails from "./ViewDetails";
import { BookContext } from "../context/bookContext";
import { SelectedCardContext } from "../context/selectedCardContext";
import image from "../assets/notfound.jpg";
import Pagination from "../components/pagination";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
    categories?: string[];
    previewLink: string;
  };
}

const BookGrid: React.FC = () => {
  const { language, category } = useContext(BookContext)!;
  const { setSelectedCard } = useContext(SelectedCardContext)!;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTitle}+subject:${category}&langRestrict=${language}&key=AIzaSyB_MtaV_wCvs5gs06qRBhAWzopMI06jM2w&maxResults=40`
        );
        setBooks(response.data.items || []);

        console.log(response.data);
        console.log("category:" + category);
        console.log("langauge:" + language);
        console.log("searchTitle:" + searchTitle);
      } catch (err) {
        console.log("there is an error");
        console.error(err);
        setError("Failed to fetch books. Please try again later.");
      }
    };

    fetchBooks();
  }, [searchTitle, category, language, currentPage]);
  const handleOpenModal = (id: string) => {
    setSelectedCard(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <section className="bg-white p-4 shadow w-full">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="Search by title..."
          className="border p-2 w-2/5 mb-2 rounded-tl-md rounded-bl-md"
        />
        <button
          type="submit"
          className="bg-[#FFB74D] text-white px-4 py-2 rounded-tr-md rounded-br-md"
        >
          Search
        </button>
      </form>

      {error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      ) : currentBooks.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No books found for your search.</p>
          <img
            src={image}
            alt="No books available"
            className="mx-auto w-1/2 mt-4"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentBooks.map((book) => (
            <BookCard
              key={book.id}
              image={book.volumeInfo.imageLinks?.thumbnail}
              title={book.volumeInfo.title}
              bookId={book.id}
              onOpenModal={() => handleOpenModal(book.id)}
            />
          ))}
        </div>
      )}
      <Pagination
        totalItems={books.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isModalOpen && <ViewDetails handlePopup={handleCloseModal} />}
    </section>
  );
};

export default BookGrid;
