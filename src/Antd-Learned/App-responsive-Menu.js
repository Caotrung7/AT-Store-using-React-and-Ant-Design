import { MenuOutlined } from '@ant-design/icons';
import './App.css';
import { Menu, Drawer } from 'antd';
import { useState } from 'react';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const AppMenu = ({ isInline = false }) => {
    return (
      <Menu
        style={{
          color: 'white',
          backgroundColor: 'darkorange',
          fontSize: 24,
          border: 'none',
        }}
        mode={isInline ? 'inline' : 'horizontal'}
        items={[
          {
            label: 'Home',
            key: 'home',
          },
          {
            label: 'Contact Us',
            key: 'contact',
          },
          {
            label: 'About Us',
            key: 'about',
          },
          {
            label: 'Login',
            key: 'login',
          },
        ]}
      ></Menu>
    );
  };

  return (
    <div style={{ height: '100vh', backgroundColor: 'lightskyblue' }}>
      <div
        style={{
          backgroundColor: 'darkorange',
          height: 60,
          paddingLeft: 12,
          paddingTop: 12,
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: 'white', fontSize: 30 }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <span className="headerMenu">
        <AppMenu />
      </span>
      <Drawer
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: 'darkorange' }}
      >
        <AppMenu />
      </Drawer>
    </div>
  );
}

export default App;
