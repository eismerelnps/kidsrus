import { types } from "../types/types";

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };
      case types.addToCart:
        return {
          ...action.payload,
        }
        case types.addToWishList:
          return {
            ...action.payload,
          }
    default:
      return state;
  }
};
