import React from "react";
import { Router, Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;
  // console.log(props);
  return (
    <Layout>
      <h2>Menu sider Admin</h2>
      <Layout>
        <Header>Header...</Header>
        <Content>
          <LoadRouters routes={routes} />
        </Content>
        <Footer>Hugo Rojas Rios</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRouters({ routes }) {
  console.log(routes);
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
