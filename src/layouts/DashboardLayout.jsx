import { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const sidebarItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
      link: "input",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
    {
      key: "4",
      icon: <UploadOutlined />,
      label: "nav 4",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sidebarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button type="primary" onClick={handleLogout} className="mr-5">
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
