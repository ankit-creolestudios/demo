import React, { useEffect, useState } from "react";
import { actions, signInAndSigoutAction } from "../../app/feature/authSlice";
import { Link } from "react-router-dom";
import { Button, Col, Form, Input, Layout, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { Content } = Layout;
const SignupForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const onFinish = async (values) => {
    dispatch(actions.login({ ...values }));
  };
  return (
    <div className="login__form">
      <div className="signup__wrapper">
        <Content>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            {" "}
            <h1 className="mb-3">Register</h1>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
              autoComplete="off"
            >
              <Input autoComplete="off" />
            </Form.Item>
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
            <Form.Item
              label="Profile Image"
              name="images"
              rules={[{ required: true, message: "Please upload your image" }]}
              autoComplete="off"
            >
              <Input autoComplete="off" type={"image"} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Signup
              </Button>
            </Form.Item>
            <div className="py-1 mt-3 text-center">
              {/* Already have account?<Link href="/login">Signin</Link> */}
            </div>
          </Form>
        </Content>
      </div>
    </div>
  );
};

export default SignupForm;
