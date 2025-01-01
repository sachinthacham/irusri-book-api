import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import PosterImage from "../components/poster";
import FilterOptions from "../components/filter";
import BookGrid from "../components/bookGrid";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow grid grid-rows-[auto_auto_1fr_auto] grid-cols-1 ">
        <PosterImage />
        <div className="grid grid-cols-5 gap-4 p-4 ">
          <div className="grid col-span-1">
            <FilterOptions />
          </div>
          <div className="grid col-span-4">
            <BookGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
