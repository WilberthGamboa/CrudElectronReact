import { Button, Col, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";

/*
import Title from "antd/es/typography/Title";
import { InputComponent } from "./components/InputComponent";
import { FormMercanciaVendida } from "./components/FormMercanciaVendida";
*/

function App() {

  const [values, setvalues] = useState({
    producto1: 'soy el pruducto 1',
    producto2:'soy el pruducto 2',
    producto3: 'soy el pruducto 3'
  })

  const {producto1, producto2, producto3} = values;
  const onChange = ({target}) => {
    const {name,value} = target;
    setvalues({
      ...values,
      [name]:value
    })
    console.log(value)
  
  };
  const onSave = () =>{
    
    console.log(values)

  }
  return (
    <>
    <Title direction="vertical" align="center">Simple crud</Title>
    <Row justify="center" align="middle" style={{ height: '70vh' }}>
      <Col span={12}>
        <Input showCount maxLength={20} onChange={onChange} name="producto1" value={producto1} />
        <br />
        <br />
        <Input showCount maxLength={20} onChange={onChange} name="producto2" value={producto2} />
        <br />
        <br />
        <Input showCount maxLength={20} onChange={onChange} name="producto3"  value={producto3}/>
        <br />
        <br />
      </Col>
    </Row>
    <div direction="vertical" align="center">
    <Button  onClick={onSave} type="primary">Primary Button</Button>
    </div>


  </>

  )
}

export default App
