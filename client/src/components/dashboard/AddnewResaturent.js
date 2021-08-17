import React, { useContext } from 'react';
import RestaurantForm from './form/RestaurantForm';
import DashboardHOC from './DashboardHOC';
import { RestaurantContext } from '../../context/restaurant/restaurantContext';

function AddNewRestaurant() {
  const { addRestaurant } = useContext(RestaurantContext);
  const onFinish = (values) => {
    console.log(values);
    addRestaurant(values);
  };
  return (
    <>
      <RestaurantForm onFinish={onFinish} />
    </>
  );
}

export default DashboardHOC(AddNewRestaurant);