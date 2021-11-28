import React from "react";
import { Cascader } from "antd";

const CourseDropdown = () => {
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
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Select course"
      />
      ,
    </>
  );
};

export default CourseDropdown;
