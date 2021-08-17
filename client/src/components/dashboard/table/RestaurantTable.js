import React from 'react';

import { Table, Switch } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    responsive: ['lg']
  },
  {
    title: 'Name',
    dataIndex: 'res_fullname',
    render: (text, record) => (
      <Link to={`/dashboard/restaurent/${record._id}`}>{text}</Link>
    ),
    sorter: (a, b) => a.res_fullname.length - b.res_fullname.length,
    sortDirections: ['descend']
  },

  {
    title: 'email',
    dataIndex: 'res_email',
    sorter: (a, b) => a.res_email.length - b.res_email.length,
    sortDirections: ['descend', 'ascend'],
    responsive: ['md']
  },
  {
    title: 'Active',
    dataIndex: 'isActive',
    filters: [
      {
        text: 'Active',
        value: true
      },
      {
        text: 'In Active',
        value: false
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.isActive === value,
    render: (bool) => <Switch checked={bool} />
  }
];
function RestaurantTable({ data }) {
  return (
    <>
      <Table
        className="clearfix"
        columns={columns}
        dataSource={data}
        style={{ clear: 'both' }}
        // onChange={onChange}
      />
    </>
  );
}

export default RestaurantTable;
