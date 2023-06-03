import { Col, Row } from "antd"
import { InputComponent } from "./InputComponent"
import { ButtonForm } from "./ButtonForm"
import { useState } from "react"



export const FormMercanciaVendida = () => {
    const [inputValues, setinputValues] = useState({
        nombre:'',
        apellido:'',
        urlFoto:'',
    })
    const onInputChange = ({target},name) => {
        setinputValues({
            ...inputValues,
            [name]:target.value
        })
    }

    const onClick = async () =>{
       await  window.electronFront.guardarInformacion(inputValues)
    }

    return (
        <>
        <Row justify="center" align="middle" style={{ height: '70vh' }}>
                <Col span={12}>
                    <InputComponent onInputChange={onInputChange} name={'nombre'} placeholder={'nombre'}/>
                    <InputComponent onInputChange={onInputChange} name={'apellido'} placeholder={'apellido'}  />
                    <InputComponent onInputChange={onInputChange} name={'urlFoto'} placeholder={'urlFoto'}/>
                </Col>
        </Row>
            <ButtonForm onClick={onClick}  />
        </>
    )
}
