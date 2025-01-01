import { useState, useContext } from "react";
import { BookContext } from "../context/bookContext";

interface FilterData {
  dataList: Data[];
  name: string;
}
interface Data {
  name: string;
  code: string;
}

const ExpandableCard = ({ dataList, name }: FilterData) => {
  const { setlanguage, setCategory } = useContext(BookContext)!;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<string>("");

  /**selected category or langauge */
  const handledata = (code: string) => {
    if (name == "Langauges") {
      setSelectedData(code);
      setlanguage(code);
    } else if (name == "Categories") {
      setSelectedData(code);

      setCategory(code);
    }
  };

  /**show all */
  const handleAll = () => {
    setSelectedData("");
    if (name === "Languages") {
      setlanguage("");
    } else if (name === "Categories") {
      setCategory("");
    }
  };
  return (
    <div
      className={`w-60 p-4 bg-white border rounded-lg shadow-md cursor-pointer 
        ${isExpanded ? "h-auto" : "h-30"} 
        transition-all duration-300 ease-in-out`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <div className="relative">{name}</div>
        <div className="text-center mt-2 text-xl ">
          {isExpanded ? "-" : "+"}
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 flex flex-col gap-2 ">
          <button
            onClick={handleAll}
            className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 mb-2"
          >
            All
          </button>
          {dataList.map((data, index) => (
            <p
              key={index}
              onClick={() => handledata(data.code)}
              className={`border-[1px] h-10 flex justify-center items-center rounded-md cursor-pointer 
                ${
                  selectedData === data.code
                    ? "bg-[#FFB74D] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }
              `}
            >
              {data.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
