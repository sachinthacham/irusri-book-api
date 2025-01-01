import React from "react";

interface BookCardProps {
  image: any;
  title: string;
  bookId: string;
  onOpenModal: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ image, title, onOpenModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col justify-between">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-[18px] font-semibold">{title}</h5>
      </div>
      <button
        onClick={onOpenModal}
        className="mb-2 text-white px-4 py-2 rounded-md transition bg-[#f6d27a] hover:bg-[#ffb74b] mx-8"
      >
        View More
      </button>
    </div>
  );
};
export default BookCard;
