import { Table, Button, Modal, Input } from 'antd';
import React, { useEffect, useState } from 'react';

const MyTableFour = ({ objects }) => {
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 5
        },
    })

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState('')
    const [allData, setAllData] = useState()

    const showModal = () => {
        setIsModalOpen(true);

    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const setDataObjectToArray = (data, num) => {
        if (!data?.start_date) {
            return {
                key: num,
                number: num,
                name: data?.content_name,
                start_date: "-",
                end_date: "-",
            }
        }
        else {
            return {
                key: num,
                number: num,
                name: data?.content_name,
                start_date: data?.start_date,
                end_date: data?.end_date,
            }
        }

    }

    const getInputField = (e) => {
        console.log(e);
    }

    const getData = () => {
        const dataArray = [];
        const datas = objects;
        // datas.map((item) => {
        //     const dataObject = setDataObjectToArray(item);
        //     dataArray.push(dataObject);
        // })
        for (const [num, item] of datas.entries()) {

            const dataObject = setDataObjectToArray(item, num);
            dataArray.push(dataObject);
        }
        console.log(dataArray)
        return (dataArray)
    }

    const onClickBtn = (record) => {
        setModalName(record)
        showModal()
        console.log(record);
    }



    const onChange = (pagination, filters, sorter) => {
        setTableParams({ pagination, filters, sorter })
        console.log('params', pagination, filters, sorter);
    };
    const columns = [
        {
            title: 'No.',
            key: 'content_id',
            dataIndex: 'content_id',
        },
        {
            title: 'Content Name',
            key: 'content_name',
            dataIndex: 'content_name',
        },
        {
            title: 'Start Date',
            key: 'start_date',
            dataIndex: 'start_date',
        },
        {
            title: 'End Date',
            key: 'end_date',
            dataIndex: 'end_date',
        },
        {
            key: 'action',
            title: 'Action',
            dataIndex: 'action',
            render: ((_, { content_name }) => {
                return (
                    <>
                        <Button onClick={() => onClickBtn(content_name)}>test</Button>
                        
                    </>
                )
            })
        }
    ];

    return (
        <>
        <Input onChange={getInputField}/>

            <Table
                columns={columns}
                dataSource={objects}
                pagination={tableParams.pagination}
                onChange={onChange}
            /><Modal title="Action" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <p>{modalName}</p>
                        </Modal>
        </>


    )
}
export default MyTableFour;