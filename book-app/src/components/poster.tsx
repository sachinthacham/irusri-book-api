import React from "react";
import image from "../assets/cover1.jpg";

const PosterImage: React.FC = () => {
  return (
    <div className="relative -z-10">
      <div
        className="fixed top-0 left-0 w-full h-96 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(0.7)",
        }}
      ></div>

      <div className="relative flex flex-col justify-center items-center h-96 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-white text-md md:text-md w-2/3">
          "Dive into a treasure trove of books from all genres and eras. Whether
          you're seeking inspiration, knowledge, or a thrilling escape, our
          library offers endless opportunities to explore the world through the
          pages of a book. Let your next journey begin here!"
        </p>
      </div>
    </div>
  );
};

export default PosterImage;
