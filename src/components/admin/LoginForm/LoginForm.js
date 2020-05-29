import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

import Icon, { LockOutlined, UserOutlined } from "@ant-design/icons";

import "./LoginForm.scss";
import FormItem from "antd/lib/form/FormItem";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    const result = await signInApi(inputs);

    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login correcto.",
      });
      window.location.href = "/admin";
    }
  };
  return (
    <Form className="login-form" onChange={changeForm} onFinish={login}>
      <FormItem>
        <Input
          prefix={
            <Icon
              component={UserOutlined}
              style={{ color: "rgba(0,0,0,.25)" }}
            />
          }
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="login-form__input"
        />
      </FormItem>
      <FormItem>
        <Input
          prefix={
            <Icon
              component={LockOutlined}
              style={{ color: "rgba(0,0,0,.25)" }}
            />
          }
          type="password"
          name="password"
          placeholder="Correo electronico"
          className="login-form__input"
        />
      </FormItem>

      <Button htmlType="submit" className="login-form__button">
        Entrar
      </Button>
    </Form>
  );
}
