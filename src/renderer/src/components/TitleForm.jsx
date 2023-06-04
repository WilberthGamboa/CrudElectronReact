import { Button, Col, Row } from "antd"
import Title from "antd/es/typography/Title"

export const TitleForm = ({ onSetViewTrue, onSetViewFalse }) => {
  return (
    <header>
      <Row align="middle">
        <Col span={11} justify="center">
          <Title align="center">USERS CRUD</Title>
        </Col>
        <Col span={11}   >
          <Row gutter={16} justify="end">
            <Col>
              <Button onClick={onSetViewFalse}>Añadir Usuario</Button>
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
