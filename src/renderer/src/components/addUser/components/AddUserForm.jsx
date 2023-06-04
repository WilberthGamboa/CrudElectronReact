import { Button, Form, Input, Row } from "antd"
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useState } from "react"
import './style.css'

export const AddUserForm = () => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
      api.open({
        message: 'Datos guardados',
        description:
          'Los datos han sido guardado correctamente',
        icon: (
          <SmileOutlined
            style={{
              color: '#108ee9',
            }}
          />
        ),
      });
    };
    const [inputValues, setinputValues] = useState({
        nombre: '',
        apellido: '',
        urlFoto: '',
    })
    const onInputChange = ({ target }, name) => {
        setinputValues({
            ...inputValues,
            [name]: target.value
        })
    }

    const onClick = async () => {
        if(inputValues.nombre===''|| inputValues.apellido===''||inputValues.urlFoto==='')return
        await window.electronFront.guardarInformacion(inputValues);
        openNotification();
    }
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 8,
        },
    };
    return (

        <Form className="" justify="center" align="middle" {...layout}>
            <Form.Item
                name={'nombre'}
                label="nombre"
                rules={[
                    {
                      required: true
                    }
                ]}
            >
                <Input onChange={(e) => onInputChange(e, "nombre")} />
            </Form.Item>
            <Form.Item
                name={'apellido'}
                label="Apellido"
                rules={[
                    {
                        required: true
                    }
                ]}

            >
                <Input onChange={(e) => onInputChange(e, "apellido")} />
            </Form.Item>

            <Form.Item
                name={'urlFoto'}
                label="Url foto"
                rules={[
                    {
                        required: true
                    }
                ]}

            >
                <Input onChange={(e) => onInputChange(e, "urlFoto")} />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
            {contextHolder}

                <Button type="primary" htmlType="submit" onClick={onClick}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
