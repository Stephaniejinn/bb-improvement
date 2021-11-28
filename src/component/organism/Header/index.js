import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";
import { Layout, Typography } from "antd";
import Avatar from "../../molecule/Avatar";
import Notification from "../../molecule/Notification";
import SearchTerm from "../../molecule/SearchTerm";
import "./style.less";

const MyHeader = () => {
  const { Text } = Typography;
  const { Header } = Layout;
  const [currentTime, setCurrentTime] = useState(
    moment(new Date()).format("YYYY/MM/DD HH:mm:ss")
  );

  useEffect(() => {
    const intv = setInterval(() => {
      setCurrentTime(moment(new Date()).format("YYYY/MM/DD HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(intv);
    };
  }, []);
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {/* <div className="header-text-search"> */}
      <div className="header-text-avatar">
        <SearchTerm />
        <Text>{currentTime}</Text>
        <Notification />
        <Avatar />
      </div>
    </Header>
  );
};

export default MyHeader;
