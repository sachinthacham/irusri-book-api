import React from "react";
import CategoryFilter from "../components/expandCardModel";
import { languages, categories } from "../assets/data";

const FilterOptions: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 shadow">
      <h2 className="text-lg font-bold mb-4">Filter Options</h2>
      <div className="flex flex-col gap-5">
        <CategoryFilter dataList={languages} name="Langauges" />
        <CategoryFilter dataList={categories} name="Categories" />
      </div>
    </div>
  );
};

export default FilterOptions;
