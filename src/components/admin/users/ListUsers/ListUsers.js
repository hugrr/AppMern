import React, { useState } from "react";
import { Switch, List, Avatar, Button } from "antd";
import NoAvatar from "../../../../assets/img/png/noAvatar.png";
import Modal from "../../../Modal";
import EditUSerForm from "../EditUserForm";

import Icon, {
  EditOutlined,
  StopOutlined,
  DeleteOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import "../ListUsers/ListUsers.scss";

export default function ListUsers(props) {
  const { usersActive, usersInactive } = props;
  const [viewsUsersActives, setViewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="list-users">
      <div className="list-users__switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActives(!viewsUsersActives)}
        />
        <span>
          {viewsUsersActives ? "  Usuarios Activos" : "  Usuarios Inactivos"}
        </span>
      </div>
      {viewsUsersActives ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
        />
      ) : (
        <UsersInactives usersInactive={usersInactive} />
      )}

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
function UsersActive(props) {
  const {
    usersActive,
    setIsVisibleModal,
    setModalContent,
    setModalTitle,
  } = props;

  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitle(
      `editar${user.name ? user.name : "..."}${
        user.lastname ? user.lastname : "..."
      }`
    );
    setModalContent(<EditUSerForm user={user} />);
  };
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => (
        <List.Item
          actions={[
            <Button type="primary" onClick={() => editUser(user)}>
              <Icon component={EditOutlined} />
            </Button>,
            <Button
              type="danger"
              onClick={() => console.log("Desactivar usuario")}
            >
              <Icon component={StopOutlined} />
            </Button>,
            <Button
              type="danger"
              onClick={() => console.log("Eliminar usuario")}
            >
              <Icon component={DeleteOutlined} />
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={user.Avatar ? user.avatar : NoAvatar} />}
            title={`${user.name ? user.name : "..."}
                        ${user.lastname ? user.lastname : "..."}`}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
}
function UsersInactives(props) {
  const { usersInactive } = props;
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => (
        <List.Item
          actions={[
            <Button
              type="primary"
              onClick={() => console.log("Activar Usuario")}
            >
              <Icon component={CheckOutlined} />
            </Button>,

            <Button
              type="danger"
              onClick={() => console.log("Eliminar usuario")}
            >
              <Icon component={DeleteOutlined} />
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={user.Avatar ? user.avatar : NoAvatar} />}
            title={`${user.name ? user.name : "..."}
                            ${user.lastname ? user.lastname : "..."}`}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
}
