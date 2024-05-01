import React from 'react';
import './App.css';
//import { Button, Input, Select, Form, Table, message, Alert  } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
//import { DatePicker, TimePicker } from 'antd';
// import { Button, Spin } from 'antd';
import { useState } from 'react';
//import { Table, Tag } from 'antd';
//import { type } from '@testing-library/user-event/dist/type';
//import Icon, { PieChartOutlined, AppleOutlined, BankTwoTone, LoginOutlined } from '@ant-design/icons';
import { Table, Button, Modal, Input } from 'antd';

function App() {
    // const [loading, setLoading] = useState(false)

    // const onButtonClick = (e) => {
    //   console.log('button clicked');
    //   setLoading(true)
    //   setTimeout(()=> {
    //     setLoading(false)
    //   }, 2000)
    // }

    // const [showAlert, setShowAlert] = useState(false);

    // const onFinish = (e) => {
    //   console.log(e);
    //   setTimeout(()=> {
    //     setShowAlert(true)
    //   }, 2000)
    // }

    // const FCs = ["Real-Madrid", "MU", "PSG", "Arsenal", "Man-City"]

    // const data = [
    //   {
    //     name:'Name 1',
    //     age:10,
    //     address:'Address 1',
    //     key:'1'
    //   },
    //   {
    //     name:'Name 2',
    //     age:20,
    //     address:'Address 2',
    //     key:'2'
    //   },
    //   {
    //     name:'Name 3',
    //     age:30,
    //     address:'Address 3',
    //     key:'3'
    //   }
    // ]

    // const columns = [
    //   {
    //     title:'Name',
    //     dataIndex:'name',
    //     key:'key',
    //     render: name => {
    //       return <a>{name}</a>
    //     }
    //   },
    //   {
    //     title:'Age',
    //     dataIndex:'age',
    //     key:'key',
    //     sorter: (a,b)=> a.age - b.age
    //   },
    //   {
    //     title:'Address',
    //     dataIndex:'address',
    //     key:'key'
    //   },
    //   {
    //     title:'Graduated',
    //     key:'key',
    //     render: payload => {
    //       return <p>{payload.age>20?'done':'not yet'}</p>
    //     }
    //   }
    // ]

    // const [loading, setLoading] = useState(false);

    // const columns = [
    //     {
    //         title: 'ID',
    //         dataIndex: 'id',
    //         key: '1',
    //     },
    //     {
    //         title: 'User ID',
    //         dataIndex: 'userId',
    //         key: '2',
    //         sorter: (record1, record2) => {
    //             return record1.userId > record2.userId;
    //         },
    //     },
    //     {
    //         title: 'Status',
    //         dataIndex: 'completed',
    //         key: '3',
    //         render: (completed) => {
    //             return <p>{completed ? 'Complete' : 'In progress'}</p>;
    //         },
    //         filters: [
    //             {
    //                 text: 'Complete',
    //                 value: true,
    //             },
    //             {
    //                 text: 'In progress',
    //                 value: false,
    //             },
    //         ],
    //         onFilter: (value, record) => {
    //             return record.completed === value;
    //         },
    //     },
    // ];
    // const [dataSource, setDataSource] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [page, setPage] = useState(1);
    // const [pageSize, setPageSize] = useState(10);
    // //const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             //console.log(data);
    //             setDataSource(data);
    //             // setIndex(data.map((item) => item.id));
    //             // console.log(setIndex(data.map((item) => item.id)));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });

    //     // return cleanUp = () => {

    //     // }
    // }, []);

    // const dataSource = [
    //     {
    //         key: '1',
    //         id: 1,
    //         name: 'Student Name 1',
    //         grade: 'A+',
    //     },
    //     {
    //         key: '2',
    //         id: 2,
    //         name: 'Student Name 2',
    //         grade: 'A',
    //     },
    //     {
    //         key: '3',
    //         id: 3,
    //         name: 'Student Name 3',
    //         grade: 'B',
    //     },
    //     {
    //         key: '4',
    //         id: 4,
    //         name: 'Student Name 4',
    //         grade: 'C',
    //     },
    //     {
    //         key: '5',
    //         id: 5,
    //         name: 'Student Name 5',
    //         grade: 'A',
    //     },
    // ];

    // const columns = [
    //     {
    //         title: 'Student ID',
    //         dataIndex: 'id',
    //     },
    //     {
    //         title: 'Student name',
    //         dataIndex: 'name',
    //     },
    //     {
    //         title: 'Student Grade',
    //         dataIndex: 'grade',
    //         render: (tag) => {
    //             const color = tag.includes('A') ? 'Green' : tag.includes('B') ? 'blue' : 'red';
    //             return (
    //                 <Tag color={color} key={tag}>
    //                     {tag}
    //                 </Tag>
    //             );
    //         },
    //     },
    // ];

    // const [alreadyCheckedRows, setAlreadyCheckedRows] = useState(['1', '3']);

    // const HeartIcon = (props) => {
    //     return (
    //         <Icon
    //             component={() => {
    //                 return (
    //                     <svg
    //                         fill="currentColor"
    //                         width="1em"
    //                         height="1em"
    //                         viewBox="0 0 48 48"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                         <path d="M24 37.4a13.4 13.4 0 1 0 0-26.8 13.4 13.4 0 0 0 0 26.8ZM40.5 24a16.5 16.5 0 1 1-33 0 16.5 16.5 0 0 1 33 0Z"></path>
    //                         <path d="M27.13 27.18 19 32.1a.6.6 0 0 1-.9-.63l1.84-9.33a2 2 0 0 1 .92-1.32L29 15.9a.6.6 0 0 1 .9.63l-1.84 9.33a2 2 0 0 1-.93 1.32Zm-5.04-.45 3.11-1.89.7-3.57-3.1 1.89-.7 3.57Z"></path>
    //                     </svg>
    //                 );
    //             }}
    //             {...props}
    //         />
    //     );
    // };

    const [editingStudent, setEditingStudent] = useState(null);

    const [isEditing, setIsEditing] = useState(false);

    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            email: 'john@gmail.com',
            name: 'John',
            address: 'John address',
        },
        {
            id: 2,
            email: 'david@gmail.com',
            name: 'David',
            address: 'David address',
        },
        {
            id: 3,
            email: 'jame@gmail.com',
            name: 'jame',
            address: 'Jame address',
        },
        {
            id: 4,
            email: 'sam@gmail.com',
            name: 'Sam',
            address: 'Sam address',
        },
    ]);

    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name',
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email',
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address',
        },
        {
            key: '5',
            title: 'Action',
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => onEditStudent(record)} />
                        <DeleteOutlined
                            onClick={() => onDeleteStudent(record)}
                            style={{ color: 'red', marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const onAddStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            email: randomNumber + '@gmail.com',
            name: 'Name ' + randomNumber,
            address: 'Address ' + randomNumber,
        };
        setDataSource((pre) => {
            return [...pre, newStudent];
        });
    };

    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: 'Are you sure, you want to delete this student record',
            okText: 'Yes',
            okType: 'danger',
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);
                });
            },
        });
    };

    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Button onClick={onAddStudent}>Add a new student</Button>
                <Table columns={columns} dataSource={dataSource}></Table>
                <Modal
                    title="Edit Student"
                    visible={isEditing}
                    //onText="Save"
                    onCancel={() => {
                        resetEditing();
                    }}
                    onOk={() => {
                        setDataSource((pre) => {
                            return pre.map((student) => {
                                if (student.id === editingStudent.id) {
                                    return editingStudent;
                                } else {
                                    return student;
                                }
                            });
                        });
                        resetEditing();
                    }}
                >
                    <Input
                        placeholder="Name"
                        value={editingStudent?.name}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, name: e.target.value };
                            });
                        }}
                    />
                    <Input
                        placeholder="Email"
                        value={editingStudent?.email}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, email: e.target.value };
                            });
                        }}
                    />
                    <Input
                        placeholder="Address"
                        value={editingStudent?.address}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, address: e.target.value };
                            });
                        }}
                    />
                    {/* ?. mean: "const editingStudent = null" to prevent bug "cannot read property of null" */}
                </Modal>
            </header>

            {/* <PieChartOutlined style={{ color: 'purple', fontSize: 100 }} />
                <AppleOutlined style={{ color: 'red', fontSize: 100 }} />
                <PieChartOutlined rotate={45} style={{ color: 'orange', fontSize: 100 }} />
                <BankTwoTone twoToneColor="teal" style={{ fontSize: 100 }} />

                <Divider />
                <HeartIcon style={{ color: 'blue', fontSize: 200 }} />
                <Divider />
                <Button icon={<LoginOutlined style={{ color: 'red', fontSize: 20 }} />}>Button with custom icon</Button>
                <Divider />
                <p style={{ color: 'black', fontSize: 30 }}>
                    I <HeartIcon style={{ color: 'pink', fontSize: 30 }} /> AntDesign
                </p> */}

            {/* TABLE - SELECT ROW */}
            {/* <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowSelection={{
                        type: 'checkbox',
                        selectedRowKeys: alreadyCheckedRows,
                        onChange: (keys) => {
                            setAlreadyCheckedRows(keys);
                        },
                        onSelect: (record) => {
                            console.log(record);
                        },
                        selections: [
                            Table.SELECTION_ALL,
                            Table.SELECTION_NONE,
                            Table.SELECTION_INVERT,
                            {
                                key: 'excellent',
                                text: 'Select Students Excellent',
                                onSelect: (allKeys) => {
                                    const selectedKeys = allKeys.filter((key) => {
                                        const isExcellent = dataSource.find((student) => {
                                            return student.key === key && student.grade.includes('A');
                                        });
                                        return isExcellent;
                                    });
                                    setAlreadyCheckedRows(selectedKeys);
                                },
                            },
                        ],
                    }}
                ></Table> */}

            {/* <Table
                    loading={loading}
                    dataSource={dataSource}
                    //key={columns.map((item) => item.key)}
                    //key={dataSource.map((item) => item.id)}
                    columns={columns}
                    pagination={{
                        current: page,
                        pageSize: pageSize,
                        onChange: (page, pageSize) => {
                            setPage(page);
                            setPageSize(pageSize);
                        },
                    }}
                ></Table> */}
            {/* <Progress percent={33} type="circle" status="active" strokeColor="red" />
                <Progress percent={25} type="line" status="active" steps={4} />
                <Progress percent={20} type="dashboard" status="success" /> */}

            {/* <Spin spinning={loading}></Spin>
                <Button
                    type="primary"
                    onClick={() => {
                        setLoading((preValue) => !preValue);
                    }}
                >
                    Toggle spinning button
                </Button> */}

            {/* <DatePicker picker="quarter" />
                <DatePicker.RangePicker picker="month" />
                <TimePicker /> */}

            {/* {showAlert &&
        <Alert 
          type='error' 
          message='error' 
          description='There was an error on login'  
          closable
        />
      }
        <Table
          dataSource={data}
          columns={columns}
        >
          
        </Table>

        <Input.Search
          placeholder='name'
          maxLength={15}
          type='password'
          prefix={<UserOutlined />}
          allowClear
        >
        </Input.Search>

        <Button 
        type='primary' 
        block
        //href='https://www.google.com/' 
        loading={loading}
        className='my-button'
        icon={<PoweroffOutlined /> }
        onClick={onButtonClick}
        >
          My first button
        </Button>

        <p>What are your favorite football clubs?</p>
        <Select 
          mode='multiple'
          style={{width: '50%'}}
          placeholder='Select FC'
          maxTagCount={2}
          allowClear
        >
          {FCs.map((fc, index) => {
              return <Select.Option key={index} value={fc}></Select.Option>
          })}
        </Select>

        <Form
          className='my-form'
          onFinish={onFinish}
        >
          <Form.Item label='User Name' name='username' >
            <Input placeholder='User name' required></Input>
          </Form.Item>
          <Form.Item label='Password' name='password' >
            <Input placeholder='Password' type='password' required></Input>
          </Form.Item> 
          <Form.Item>
            <Button block type='primary' htmlType='submit' >Log in</Button>
          </Form.Item>   
        </Form>    */}
        </div>
    );
}

export default App;
