import React, { useContext, useEffect, useState } from "react";
import { SelectedCardContext } from "../context/selectedCardContext";
import axios from "axios";

interface ViewDetailsProps {
  handlePopup: () => void;
}

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    categories: string[];
    previewLink: string;
  };
}

const ViewDetails: React.FC<ViewDetailsProps> = ({ handlePopup }) => {
  const { selectedCard } = useContext(SelectedCardContext)!;
  const [bookDetails, setBookDetails] = useState<Book>({
    id: "",
    volumeInfo: {
      title: "",
      subtitle: "",
      authors: [],
      publisher: "",
      publishedDate: "",
      description: "",
      imageLinks: {
        thumbnail: "",
      },
      categories: [],
      previewLink: "",
    },
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${selectedCard}?key=AIzaSyB_MtaV_wCvs5gs06qRBhAWzopMI06jM2w`
        );
        setBookDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [selectedCard]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handlePopup}
    >
      <div
        className="bg-white w-2/3 h-4/5 p-6 rounded-lg shadow-lg relative overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handlePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex gap-6">
          <div className="w-1/3">
            <img
              src={bookDetails.volumeInfo.imageLinks?.thumbnail}
              alt={bookDetails.volumeInfo.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="w-2/3 flex flex-col gap-4">
            <div className="text-lg font-bold">
              {bookDetails.volumeInfo.title}
            </div>
            <div className="text-sm text-gray-700">
              {bookDetails.volumeInfo.subtitle}
            </div>

            <div className="text-sm text-gray-500">
              <span className="font-semibold">Authors: </span>
              {bookDetails.volumeInfo.authors?.join(", ") ||
                "No authors available"}
            </div>

            <div className="text-sm text-gray-500">
              <span className="font-semibold">Categories: </span>
              {bookDetails.volumeInfo.categories?.join(", ") ||
                "No categories available"}
            </div>

            <div className="text-sm text-gray-500">
              <span className="font-semibold">Publisher: </span>
              {bookDetails.volumeInfo.publisher || "No publisher available"}
            </div>

            <div className="text-sm text-gray-500">
              <span className="font-semibold">Published Date: </span>
              {bookDetails.volumeInfo.publishedDate ||
                "No publish date available"}
            </div>

            <button className="bg-[#FFB74D] text-white py-2 px-4 w-1/4 rounded-lg mt-4 transition-all duration-200 hover:bg-[#FF9800]">
              <a
                href={bookDetails.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Book
              </a>
            </button>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-600 bg-gray-100 p-4 rounded-lg">
          <span className="font-semibold">Description: </span>
          <p>
            {bookDetails.volumeInfo.description || "No description available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
