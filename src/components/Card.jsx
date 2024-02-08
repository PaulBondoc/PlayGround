import { useEffect, useState } from "react";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import "animate.css";

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const style =
    "absolute end-[20px] top-[20px] z-[10] text-[30px] cursor-pointer text-[#9747FF]";

  useEffect(() => {
    // Check if the resource is already saved as a favorite in local storage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(savedFavorites.includes(props.name));
  }, [props.name]);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);

    // Update local storage with the list of favorites
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      //Remove from favorites
      const updatedFavorites = savedFavorites.filter(
        (fav) => fav !== props.name
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      //Add to favorites
      const updatedFavorites = [...savedFavorites, props.name];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <>
      <div
        className={`col-span-12 xs:col-span-6 md:col-span-4 lg:col-span-3 p-5 rounded-[10px] shadow-card relative z-[5] text-primary cursor-pointer ${
          props.categoryChange ? "animate__animated animate__zoomIn" : ""
        } `}
        onClick={() => window.open(props.url, "_blank")}
      >
        {props.logo ? (
          <img
            src={props.logo}
            alt={props.name}
            className="w-[40px] h-[40px] object-contain pointer-events-none"
          />
        ) : (
          <div className="w-[40px] h-[40px] bg-primary rounded-[5px] text-background grid place-items-center text-[12px] font-bold">
            N/A
          </div>
        )}

        <h3 className="mt-[10px] font-extrabold text-[18px] tracking-wider">
          {props.name}
        </h3>
        <p className="text-[10px] tracking-wide">{props.description}</p>

        {isFavorite ? (
          <IoBookmark
            className={`${style} animate-scale`}
            onClick={(event) => {
              event.stopPropagation();
              handleFavorite();
            }}
          />
        ) : (
          <IoBookmarkOutline
            className={`${style}`}
            onClick={(event) => {
              event.stopPropagation();
              handleFavorite();
            }}
          />
        )}
      </div>
    </>
  );
};

export default Card;
