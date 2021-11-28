import React from "react";
import { Menu, Dropdown, Typography, Divider, Avatar, Button } from "antd";
import {
  SettingOutlined,
  ExportOutlined,
  UserOutlined,
  BankOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

import "./style.less";

const MyAvatar = () => {
  const { Text } = Typography;

  const HandleLogout = () => {
    console.log("log out");
  };
  const dropdownContent = (
    <Menu style={{ width: 190 }}>
      <Menu.Item>
        <UserOutlined />
        <Text
          type="secondary"
          strong
          style={{ marginBottom: 6, paddingLeft: 8 }}
        >
          Wenhui jin
        </Text>
      </Menu.Item>
      <Menu.Item>
        <IdcardOutlined />
        <Text type="secondary" strong style={{ paddingLeft: 8 }}>
          123456789
        </Text>
      </Menu.Item>
      <Menu.Item>
        <BankOutlined />
        <Text type="secondary" strong style={{ paddingLeft: 8 }}>
          Computer Science
        </Text>
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <SettingOutlined style={{ marginRight: 8 }} />
        Setting
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <Button
          size="small"
          type="link"
          style={{ color: "#595c97", padding: 0 }}
          onClick={HandleLogout}
        >
          <ExportOutlined />
          Log out
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      overlay={dropdownContent}
      trigger={["click"]}
      placement="bottomRight"
      arrow
    >
      <Avatar
        shape="square"
        style={{
          backgroundColor: "#2b2828",
          verticalAlign: "middle",
        }}
        size="large"
      >
        WJ
      </Avatar>
    </Dropdown>
  );
};

export default MyAvatar;
