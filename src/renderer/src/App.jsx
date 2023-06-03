import { AddUser } from "./components/addUser/AddUser";

/*
import Title from "antd/es/typography/Title";
import { InputComponent } from "./components/InputComponent";
import { FormMercanciaVendida } from "./components/FormMercanciaVendida";
*/

function App() {
  /*

  const [values, setvalues] = useState({
    nombre: '',
    apellido:'',
    urlFoto: ''
  })

  const {nombre, apellido, urlFoto} = values;
  const onChange = ({target}) => {
    const {name,value} = target;
    setvalues({
      ...values,
      [name]:value
    })
   
  };
  const onSave = async (values) =>{
    console.log(values);
    await window.electronFront.guardarInformacion(values)
  }
  */
  return (

    <>
    <AddUser/>
    
    
    </>

    /*
    <>
    <Title direction="vertical" align="center">Simple crud</Title>
    <Row justify="center" align="middle" style={{ height: '70vh' }}>
      <Col span={12}>
        <Input showCount maxLength={20} onChange={onChange} name="nombre" value={nombre} />
        <br />
        <br />
        <Input showCount maxLength={20} onChange={onChange} name="apellido" value={apellido} />
        <br />
        <br />
        <Input showCount maxLength={20} onChange={onChange} name="urlFoto"  value={urlFoto}/>
        <br />
        <br />
      </Col>
    </Row>
    <div direction="vertical" align="center">
    <Button  onClick={()=>onSave(values)} type="primary">Primary Button</Button>
    </div>


  </>
*/
  )
}

export default App
