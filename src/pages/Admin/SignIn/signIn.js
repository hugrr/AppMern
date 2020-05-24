import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo1.png";
import RegisterForm from "../../../components/admin/RegisterForm";

import "./SignIn.scss";

export default function SingIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Hugo Rojas Rios" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              componente LoginForm
            </TabPane>
            <TabPane tab={<span>Nuevo Usuario</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
