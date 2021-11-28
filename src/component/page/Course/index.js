import React, { useState } from "react";
import { Layout } from "antd";
import Menu from "../../organism/Menu";
import Header from "../../organism/Header";
import Content from "../../organism/CourseContent";
import logo from "../../../assets/logo.png";
import logoCollapsed from "../../../assets/logo-collapsed.png";
import "./style.less";

const CoursePage = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const { Sider } = Layout;

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
          <Content />
        </Layout>
      </Layout>
    </div>
  );
};

export default CoursePage;
