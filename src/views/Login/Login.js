import './Login.scss'
import { Form, Button, Input } from 'antd'
import { $login } from '../../api/adminAPI.js'
export default function Login() {
    let [form] = Form.useForm()
    const onFinish = (values) => {
        $login(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return <div className='login'>
        <div className='content'>
            <h2>酒店管理系统</h2>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 18,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"

            >

                <Form.Item
                    label="账号"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" className='btnprimary'>
                        登录
                    </Button>
                    <Button onClick={() => { form.resetFields() }}>
                        取消
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}