import React from "react";

export const AddInformation = ({ information }) => {
  console.log(information);
  return (
    <div className="mb-5 " style={{ cursor: "pointer" }}>
      <div className="font_francois_one">
        <ul className="border_gray_dashed_own list-group list-group-flush p-3">
          <li key={"color"} className="list-group-item text-start">
            <b className=" color_mate_blue  ">Color: </b>
            <b className="w-100 text-end color_gray "> {information[0].color}</b>
          </li>
          <li key={"material"} className="list-group-item text-start">
            <b className="text-start color_mate_blue ">Material: </b>
            <b className="w-100 text-end color_gray ">
              {information[0].Material}
            </b>
          </li>
          <li key={"age"} className="list-group-item text-start">
            <b className="text-start color_mate_blue ">Age: </b>
            <b className="w-100 text-end color_gray ">{information[0].Age}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};
