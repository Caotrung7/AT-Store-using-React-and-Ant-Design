import './App.css';
import { Table } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import Title from 'antd/es/skeleton/Title';
//`https://jsonplaceholder.typicode.com/photos?page=${page}&size=10`

function App() {
    const [dataSource, setDataSource] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchRecords(1);
    }, []);

    const columns = [
        {
            title: 'AlbumID',
            dataIndex: 'albumId',
        },
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
    ];

    const fetchRecords = (page) => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/photos?page=${page}&size=10`).then((res) => {
            //console.log(response);
            setDataSource(res.data);
            setTotalPages(res.data.totalPages);
            setLoading(false);
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Table
                dataSource={dataSource}
                columns={columns}
                loading={loading}
                pagination={{
                    pageSize: 100,
                    total: totalPages,
                    onChange: (page) => {
                        fetchRecords(page);
                    },
                }}
            ></Table>
        </div>
    );
}
export default App;
