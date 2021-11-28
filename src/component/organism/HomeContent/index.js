import React, { useState } from "react";
import { Layout } from "antd";
import HomeCourseList from "../../molecule/HomeCourseList";
import "./style.less";

const HomeContent = () => {
  const { Content } = Layout;

  return (
    <div>
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          minHeight: 150,
        }}
      >
        <HomeCourseList />
      </Content>
    </div>
  );
};

export default HomeContent;
