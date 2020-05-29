import React, { useState, useCallback } from "react";
import { Avatar, form, Icon, Input, Select, Button, Row, col } from "antd";
import { useDropzone } from "react-dropzone";
import NoAvatar from "../../../../assets/img/png/noAvatar.png";
import "./EditUserForm.scss";

export default function (props) {
  const { user } = props;
  const [avatar, setAvatar] = useState(null);

  return (
    <div>
      <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
      <h2>{user.email}</h2>
    </div>
  );
}

function UploadAvatar(props) {
  const { avatar, setAvatar } = props;
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setAvatar({ file, preview: URL.createObjectURL(file) });
    },
    [setAvatar]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });

  return (
    <div className="upload-avatar" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Avatar size={150} src={NoAvatar} />
      ) : (
        <Avatar size={150} src={avatar ? avatar.preview : NoAvatar} />
      )}
    </div>
  );
}
