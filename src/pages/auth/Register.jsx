import { Link, useNavigate } from "react-router-dom";
import AppForm from "../common/form/AppForm";
import AppFormItem from "../common/form/AppFormItem";
import { Button } from "antd";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const isValue = ["firstName", "email", "password", "role"].every((field) =>
      values[field]?.trim()
    );

    if (isValue) {
      return navigate("/login");
    } else {
      return console.log("Please fill in all fields");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card-body">
          <div className="auth-header">
            <h1 className="auth-title">Create account</h1>
            <p className="auth-subtitle">
              Set up your profile to start using your workspace.
            </p>
          </div>

          <AppForm
            onFinish={onFinish}
            initialValues={{ role: "user" }}
            className="auth-form"
          >
            <AppFormItem
              name="firstName"
              label="Full name"
              placeholder="Enter your full name"
              rules={[{ required: true, message: "Name required" }]}
              className="auth-input"
            />

            <AppFormItem
              name="email"
              label="Email address"
              type="text"
              placeholder="name@company.com"
              rules={[{ required: true, message: "Email required" }]}
              className="auth-input"
            />

            <AppFormItem
              name="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              rules={[{ required: true, message: "Password required" }]}
              className="auth-input"
            />

            <Button type="primary" htmlType="submit" className="auth-submit-button">
              Create account
            </Button>
          </AppForm>

          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
