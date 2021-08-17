import * as types from './restaurantActionTypes';

export default (state, action) => {
  switch (action.type) {
    case types.RESTAURANT_START:
      return {
        ...state,
        loading: true,
        message: null,
        restaurant: null,
        error: null
      };

    case types.RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload
      };
    case types.GET_LOGGED_IN_RESTAURANT:
      return {
        ...state,
        loading: false,
        me: action.payload
      };
    case types.GET_RESTAURANT:
      return {
        ...state,
        loading: false,
        restaurant: action.payload,
        error: false,
        errResponse: ''
      };
    case types.RESTAURANT_ADD:
      return {
        restaurants: [action.payload, ...state.restaurants],
        loading: false,
        error: false,
        errResponse: '',
        message: 'Add success'
      };

    case types.RESTAURANT_EDIT:
      const tempState = state.restaurants
        .slice()
        .filter((data) => data._id !== action.payload._id);

      return {
        ...state,
        restaurants: [action.payload, ...tempState],
        loading: false,
        error: false,
        errResponse: '',
        restaurant: action.payload,
        message: 'Edited success'
      };

    case types.RESTAURANT_DELETE:
      return {
        ...state,
        restaurants: [
          ...state.restaurants.slice().filter((data) => data._id !== action.payload)
        ],
        loading: false,
        error: false,
        errResponse: '',
        restaurant: null,
        message: 'Deleted successfully'
      };
    case types.RESTAURANT_PASSWORD_CHANGE:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        message: 'Password change success'
      };
    case types.GET_RESTAURANTS_BY_MONTH:
      return {
        ...state,
        loading: false,
        restaurantsByMonth: action.payload,
        error: false,
        errResponse: ''
      };

    case types.RESTAURANT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload
      };
    case types.RESTAURANT_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        message: null
      };

    default:
      return state;
  }
};
