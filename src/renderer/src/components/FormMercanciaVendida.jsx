import { Col, Row } from "antd"
import { InputComponent } from "./InputComponent"
import { ButtonForm } from "./ButtonForm"

export const FormMercanciaVendida = () => {
    return (
        <>
            <Row justify="center" align="middle" style={{ height: '70vh' }}>
                <Col span={12}>
                    <InputComponent />
                    <InputComponent />
                    <InputComponent />
                </Col>
            </Row>
            <ButtonForm />
        </>
    )
}
