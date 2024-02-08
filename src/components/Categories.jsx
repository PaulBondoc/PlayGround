import { useEffect, useState } from "react";
import { categoryList } from "../constant/CategoriesData";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Categories = ({ onCategoryClick }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || []);
    setFavorites(storedFavorites);
  }, []);

  const handleCategoryClick = (categoryName, categoryId) => {
    setActiveCategory(categoryName);
    onCategoryClick(categoryId);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="relative">
      <section
        className={`relative z-[10] bg-secondary text-white py-3 md:py-4 px-5 rounded-[10px] overflow-auto shadow-custom cursor-pointer lg:cursor-default`}
      >
        <div className="hidden lg:flex flex-wrap gap-y-[20px] gap-x-[40px]">
          {categoryList.map((category, index) => (
            <button
              key={index}
              className={`font-semibold text-white tracking-widest ${
                category.name === activeCategory ? "underline" : ""
              }`}
              onClick={() => handleCategoryClick(category.name, category.id)}
            >
              {category.name === "Favorites"
                ? `Favorites (${favorites.length})`
                : category.name}
            </button>
          ))}
        </div>

        {/* Dropdown menu for smaller screens */}
        <div
          className="lg:hidden flex items-center justify-between "
          onClick={toggleDropdown}
        >
          <button className="font-semibold text-[15px] xs:text-[17px] text-white tracking-widest">
            Category:{" "}
            {activeCategory === "Favorites"
              ? `Favorites (${favorites.length})`
              : activeCategory}
          </button>
          {isDropdownOpen ? (
            <FaCaretUp className="text-[20px]" />
          ) : (
            <FaCaretDown className="text-[20px]" />
          )}
        </div>
      </section>

      {isDropdownOpen && (
        <div className="lg:hidden absolute z-[100] w-full bg-secondary text-white py-2 px-4 mt-2 rounded-[10px] shadow-custom">
          {categoryList.map((category, index) => (
            <button
              key={index}
              className={`block w-full text-left py-1 font-semibold text-white tracking-widest ${
                category.name === activeCategory ? "underline" : ""
              }`}
              onClick={() => handleCategoryClick(category.name, category.id)}
            >
              {category.name === "Favorites"
                ? `Favorites (${favorites.length})`
                : category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
