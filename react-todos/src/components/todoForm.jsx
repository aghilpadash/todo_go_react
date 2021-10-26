import React from 'react';
import {Form, Row, Col, Button, Input} from 'antd';
import {PlusCircleFilled} from '@ant-design/icons';

const TodoForm = ({onFormSubmit}) => {
    const [form] = Form.useForm();
    const onFinish = () => {
        onFormSubmit({
            title: form.getFieldValue('title'),
            complete: false
        });
        console.log(form.getFieldValue('title'));
        form.resetFields();
    }
    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="horizontal"
            className="todo-form">

            <Row gutters={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={24}>
                    <Form.Item
                        name={'title'}
                        rules={[{required: true, message: 'پر کردن این فیلد الزامیست !'}]}>
                        <Input placeholder="چه کاری میخوای انجام بدی ؟"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type="primary" htmlType="submit" block>
                        <PlusCircleFilled/>

                    </Button>
                </Col>

            </Row>
        </Form>
    )
}

export default TodoForm;
