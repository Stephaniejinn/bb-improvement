import React from "react";
import { Layout } from "antd";
import CourseContentHeader from "../../molecule/CourseContentHeader";
import CourseTab from "../../molecule/CourseTab";

import "./style.less";

const CourseContent = () => {
  const { Content } = Layout;

  return (
    <div>
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          //   padding: 24,
          minHeight: 280,
        }}
      >
        <CourseContentHeader />
        <CourseTab />
      </Content>
    </div>
  );
};

export default CourseContent;
