import { Form } from "antd";
import React from "react";

const AppForm = ({
  children,
  layout = "vertical",
  onFinish,
  initialValues,
  className = "",
}) => {
  return (
    <Form
      layout={layout}
      onFinish={onFinish}
      initialValues={initialValues}
      className={className}
    >
      {children}
    </Form>
  );
};

export default AppForm;
