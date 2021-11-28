import React from "react";
import { Cascader } from "antd";

const SearchTerm = () => {
  const onChange = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: "2021",
      label: "2021",
      children: [
        {
          value: "Fall",
          label: "Fall semester",
        },
        {
          value: "Winter",
          label: "Winter semester",
        },
        {
          value: "Spring",
          label: "Spring semester",
        },
      ],
    },
    {
      value: "2022",
      label: "2022",
      children: [
        {
          value: "Fall",
          label: "Fall semester",
        },
        {
          value: "Spring",
          label: "Spring semester",
        },
      ],
    },
  ];

  return (
    <Cascader options={options} onChange={onChange} placeholder="Select term" />
  );
};

export default SearchTerm;
