import React from "react";
import { Cascader, PageHeader, Button, Descriptions } from "antd";

const CourseContentHeader = () => {
  const routes = [
    {
      path: "index",
      breadcrumbName: "2021",
    },
    {
      path: "first",
      breadcrumbName: "Fall",
    },
    {
      path: "second",
      breadcrumbName: "Course",
    },
  ];
  const options = [
    {
      value: "CSE518",
      label: "CSE518",
    },
    {
      value: "CSE523",
      label: "CSE523",
    },
    {
      value: "CSE524",
      label: "CSE524",
    },
  ];

  const onChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        className="site-page-header"
        title="CSE 518"
        breadcrumb={{ routes }}
        subTitle="Foundations of Human Computer Interactions"
        extra={[
          <Cascader
            options={options}
            onChange={onChange}
            placeholder="Select course"
            style={{ width: 150 }}
          />,
          <Button key="1" type="primary">
            Go
          </Button>,
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Intructor">
            <a>Prof. Xiaojun Bi</a>
          </Descriptions.Item>
          <Descriptions.Item label="TA" span={2}>
            <a>Yoonsang Kim</a>,<a> Shahreen Salim Aunti</a>,<a>Dan Zhang</a>
          </Descriptions.Item>
          <Descriptions.Item label="Current Grade">100%</Descriptions.Item>
          <Descriptions.Item label="Due Date">
            December 15, 2021 | 10 days 10 hour left
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </>
  );
};

export default CourseContentHeader;
