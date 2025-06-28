import React from "react";
import DriveEmbed from "../common/DriveEmbed";

function Menu() {
  return (
    <div className="w-full min-h-screen pt-[100px]">
      <span className="w-full py-10 flex justify-between items-center">
        <span></span>
        <span
          style={{ fontFamily: "Ittrecoleta Regular" }}
          className="text-[90px]"
        >
          Menu
        </span>
        <span></span>
      </span>

      <span className="w-full flex justify-center items-center mb-[100px]">
        <div className="w-[90%] aspect-square">
          <DriveEmbed />
        </div>
      </span>
    </div>
  );
}

export default Menu;
