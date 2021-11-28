import React from "react";
import { Tabs, List, Avatar } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const HomeTab = () => {
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  };
  const operations = <SettingOutlined />;

  const data = [
    {
      title: "Some deadlines and midterm paper 11/23/21, 14:54",
    },
    {
      title: "Come and get your Midterm paper | 11/19/21, 15:50",
    },
    {
      title: "Assignment 3 has been published | 11/12/21, 15:12",
    },
  ];

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        style={{ margin: 24 }}
        type="card"
        tabBarExtraContent={operations}
      >
        <TabPane tab="Announcement" key="1">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size={40}>DZ</Avatar>}
                  title={item.title}
                  description="Here are some description of the announcement"
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Assignment" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Course Documents" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Grade" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Syllabus" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tools" key="6">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default HomeTab;
