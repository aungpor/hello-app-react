import { Table, Button, Modal, Tag } from 'antd';
import React, { useState } from 'react';

const MyTableFour = ({ objects }) => {
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 5
        },
    })

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState()

    const showModal = (name) => {
        setModalName(name)
        setIsModalOpen(true);

    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const setDataObjectToArray = (data, num) => {
        const tagArray = []
        data.tag.map((item) => {
            console.log(item.tag_name);
            tagArray.push(item)
        })
        return {
            key: num,
            number: num,
            name: data?.content_name,
            start_date: data?.start_date ? data?.start_date : "-" ,
            end_date: data?.end_date ? data?.end_date : "-" ,
            tag: tagArray
        }
    }

    const getData = () => {
        const dataArray = [];
        const datas = objects;
        for (const [num, item] of datas.entries()) {

            const dataObject = setDataObjectToArray(item, num + 1);
            dataArray.push(dataObject);
        }
        console.log(dataArray)
        return (dataArray)
    }


    const onChange = (pagination) => {
        setTableParams({ pagination})
        console.log('params', pagination);
    };
    const columns = [
        {
            title: 'No.',
            key: 'number',
            dataIndex: 'number',
        },
        {
            title: 'Content Name',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Tags',
            key: 'tag',
            dataIndex: 'tag',
            render: (_, { tag }) => {
                console.log(tag);
                return (
                    <>
                        {tag.map((tag, index) => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            return (
                                <Tag color={color} key={index}>
                                    {tag.tag_name}
                                </Tag>
                            );
                        })}
                    </>
                )
            }
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
            render: ((_, { name }) => {
                return (
                    <>
                        <Button onClick={() => showModal(name)}>Action</Button>

                    </>
                )
            })
        }
    ];
    return (
        <>

            <Table
                columns={columns}
                dataSource={getData()}
                pagination={tableParams.pagination}
                onChange={onChange}
            />

            <Modal title="Action" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{modalName}</p>
            </Modal>
        </>


    )
}
export default MyTableFour;