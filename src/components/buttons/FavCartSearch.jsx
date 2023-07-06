import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FavCartSearch = ({
  handleAddToCart,
  handleAddToWishList,
  handleSearch,
}) => {
  return (
    <div className=" bg_color_dark_orange d-flex position-absolute bottom-0 start-0 animate__animated animate__fadeInUp  p-lg-2 p-1 w-100  ">
      <div className="border_white_dashed_own  text-light justify-content-center text-center p-lg-1 w-100 ">
        <i
          className="fa-regular fa-heart p-lg-2 px-1 fs-6"
          onClick={handleAddToWishList}
        ></i>
        <i class="fa-solid fa-cart-shopping p-lg-2 px-1"></i>{" "}
        {/* <p className="fs-6 p-lg-2" onClick={handleAddToCart}>
          ADD TO CART
        </p> */}
        <i
          className="fa-solid fa-magnifying-glass p-lg-2 px-1"
          onClick={handleSearch}
        ></i>
      </div>
    </div>
  );
};
