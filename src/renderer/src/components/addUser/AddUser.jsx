import { FormMercanciaVendida } from './components/FormMercanciaVendida'
import { Col, Row } from 'antd'
export const AddUser = () => {
  return (
    <main>
      <Row justify={'center'}>
        <Col span={20}>
          <FormMercanciaVendida />
        </Col>
      </Row>
      
    </main>
  )
}
