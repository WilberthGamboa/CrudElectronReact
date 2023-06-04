import { Button, Form, Input, Row } from "antd"
import { useState } from "react"
import './style.css'

export const FormMercanciaVendida = () => {
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
        await window.electronFront.guardarInformacion(inputValues)
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
                <Button type="primary" htmlType="submit" onClick={onClick}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
