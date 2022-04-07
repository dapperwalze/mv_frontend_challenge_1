import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const ComingSoon = () => {
  return (
    <div
      style={{ height: "70vh" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      {" "}
      <Title level={1}>Coming soon!</Title>
    </div>
  );
};
export default ComingSoon;
