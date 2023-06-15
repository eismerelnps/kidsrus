import React from "react";

export const AddInformation = ({ information }) => {
  const { color, Material, Age } = information[0];

  return (
    <div
      className="border_gray_dashed_own p-3 my-4"
      style={{ cursor: "pointer" }}
    >
      <ul className="list-group list-group-flush font_quicksand">
        <li key="color" className="list-group-item text-start color_mate_blue ">
          <div className="row">
            <div className="col-4">
              {" "}
              <b>Color:</b>
            </div>
            <div className="col-8">
              <b className="w-100 text-end color_gray">{color}</b>
            </div>
          </div>
        </li>
        <li
          key="category"
          className="list-group-item text-start color_mate_blue "
        >
          <div className="row">
            <div className="col-4">
              {" "}
              <b>Category:</b>
            </div>
            <div className="col-8">
              <b className="w-100 text-end color_gray">{Material}</b>
            </div>
          </div>
        </li>

        {Age === null ? (
          <div></div>
        ) : (
          <li
            key="tags"
            className="list-group-item text-start color_mate_blue "
          >
            <div className="row">
              <div className="col-4">
                {" "}
                <b>Age:</b>
              </div>
              <div className="col-8">
                {" "}
                <b className="w-100 text-end color_gray font_quicksand">
                  {Age}
                </b>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};
