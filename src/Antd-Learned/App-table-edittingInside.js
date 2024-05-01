import './App.css';
import { Table, Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState, useEffect } from 'react';

function App() {
    const [dataSource, setDataSource] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        const data = [];
        for (let i = 0; i < 7; i++) {
            data.push({
                key: `${i}`,
                name: `Name ${i}`,
                address: `Address ${i}`,
            });
        }
        setDataSource(data);
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your name',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your address',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: 'Actions',
            render: (_, record) => {
                return (
                    <>
                        <Button
                            type="link"
                            onClick={() => {
                                setEditingRow(record.key);
                                form.setFieldsValue({
                                    name: record.name,
                                    address: record.address,
                                });
                            }}
                        >
                            Edit
                        </Button>
                        <Button type="link" htmlType="submit">
                            Save
                        </Button>
                    </>
                );
            },
        },
    ];

    const onFinish = (values) => {
        const updateDataSources = [...dataSource];
        updateDataSources.splice(editingRow, 1, { ...values, key: editingRow });
        setDataSource(updateDataSources);
        setEditingRow(null);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Form form={form} onFinish={onFinish}>
                    <Table dataSource={dataSource} columns={columns}></Table>
                </Form>
            </header>
        </div>
    );
}
export default App;
