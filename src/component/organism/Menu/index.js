import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Menu } from "antd";
import {
  HomeOutlined,
  CalendarOutlined,
  ReadOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  RiseOutlined,
  NotificationOutlined,
  FolderOpenOutlined,
  EditOutlined,
} from "@ant-design/icons";
// import "./style.less";

const MySider = () => {
  const { pathname: path } = window.location;

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["/"]}
      selectedKeys={path}
      style={{ background: "#2b2828" }}
    >
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/course" icon={<FileTextOutlined />}>
        <Link to="/course">Course</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<NotificationOutlined />}>
        Annoucement
      </Menu.Item>
      <Menu.Item key="4" icon={<EditOutlined />}>
        Assignment
      </Menu.Item>
      <Menu.Item key="5" icon={<RiseOutlined />}>
        Grade
      </Menu.Item>
      <Menu.Item key="6" icon={<FolderOpenOutlined />}>
        Material
      </Menu.Item>
      <Menu.Item key="7" icon={<CalendarOutlined />}>
        Calendar
      </Menu.Item>
      <Menu.Item key="8" icon={<ReadOutlined />}>
        Library
      </Menu.Item>
      <Menu.Item key="9" icon={<CustomerServiceOutlined />}>
        Student Service
      </Menu.Item>
    </Menu>
  );
};

export default MySider;
