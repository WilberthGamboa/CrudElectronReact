import { AddUserForm } from './components/AddUserForm'
import { Col, Row } from 'antd'
export const AddUser = () => {
  return (
    <main>
      <Row justify={'center'}>
        <Col span={20}>
          <AddUserForm/>
        </Col>
      </Row>
    </main>
  )
}
