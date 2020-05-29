import React, { useState } from "react";
import { Form, Input, Button, notification, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import {
  emailValidation,
  minLengthValidation,
} from "../../../utils/FormValidation";

import { signUpApi } from "../../../api/user";
import "./RegisterForm.scss";
import FormItem from "antd/lib/form/FormItem";

export default function () {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
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

  const inputValidation = (e) => {
    const { type, name } = e.target;
    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }
    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  const register = async (e) => {
    const emailValue = inputs.email;
    const passwordValue = inputs.password;
    const repeatPasswordValue = inputs.repeatPassword;
    const privacyPolicyValue = inputs.privacyPolicy;

    if (
      !emailValue ||
      !passwordValue ||
      !repeatPasswordValue ||
      !privacyPolicyValue
    ) {
      notification["error"]({ message: "Todos los campos son obligatorios" });
    } else {
      if (passwordValue !== repeatPasswordValue) {
        notification["error"]({
          message: "Las contraseñas tiene que ser iguales",
        });
      } else {
        if (!passwordValue === false) {
          notification["error"]({
            message: "Las contraseñas debe ser igual o mayor 6 digitos",
          });
        } else {
          const result = await signUpApi(inputs);
          if (!result.ok) {
            notification["error"]({ message: result.message });
          } else {
            notification["success"]({ message: result.message });
            resetForm();
          }
        }
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }
    setInputs({
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });

    setFormValid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };
  return (
    <Form className="register-form" onFinish={register} onChange={changeForm}>
      <Form.Item>
        <Input
          /* prefix={
            <Icon
              component={UserOutlined}
              style={{ color: "rgba(0,0,0,.25)" }}
            />
          }*/
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input "
          value={inputs.email}
          onChange={inputValidation}
        />
      </Form.Item>
      <Form.Item>
        <Input
          /* prefix={
            <Icon
              component={LockOutlined}
              style={{ color: "rgba(0,0,0,.25)" }}
            />
          }*/
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input "
          value={inputs.password}
          onChange={inputValidation}
        />
      </Form.Item>
      <FormItem>
        <Input
          //sin prefix

          /*  prefix={
            <Icon
              component={LockOutlined}
              style={{ color: "rgba(0,0,0,.25)" }}
            />
          }*/
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input "
          value={inputs.repeatPassword}
          onChange={inputValidation}
        />
      </FormItem>
      <FormItem>
        <Checkbox
          name="privacyPolicy"
          checked={inputs.privacyPolicy}
          onChange={inputValidation}
        >
          He leido y acepto la politica de privacidad
        </Checkbox>
      </FormItem>
      <FormItem>
        <Button htmlType="submit" className="register-form__button">
          Crear cuenta
        </Button>
      </FormItem>
    </Form>
  );
}
