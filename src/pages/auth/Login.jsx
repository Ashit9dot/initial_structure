import { useNavigate } from "react-router-dom";
import AppForm from "../common/form/AppForm";
import AppFormItem from "../common/form/AppFormItem";
import { Button } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const isValue = Object.values(values).every((val) => val !== "");
    if (isValue) {
      return navigate("/");
    } else {
      return console.log("Please fill in all fields");
    }
  };

  return (
    <>
      {/* <p className="text-2xl font-bold text-center mb-10">Login</p> */}
      <div className="flex justify-center">
        <AppForm
          onFinish={onFinish}
          initialValues={{ role: "user" }}
          className="max-w-125 w-full"
        >
          <div className="grid grid-cols-2 gap-4">
            <AppFormItem
              name="firstName"
              label="First Name"
              placeholder="Enter first name"
              rules={[{ required: true, message: "Required" }]}
            />

            <AppFormItem
              name="email"
              label="Email"
              type="text"
              rules={[{ required: true, message: "Email required" }]}
            />

            <AppFormItem
              name="password"
              label="Password"
              type="password"
              rules={[{ required: true, message: "Password required" }]}
            />

            <AppFormItem
              name="role"
              label="Role"
              type="select"
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
            />

            <AppFormItem name="dob" label="Date of Birth" type="date" />

            <AppFormItem name="bio" label="Bio" type="textarea" />
          </div>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </AppForm>
      </div>
    </>
  );
};

export default Login;
