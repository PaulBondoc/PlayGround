import Card from "./Card";
import { resourcesList } from "../constant/ResourcesData";
import { useState, useEffect } from "react";

const Resources = ({ categoryId, categoryChange }) => {
  const savedFavorites = JSON.parse(localStorage.getItem("favorites") || []);
  const [filteredResources, setFilteredResources] = useState([]);

  useEffect(() => {
    if (categoryId === 7) {
      // For 'Favorites' category, filter resources based on savedFavorites
      const favoritesResources = resourcesList.filter((item) =>
        savedFavorites.includes(item.name)
      );
      setFilteredResources(favoritesResources);
    } else if (categoryId) {
      // For other categories, filter resources based on categoryId
      const categoryResources = resourcesList.filter(
        (item) => item.id === categoryId
      );
      setFilteredResources(categoryResources);
    } else {
      // If no categoryId, show all resources
      setFilteredResources(resourcesList);
    }
  }, [categoryId, savedFavorites]);

  return (
    <section className="min-h-[500px] my-[1rem] xs:my-[2rem]">
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-12 gap-3 xs:gap-5 lg:gap-10">
          {filteredResources.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              logo={item.logo}
              description={item.description}
              url={item.url}
              categoryChange={categoryChange}
            />
          ))}
        </div>
      ) : (
        <p className="text-[15px] xs:text-[20px] text-center font-semibold text-gray-500">
          {categoryId === 7
            ? "You haven't added any favorites yet. Start adding now!"
            : "No resources available at the moment. Check back later for updates."}
        </p>
      )}
    </section>
  );
};

export default Resources;
