import React from "react";

const LinksItem = ({ Icon, link }) => {
  return (
    <>
      <button
        className="bg-secondary rounded-full w-[40px] h-[40px] xs:w-[45px] xs:h-[45px] grid place-items-center"
        onClick={() => window.open(link, "_blank")}
      >
        <Icon className="text-white w-[37px] h-[37px] xs:w-[43px] xs:h-[43px] p-2 bg-secondary rounded-full" />
      </button>
    </>
  );
};

export default LinksItem;
