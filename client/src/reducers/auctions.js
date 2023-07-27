import { SET_DATA, SET_IS_LOADING, SET_ERROR } from '../constants/actions';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const auctions = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        data: payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default auctions;
