import React from "react";
import HugoLogo from "../../../assets/img/png/logo1.png";
import { Button } from "antd";
import { logout } from "../../../api/auth";

import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={HugoLogo}
          alt="Hugo Rojas Rios"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? (
            <MenuUnfoldOutlined style={{ fontSize: "16px" }} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: "16px" }} />
          )}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={logoutUser}>
          <PoweroffOutlined style={{ fontSize: "16px" }} />
        </Button>
      </div>
    </div>
  );
}
