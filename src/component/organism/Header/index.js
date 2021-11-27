import React, { useEffect, useState } from "react";
import { Layout, Typography, Divider } from "antd";
import Avatar from "../../molecule/Avatar";
import Notification from "../../molecule/Notification";
import "./style.less";

const { Header } = Layout;
const { Text } = Typography;

const MyHeader = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="header-text-avatar">
        <Notification />
        <Avatar />
      </div>
    </Header>
  );
};

export default MyHeader;
