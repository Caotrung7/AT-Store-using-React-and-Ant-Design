import './App.css';
import { Typography, Input, Space, DatePicker } from 'antd';
//import { useState, useEffect } from 'react';
import './override.scss';

function CustomInput1() {
    return (
        <div className="customInput1">
            <Input placeholder="Type here" />
        </div>
    );
}

function CustomInput2() {
    return (
        <div className="customInput2">
            <Input placeholder="Type here" />
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Space size={12} direction="vertical">
                    <Typography.Text
                    //style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}
                    >
                        Code with CT7
                    </Typography.Text>
                    <span className="welcome-message">
                        <Typography.Text>Welcome back!</Typography.Text>
                    </span>
                    <CustomInput1 />
                    <CustomInput2 />
                    <DatePicker
                        style={{ width: '100%' }}
                        className="dataPicker"
                        //dropdownClassName="datePickerDropdown"
                        popupClassName="datePickerPopup"
                    ></DatePicker>
                </Space>
            </header>
        </div>
    );
}
export default App;
