import {
    DashboardOutlined,
    DollarCircleOutlined,
    EditOutlined,
    HomeFilled,
    MoneyCollectOutlined,
    SwitcherOutlined,
} from '@ant-design/icons';
import './App.css';
import { Input, Menu, Space } from 'antd';
//import { useState, useEffect } from 'react';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Space>
                    <Menu
                        mode="inline"
                        defaultOpenKeys={['dashboard']}
                        items={[
                            {
                                label: <Input.Search placeholder="Search here..."></Input.Search>,
                                key: 'search',
                            },
                            {
                                label: 'Home',
                                key: 'home',
                                icon: <HomeFilled />,
                            },
                            {
                                label: 'Dashboard',
                                key: 'dashboard',
                                icon: <DashboardOutlined />,
                                children: [
                                    {
                                        label: 'Revenue',
                                        key: 'rev',
                                        icon: <DollarCircleOutlined />,
                                    },
                                    {
                                        label: 'Expenses',
                                        key: 'exp',
                                        icon: <MoneyCollectOutlined />,
                                    },
                                ],
                            },

                            {
                                label: 'User Management',
                                key: 'um',
                                type: 'group',
                                children: [
                                    {
                                        label: 'Edit Profile',
                                        key: 'ep',
                                        icon: <EditOutlined />,
                                    },
                                    {
                                        label: 'Switch account',
                                        key: 'sa',
                                        icon: <SwitcherOutlined />,
                                    },
                                ],
                            },

                            {
                                label: 'Signout',
                                key: 'signout',
                                danger: true,
                            },
                        ]}
                    ></Menu>
                </Space>
            </header>
        </div>
    );
}
export default App;
