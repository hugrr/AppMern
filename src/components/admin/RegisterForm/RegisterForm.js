import React, { useState } from "react";
import { Form, Input, Button, notificacion, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import "./RegisterForm.scss";
import FormItem from "antd/lib/form/FormItem";

export default function () {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const register = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <Form className="register-form" onSubmit={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(00.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input "
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(00.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input "
          value={inputs.password}
        />
      </Form.Item>
      <FormItem>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(00.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input "
          value={inputs.repeatPassword}
        />
      </FormItem>
      <FormItem>
        <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
          He leido y acepto la politica de privacidad
        </Checkbox>
      </FormItem>
      <FormItem>
        <Button
          //onClick={register}
          htmlType="submit"
          className="register-form__button"
        >
          Crear cuenta
        </Button>
      </FormItem>
    </Form>
  );
}
