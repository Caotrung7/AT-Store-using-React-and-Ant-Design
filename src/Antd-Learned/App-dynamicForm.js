import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './App.css';
import { Form, Button, Input, Space, Select } from 'antd';

function App() {
  const onFinish = (values) => {
    console.log(values);
  };

  const initialValues = {
    teacher: 'CT7',
    students: [
      {},
      {
        first: 'David',
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form initialValues={initialValues} onFinish={onFinish} style={{ width: 500 }}>
          <Form.Item name={'teacher'} label="Teacher Name">
            <Input placeholder="Teacher Name" />
          </Form.Item>
          <Form.Item name={'class'} label="Class Name">
            <Input placeholder="Class Name" />
          </Form.Item>
          <Form.List name={'students'}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => {
                  return (
                    <Space key={field.key} direction="horizontal">
                      <Form.Item
                        name={[field.name, 'first']}
                        label={`${index + 1}-Student`}
                        rules={[{ required: true, message: 'First name require' }]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item name={[field.name, 'last']}>
                        <Input placeholder="Last Name" />
                      </Form.Item>
                      <Form.Item name={[field.name, 'gender']}>
                        <Select placeholder="gender">
                          {['Male', 'Female'].map((gender) => {
                            return <Select.Option value={gender}>{gender}</Select.Option>;
                          })}
                        </Select>
                      </Form.Item>
                      <MinusCircleOutlined
                        style={{ height: 40, color: 'red' }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Space>
                  );
                })}
                <Form.Item>
                  <Button
                    icon={<PlusOutlined />}
                    type="dashed"
                    block
                    onClick={() => {
                      add();
                    }}
                  >
                    Add a Student
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}
export default App;
