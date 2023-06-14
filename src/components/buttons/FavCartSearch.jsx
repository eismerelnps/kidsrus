export const FavCartSearch = ({
  handleAddToCart,
  handleAddToWishList,
  handleSearch,
}) => {
  return (
    <div className=" bg_color_dark_orange d-flex position-absolute animate__animated animate__fadeInUp bottom-0 start-0 p-2 w-100">
      <div className="border_white_dashed_own  text-light justify-content-center text-center p-1 w-100 ">
        <i
          className="fa-regular fa-heart p-2"
          onClick={handleAddToWishList}
        ></i>
        <span className="p-2" onClick={handleAddToCart}>
          ADD TO CART
        </span>{" "}
        <i
          className="fa-solid fa-magnifying-glass p-2"
          onClick={handleSearch}
        ></i>
      </div>
    </div>
  );
};
