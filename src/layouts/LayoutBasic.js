import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu sider Basic</h2>
      <Layout>
        <Content>
          <LoadRouters routes={routes} />
        </Content>
        <Footer>Hugo Rojas Rios</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRouters({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
