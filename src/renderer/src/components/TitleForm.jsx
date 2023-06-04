import { Button, Col, Row } from "antd"
import Title from "antd/es/typography/Title"
import {  Modal } from 'antd';

const config = {
  title: 'Use Hook!',
  content: 'xd'
};
export const TitleForm = ({ onSetViewTrue, onSetViewFalse }) => {

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
              <Button onClick={onSetViewFalse}  onDoubleClick={()=>{
                modal.error(config)
              }} >Añadir Usuario</Button>

              {contextHolder}
            </Col>
            <Col>
              <Button onClick={onSetViewTrue}>Mostrar usuarios</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  )
}
