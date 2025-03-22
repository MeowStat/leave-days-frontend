import { useState } from "react";
import './Home.css';
import React from 'react';
import { Space, Table, Tag, Button, Modal, DatePicker, Input, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment'; // Import moment for date calculations

const { Column } = Table;

const data = [
    {
        from: '1 Jan 2025',
        to: '3 Jan 2025',     
        days: 3,
        status: ['Pending'],
        reason: 'Can chinh',
        approver: 'Huy',
    },
    {
        from: '1 Jan 2025',
        to: '3 Jan 2025',     
        days: 3,
        status: ['Rejected'],
        reason: 'Can chinh',
        approver: 'Huy',
    },
    {
        from: '1 Jan 2025',
        to: '3 Jan 2025',     
        days: 3,
        status: ['Approved'],
        reason: 'Can chinh',
        approver: 'Huy',
    },
  ];

function Home() {
    const [isModalVisible, setIsModalVisible] = useState(false); // Correctly define the state
    const [form] = Form.useForm();
    const [reasonCount, setReasonCount] = useState(0);

    const showModal = () => {
        setIsModalVisible(true); // Set modal visibility to true
    };

    // const handleOk = () => {
    //     setIsModalVisible(false); // Set modal visibility to false
    // };

    const handleCancel = () => {
        setIsModalVisible(false); // Set modal visibility to false
    };

    const handleReasonChange = (e) => {
        setReasonCount(e.target.value.length);
    };

    const handleDateChange = () => {
        const fromDate = form.getFieldValue('fromDate');
        const toDate = form.getFieldValue('toDate');
        if (fromDate && toDate) {
            const fromMoment = moment(fromDate).startOf('day'); // Normalize to start of day
            const toMoment = moment(toDate).startOf('day'); // Normalize to start of day
            const days = toMoment.diff(fromMoment, 'days') + 1; // Calculate inclusive difference
            form.setFieldsValue({ days: days >= 0 ? days : 0 }); // Ensure non-negative days
        }
    };

    const handleSubmit = (values) => {
        console.log("Leave Request Submitted:", values);
        form.resetFields();
        setIsModalVisible(false); // Close modal after submission
    };

    return (
        <div className="main-container">
            <div className="overview">
                <h2>Overview</h2>
                <table className="overview-table">
                    <thead>
                    <tr>
                        <th colSpan="1">Year </th> 
                        <td colSpan="3">2025</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Total Office Deduction</th>
                        <td>12</td>
                        <th>Remaining Office Deduction</th>
                        <td>12</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="main-table">
                <div className="buttonTable">
                    <Button type="primary" onClick={showModal}>Apply leave</Button>
                </div>

                <Table dataSource={data}>
                    
                    <Column title="From" dataIndex="from" key="from" />
                    <Column title="To" dataIndex="to" key="to" />
                    <Column title="Days" dataIndex="days" key="days" />
                    <Column
                        title="Status"
                        dataIndex="status"
                        key="status"
                        render={(tags) => (
                            <>
                            {tags.map((tag) => {
                                let color;
                                if (tag === 'Approved') {  
                                    color = 'green';
                                }
                                if (tag === 'Rejected') {
                                    color = 'red'; 
                                }
                                if (tag === 'Pending') {
                                    color = 'gold';
                                }

                                return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                                );
                            })}
                            </>
                        )}
                        />
                    <Column title="Reason" dataIndex="reason" key="reason" />
                    <Column title="Approver" dataIndex="approver" key="approver" />

                    
                    <Column
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
            <Modal
                title="Apply Leave"
                visible={isModalVisible} // Use the state to control visibility
                onCancel={handleCancel}
                footer={null}
                width={600}
                className="custom-modal" // Ensure this class is applied
            >
                <Form layout="vertical" form={form} onFinish={handleSubmit}>
                    {/* Date Selection */}
                    <div className="flex-gap-4">
                        <Form.Item
                            name="fromDate"
                            label="From"
                            rules={[{ required: true, message: "Please select start date" }]}
                        >
                            <DatePicker format="DD-MM-YYYY" className="w-full" onChange={handleDateChange} />
                        </Form.Item>

                        <Form.Item
                            name="toDate"
                            label="To"
                            rules={[{ required: true, message: "Please select end date" }]}
                        >
                            <DatePicker format="DD-MM-YYYY" className="w-full" onChange={handleDateChange} />
                        </Form.Item>

                        <Form.Item
                            name="days"
                            label="No of Days"
                            rules={[{ required: true, message: "Enter number of days" }]}
                        >
                            <Input type="number" className="w-full" disabled />
                        </Form.Item>
                    </div>

                    {/* Reason Textarea */}
                    <Form.Item name="reason" label="Reason:" rules={[{ required: true, message: "Enter your reason" }]}>
                    <Input.TextArea
                        placeholder="ex: I am travelling to..."
                        maxLength={200}
                        onChange={handleReasonChange}
                        rows={4}
                    />
                    </Form.Item>

                    {/* Character Count */}
                    <div className="text-right text-gray-500">{reasonCount}/200</div>

                    {/* Upload Image */}
                    <Form.Item name="image" label="Upload an image">
                    <Upload>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    </Form.Item>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4">
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button type="primary" htmlType="submit">
                        Apply
                    </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
}

export default Home;
