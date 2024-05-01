import React from 'react';
import './App.css';
import { Button, DatePicker, Input, Form, Select, Checkbox } from 'antd';
//import { useState } from 'react';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Form
                    autoComplete="off"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 14 }}
                    onFinish={(value) => {
                        console.log({ value });
                    }}
                    onFinishFailed={(error) => {
                        console.log({ error });
                    }}
                >
                    <Form.Item
                        name="fullname"
                        label="Full Name: "
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your full name',
                            },
                            { whitespace: true },
                            { min: 3 },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Type your full name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email: "
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your full email',
                            },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Type your email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password: "
                        rules={[
                            {
                                required: true,
                            },
                            { min: 6 },
                            {
                                validator: (_, value) => {
                                    if (value && value.includes('@')) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Password does not match to criteria');
                                },
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Type your password" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm password: "
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('password does not match');
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Confirm password" />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender (optional): ">
                        <Select placeholder="Chose your gender">
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option value="female">Female</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="dob"
                        label="Date of Birth: "
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your date of birth',
                            },
                        ]}
                        hasFeedback
                    >
                        <DatePicker style={{ width: '100%' }} picker="date" placeholder="Chose your Birthday" />
                    </Form.Item>
                    <Form.Item
                        name="website"
                        label="Website: "
                        rules={[
                            {
                                required: true,
                            },
                            { type: 'url', message: 'Please enter a valid url' },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Add your website url" />
                    </Form.Item>
                    <Form.Item
                        name="agreement"
                        wrapperCol={{ span: 24 }}
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) => {
                                    if (value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('To proceed, you must be agree to our Terms and Conditions');
                                },
                            },
                        ]}
                    >
                        <Checkbox>
                            {' '}
                            Agree to our <a href="#">Terms and Conditions</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item name="register" wrapperCol={{ span: 24 }}>
                        <Button block type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </header>
        </div>
    );
}

export default App;
