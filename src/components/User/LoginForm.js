import React, { useEffect, useState } from "react";
import { actions, signInAndSigoutAction } from "../../app/feature/authSlice";
// import { Link } from "react-router-dom";
import { Button, Col, Form, Input, Layout, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../app/feature/productSlice";
const { Content } = Layout;
const LoginForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const onFinish = async (values) => {
    dispatch(actions.login({ ...values }));
    dispatch(productActions.getAllProduct());
  };
  useEffect(() => {
    dispatch(productActions.getAllProduct());
  }, [dispatch]);
  return (
    <div className="login__form">
      <div className="login__wrapper">
        <div>
          <h1 className="form__title">Login</h1>
        </div>
        <Content>
          {/* <Row>
            <Col span={48}> */}
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            {" "}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
              autoComplete="off"
            >
              <Input autoComplete="off" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password autoComplete="off" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
            <div class="form_more_area">
              <div className="mb-4">
                <a href="/forget-password">Forgot Password?</a>
              </div>
              <div className="py-1 mt-3 text-center">
                New User? <a href="/register">Signup</a>
              </div>
            </div>
          </Form>
          {/* </Col>
          </Row> */}
        </Content>
      </div>
    </div>
  );
};

export default LoginForm;
