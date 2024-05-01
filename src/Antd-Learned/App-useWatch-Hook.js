import { MenuOutlined } from '@ant-design/icons';
import './App.css';
import { Form, Input, Select } from 'antd';
import { useState } from 'react';

function App() {
  const [form] = Form.useForm();
  const name = Form.useWatch('myName', form);
  const expert = Form.useWatch('expert', form);

  console.log(name);

  return (
    <div className="App">
      <h1>Welcome back {name}!</h1>
      <Form form={form}>
        <Form.Item label="Name" name={'myName'}>
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item label="Expertise" name={'expert'}>
          <Select
            placeholder="Select expertise"
            options={[
              {
                lable: 'JavaScript',
                value: 'javascript',
              },
              {
                lable: 'React',
                value: 'react',
              },
              {
                lable: 'Ant design',
                value: 'antd',
              },
              {
                lable: 'Other',
                value: 'other',
              },
            ]}
          />
        </Form.Item>
        {expert === 'other' ? (
          <Form.Item label="Please specify" name={'specify'}>
            <Input placeholder="Please specify" />
          </Form.Item>
        ) : null}
      </Form>
    </div>
  );
}

export default App;
