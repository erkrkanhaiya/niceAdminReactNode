import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback
} from 'react';
import restaurantReducer from './restaurantReducer';
import * as types from './restaurantActionTypes';
import mernDashApi from '../../helpers/apiUtils';

const initialRestaurantState = {
  loading: false,
  error: false,
  restaurants: [],
  restaurant: {},
  me: null,
  restaurantsByMonth: null,
  errResponse: '',
  message: null
};

export const RestaurantContext = createContext(initialRestaurantState);

export const RestaurantProvider = ({ children }) => {
  //   const BASE_AUTH_URL = process.env.API_BASE_URL + "api/"
  const [restaurantState, dispatch] = useReducer(restaurantReducer, initialRestaurantState);

  const RestaurantReset = () => {
    dispatch({
      type: types.RESTAURANT_RESET
    });
  };

  const fetchRestaurants = useCallback(async () => {
    dispatch({
      type: types.RESTAURANT_START
    });
    try {
      const res = await mernDashApi.get('/api/restaurent');
      dispatch({
        type: types.RESTAURANT_SUCCESS,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: types.RESTAURANT_FAILURE,
        payload: error.response.data.error_msg
      });
    }
  }, []);

  const fetchLoggedInRestaurant = useCallback(async () => {
    dispatch({
      type: types.RESTAURANT_START
    });
    try {
      const res = await mernDashApi.get('/api/restaurent/me');
      dispatch({
        type: types.GET_LOGGED_IN_RESTAURANT,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: types.RESTAURANT_FAILURE,
        payload: error.response.data.error_msg
      });
    }
  }, []);

  const addRestaurant = useCallback(async (data) => {
    dispatch({
      type: types.RESTAURANT_START
    });
    try {
      const res = await mernDashApi.post('/api/restaurent/addrestaurent', data);
      dispatch({
        type: types.RESTAURANT_ADD,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: types.RESTAURANT_FAILURE,
        payload: error.response.data.error_msg
      });
    }
  }, []);

  const fetchRestaurantsByMonth = useCallback(async () => {
    dispatch({
      type: types.RESTAURANT_START
    });
    try {
      const res = await mernDashApi.get('/api/restaurent/group/group-by-month');
      dispatch({
        type: types.GET_RESTAURANTS_BY_MONTH,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: types.RESTAURANT_FAILURE,
        payload: error.response.data.error_msg
      });
    }
  }, []);

  const fetchSingleRestaurant = useCallback(async (id) => {
    dispatch({
      type: types.RESTAURANT_START
    });
    const tempState = { ...restaurantState };
    if (!tempState.restaurants) {
      try {
        const res = await mernDashApi.get(`/api/restaurent/single/${id}`);
        dispatch({
          type: types.GET_RESTAURANT,
          payload: res.data.data
        });
      } catch (error) {
        dispatch({
          type: types.RESTAURANT_FAILURE,
          payload: error.response.data.error_msg
        });
      }
    } else {
      const restaurant = tempState.fliter((restaurant) => restaurant._id == id);
      dispatch({
        type: types.GET_RESTAURANT,
        payload: restaurant
      });
    }
  }, []);

  const editRestaurantAction = useCallback(async (data) => {
    dispatch({
      type: types.RESTAURANT_START
    });
    try {
      const res = await mernDashApi.patch('/api/restaurent/edit-restaurent', data);
      dispatch({
        type: types.RESTAURANT_EDIT,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: types.RESTAURANT_FAILURE,
        payload: error.response.data.error_msg
      });
    }
  }, []);

  const deleteRestaurantAction = useCallback(async (id) => {
    dispatch({
      type: types.RESTAURANT_START
    });
    try {
      dispatch({
        type: types.RESTAURANT_DELETE,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: types.RESTAURANT_FAILURE,
        payload: error.response.data.error_msg
      });
    }
  }, []);

  const changeRestaurantPasswordAction = useCallback(async (data) => {
    dispatch({
      type: types.RESTAURANT_START
    });
    try {
      await mernDashApi.post('/api/auth/change-password', data);
      dispatch({
        type: types.RESTAURANT_PASSWORD_CHANGE
      });
    } catch (error) {
      dispatch({
        type: types.RESTAURANT_FAILURE,
        payload: error.response.data.error_msg
      });
    }
    fetchSingleRestaurant(data._id);
  }, []);

  useEffect(() => {
    fetchLoggedInRestaurant();
    fetchRestaurants();
    fetchRestaurantsByMonth();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurantState,
        fetchSingleRestaurant,
        fetchRestaurantsByMonth,
        editRestaurantAction,
        changeRestaurantPasswordAction,
        addRestaurant,
        deleteRestaurantAction,
        RestaurantReset
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

