import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Form, Input, Button,  Switch } from 'antd';
import {
  UserOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';

function RestaurantForm({ restaurant, onFinish, loading }) {

  return (
    <>
      <Form
        name="add_restaurant_form"
        className="login-form"
        initialValues={restaurant}
        onFinish={onFinish}
        layout="vertical"
        size="large"
        style={{ clear: 'both' }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <h3>Restaurant Details: </h3>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item
              name="res_fullname"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'Please input restaurant name!'
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon"/>}
                placeholder="John Doe"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="res_mobile"
              label="Phone No"
              rules={[
                {
                  required: true,
                  message: 'Please input phone no!'
                }
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon"/>}
                placeholder="+91"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item
              name="res_address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: 'Please input restaurant address!'
                }
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined className="site-form-item-icon"/>}
                placeholder="901, DCEM "
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="res_email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!'
                }
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon"/>}
                placeholder="Email"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <h3>Owner Details: </h3>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item
              name="owner_fullname"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'Please input restaurant name!'
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon"/>}
                placeholder="John Doe"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="owner_mobile"
              label="Phone No"
              rules={[
                {
                  required: true,
                  message: 'Please input phone no!'
                }
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon"/>}
                placeholder="+91"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item
              name="owner_address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: 'Please input restaurant address!'
                }
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined className="site-form-item-icon"/>}
                placeholder="vaishali nagar, jaipur "
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="owner_email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!'
                }
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon"/>}
                placeholder="Email"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Active Status" name="isActive">
          <Switch defaultChecked={restaurant ? restaurant.isActive : false}/>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            loading={loading}
            htmlType="submit"
            className="mr-2"
            disabled={loading}
          >
            Save
          </Button>
          <Button type="info" className="login-form-button">
            <Link to="/dashboard/restaurent">Back</Link>
          </Button>`
        </Form.Item>
      </Form>
    </>
  );
}

export default RestaurantForm;