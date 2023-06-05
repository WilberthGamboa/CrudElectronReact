import { Button, Col, Row } from "antd"
import Title from "antd/es/typography/Title"
import {  Modal } from 'antd';


export const TitleForm = ({ onAddUserView, onUserView }) => {

  const [modal, contextHolder] = Modal.useModal();
  return (
    <header>
      <Row align="middle">
        <Col span={11} justify="center">
          <Title align="center">USERS CRUD</Title>
        </Col>
        <Col span={11}   >
          <Row gutter={16} justify="end">
            <Col>
              <Button  onClick={onAddUserView} >Añadir Usuario</Button>

              
            </Col>
            <Col>
              <Button onClick={() => onUserView(modal)} >Mostrar usuarios</Button>
              {contextHolder}
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  )
}
