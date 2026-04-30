import { Form, Input, Select, DatePicker, InputNumber } from "antd";

const { TextArea, Password } = Input;

const AppFormItem = ({
  type = "text",
  name,
  label,
  rules = [],
  options = [],
  ...rest
}) => {
  const renderField = () => {
    switch (type) {
      case "password":
        return <Password {...rest} />;

      case "textarea":
        return <TextArea {...rest} />;

      case "select":
        return (
          <Select {...rest}>
            {options.map((opt) => (
              <Select.Option key={opt.value} value={opt.value}>
                {opt.label}
              </Select.Option>
            ))}
          </Select>
        );

      case "date":
        return <DatePicker className="w-full" {...rest} />;

      case "number":
        return <InputNumber className="w-full" {...rest} />;

      default:
        return <Input {...rest} />;
    }
  };

  return (
    <Form.Item name={name} label={label} rules={rules}>
      {renderField()}
    </Form.Item>
  );
};

export default AppFormItem;