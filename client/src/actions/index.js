import * as types from '../constants/actions';

export const setData = (data) => ({
  type: types.SET_DATA,
  payload: data,
});
export const setIsLoading = (isLoading) => ({
  type: types.SET_IS_LOADING,
  payload: isLoading,
});
export const setError = (error) => ({
  type: types.SET_ERROR,
  payload: error,
});
