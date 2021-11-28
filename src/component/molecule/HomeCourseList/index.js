import React from "react";
import { PageHeader, Descriptions } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import "./style.less";

const HomeCourseList = () => {
  return (
    <div style={{ background: "#f0f2f5" }}>
      <PageHeader
        className="site-page-header"
        title="CSE 518"
        subTitle="Foundations of Human Computer Interactions"
        style={{ marginBottom: 10, background: "white" }}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Intructor">
            <a>Prof. Xiaojun Bi</a>
          </Descriptions.Item>
          <Descriptions.Item label="TA" span={2}>
            <a>Yoonsang Kim</a>,<a> Shahreen Salim Aunti</a>,<a>Dan Zhang</a>
          </Descriptions.Item>
          <Descriptions.Item label="Current Grade">100%</Descriptions.Item>
          <Descriptions.Item label="Next Due Date" span={2}>
            Dec 15, 2021 | 10 days 10 hour left
          </Descriptions.Item>
          <Descriptions.Item label="Meeting Time">
            Fri 10:00AM - 12:50PM
            <div>
              <VideoCameraOutlined style={{ marginLeft: 5 }} />
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="Upcoming class">
            Dec 3, 2021 | 3 days left
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <PageHeader
        className="site-page-header"
        title="CSE 523"
        subTitle="Advanced Project in Computer Science I"
        style={{ marginBottom: 10, background: "white" }}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Intructor">
            <a>Prof. Xiaojun Bi</a>
          </Descriptions.Item>
          <Descriptions.Item label="TA" span={2}>
            --
          </Descriptions.Item>
          <Descriptions.Item label="Current Grade">--</Descriptions.Item>
          <Descriptions.Item label="Next Due Date" span={2}>
            --
          </Descriptions.Item>
          <Descriptions.Item label="Meeting Time">--</Descriptions.Item>
          <Descriptions.Item label="Upcoming class">--</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
};

export default HomeCourseList;
