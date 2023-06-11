export const Favorite = (id) => {
  return (
    <div className={`card${id} bg_color_dark_orange d-flex d-none position-absolute bottom-0 start-0 p-3 w-100`}>
      <div className="border_white_dashed_own  text-light justify-content-center text-center p-2 w-100 ">
        <i className="fa-regular fa-heart"></i>
      </div>
    </div>
  );
};
