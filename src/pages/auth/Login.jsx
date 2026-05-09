import { Link, useNavigate } from "react-router-dom";
import AppForm from "../common/form/AppForm";
import AppFormItem from "../common/form/AppFormItem";
import { Button } from "antd";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = (values) => {
    const isValue = ["email", "password"].every((field) =>
      values[field]?.trim()
    );

    if (isValue) {
      return handleLogin();
    } else {
      return console.log("Please fill in all fields");
    }
  };

   const handleLogin = () => {
    // fake token from API
    const fakeToken = "123456";

    login(fakeToken);

    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card-body">
          <div className="auth-header">
            {/* <p className="auth-brand">Nexus CRM</p> */}
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-subtitle">
              Enter your details to access your dashboard.
            </p>
          </div>

        <AppForm
          onFinish={onFinish}
          className="auth-form"
        >
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
            placeholder="Enter your password"
            rules={[{ required: true, message: "Password required" }]}
            className="auth-input"
          />

          <div className="auth-row">
            <label className="auth-checkbox-label">
              <input type="checkbox" className="auth-checkbox" defaultChecked />
              <span>Remember me</span>
            </label>

            <button type="button" className="auth-link-button cursor-pointer">
              Forgot password?
            </button>
          </div>

          <Button htmlType="submit" className="auth-submit-button">
            Login
          </Button>
        </AppForm>

          <div className="auth-footer">
            <p>
              Don&apos;t have an account? <Link to="/register">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
