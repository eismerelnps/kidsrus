export const FavCartSearch = ({
  stockAmount,
  handleAddToCart,
  handleAddToWishList,
  handleSearch,
}) => {
  return (
    <div className="bg_color_dark_orange d-flex position-absolute bottom-0 start-0 animate__animated animate__fadeInUp  p-1 w-100  z-index-1000" tabIndex={'100'}>
      <div className="border_white_dashed_own  text-light justify-content-center text-center p--1 w-100 ">
        {stockAmount > 0 ? (
          <>
            <i
              className="fa-regular fa-heart p-lg-2 px-1 fs-6"
              onClick={handleAddToWishList}
            ></i>
            <i
              class="fa-solid fa-cart-shopping p-lg-2 px-1"
              onClick={handleAddToCart}
            ></i>{" "}
            <i
              className="fa-solid fa-magnifying-glass p-lg-2 px-1"
              onClick={handleSearch}
            ></i>
          </>
        ) : (
          <i
            className="fa-regular fa-heart p-lg-2 px-1 fs-6"
            onClick={handleAddToWishList}
          ></i>
        )}
      </div>
    </div>
  );
};
