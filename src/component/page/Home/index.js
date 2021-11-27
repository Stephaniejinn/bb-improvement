import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Menu from "../../organism/Menu";
import Header from "../../organism/Header";
import logo from "../../../assets/logo.png";
import logoCollapsed from "../../../assets/logo-collapsed.png";
import "./style.less";

const Home = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const { Sider, Content } = Layout;

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <div className="home-page">
      <Layout>
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
          <div className="logo-position">
            {isCollapsed ? (
              <img
                src={logoCollapsed}
                className="logo-collapsed"
                alt="logo collapsed"
              />
            ) : (
              <>
                <img src={logo} className="logo" alt="logo" />
              </>
            )}
          </div>
          <Menu />
        </Sider>
        <Layout className="site-layout">
          <Header />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
