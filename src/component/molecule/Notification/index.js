import React from "react";
import { Dropdown, List, Badge, Tabs } from "antd";
import { BellFilled } from "@ant-design/icons";

import "./style.less";

const Notification = () => {
  const { TabPane } = Tabs;
  const data = [
    {
      title: "CSE 518 (1)",
    },
    {
      title: "CSE 523",
    },
    {
      title: "CSE 524",
    },
  ];

  const dropdownContent = (
    <div style={{ width: 450 }}>
      <Tabs defaultActiveKey="1" centered style={{ background: "#fff" }}>
        <TabPane tab="Announcement(1)" key="1">
          <div style={{ paddingLeft: 18, paddingRight: 7 }}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description="Latest announcement of the course"
                  />
                </List.Item>
              )}
            />
          </div>
        </TabPane>
        <TabPane tab="Assignment(1)" key="2">
          <div style={{ paddingLeft: 18, paddingRight: 7 }}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description="Most recent assignment of the course"
                  />
                </List.Item>
              )}
            />
          </div>
        </TabPane>
        <TabPane tab="Grade(1)" key="3">
          <div style={{ paddingLeft: 18, paddingRight: 7 }}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description="The grade of most recent exam of the course"
                  />
                </List.Item>
              )}
            />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
  return (
    <Dropdown
      overlay={dropdownContent}
      trigger={["click"]}
      placement="bottomRight"
      arrow
    >
      <Badge count={3}>
        <BellFilled style={{ fontSize: 20 }} />
      </Badge>
    </Dropdown>
  );
};

export default Notification;
