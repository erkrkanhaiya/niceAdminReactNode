import React, { useContext } from 'react';
import DashboardHOC from './DashboardHOC';
import RestaurantTable from './table/RestaurantTable';
import { Link } from 'react-router-dom';
import CustomLoader from '../common/CustomLoader';
import { RestaurantContext } from '../../context/restaurant/restaurantContext';

const index = '2';
function RestaurantListPage() {
  const { restaurants, loading } = useContext(RestaurantContext).restaurantState;

  return (
    <div>
      <Link
        to="/dashboard/add-new-resaturent"
        className="btn btn-primary float-right cursor-pointer mb-2 "
      >
        Add new Restaurant
      </Link>
      {!loading ? (
        <RestaurantTable data={restaurants} />
      ) : (
        <CustomLoader text={'Getting Restaurants List from DB! Hold on gee...'} />
      )}
    </div>
  );
}

export default DashboardHOC(RestaurantListPage, index);
