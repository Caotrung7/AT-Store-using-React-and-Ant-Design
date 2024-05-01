import {
  DashboardOutlined,
  HomeOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './App.css';
import { Menu } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function Header() {
    return (
      <div
        style={{
          height: 60,
          backgroundColor: 'teal',
          color: 'gold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        Header
      </div>
    );
  }

  function Footer() {
    return (
      <div
        style={{
          height: 60,
          backgroundColor: 'lightgray',
          color: 'teal',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        Footer
      </div>
    );
  }

  const SideMenu = () => {
    return (
      <div>
        <Menu
          onClick={({ key }) => {
            if (key === 'signout') {
              //TODO, sign out feature here
            } else {
              navigate(key);
            }
          }}
          defaultSelectedKeys={[window.location.pathname]}
          items={[
            { label: 'Home', key: '/', icon: <HomeOutlined /> },
            { label: 'Dashboard', key: '/dashboard', icon: <DashboardOutlined /> },
            {
              label: 'Users List',
              key: '/usersList',
              icon: <UnorderedListOutlined />,
              children: [
                { label: 'Active Users', key: 'activeUsers' },
                { label: 'Disable Users', key: 'disableUsers' },
              ],
            },
            { label: 'Profile', key: '/profile', icon: <UserOutlined /> },
            { label: 'Sign out', key: 'signout', icon: <PoweroffOutlined />, danger: true },
          ]}
        ></Menu>
      </div>
    );
  };

  function Home() {
    return <div>Home Component</div>;
  }

  const Content = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
          <Route path="/usersList" element={<div>Users List</div>}></Route>
          <Route path="/profile" element={<div>Profile</div>}></Route>
          <Route path="/activeUsers" element={<div>Active Users</div>}></Route>
          <Route path="/disableUsers" element={<div>Disable Users</div>}></Route>
        </Routes>
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100vh',
      }}
    >
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
