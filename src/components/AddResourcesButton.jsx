import React from "react";
import { IoMdAdd } from "react-icons/io";
import Layers from "../assets/layers.gif";

const AddResourcesButton = () => {
  return (
    <div className="xs:text-center mt-[1rem]">
      <button
        className="w-[250px] xs:w-[280px] md:w-[300px] py-[1.5px] md:py-[2px] bg-secondary text-white rounded-full text-[18px] font-semibold tracking-wide transition-all"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <div className="flex justify-center items-center text-[14px] md:text-[18px] gap-2 bg-secondary mx-[1.5px] md:mx-[2px] rounded-full py-2 ">
          Add Resources
          <IoMdAdd className="text-[20px] md:text-[25px]" />
        </div>
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-background">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
              ✕
            </button>
          </form>
          <div className="my-5">
            <img
              src={Layers}
              alt="GIF"
              loading="lazy"
              className="w-[100px] mx-auto "
            />
            <p className="font-bold text-center text-[25px] xs:text-[30px] text-primary">
              Coming soon!
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddResourcesButton;
