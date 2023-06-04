import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Image } from 'antd';
import './style.css'
import Title from "antd/es/typography/Title";

export const UserView = () => {

  const [index, setindex] = useState(1)

  const [usuarioData, setusuarioData] = useState({
    nombre: '',
    apellido: '',
    urlFoto: ''
  })

  const { nombre, apellido, urlFoto } = usuarioData;
  const getDataUser = () => {
    setusuarioData({
      nombre: 'nombre',
      apellido: 'apellido',
      urlFoto: 'urlFoto'
    })
  }
  const infoasync = async (value = 1) => {
    const data = await window.electronFront.obtenerInformacion(value);
    console.log(data)
    if (data === null) return false;

    const {dataValues} = data;
    console.log(dataValues.nombre);
    setusuarioData({
      nombre: dataValues.nombre,
      apellido: dataValues.apellido,
      urlFoto: dataValues.urlFoto

    })
    return true;
  }
  useEffect(() => {
    getDataUser();
    infoasync();

  }, [])


  const siguiente = async () => {
    const x = await infoasync(index + 1);
    if (x) {
      setindex(index + 1)
    }


  }

  const anterior = () => {
    if (index == 1) return;
    setindex(index - 1);
    infoasync(index);
  }



  return (
    <>
    <h1></h1>
     
    <Row>
       <Col>
      <Title>{nombre} </Title>
        </Col>
    </Row>
    <Row>
       <Col>
      <Title>{apellido} </Title>
        </Col>
    </Row>
    <Row>
       <Col>
      <Image width={200} src={urlFoto}>
    
      </Image>
        </Col>
    </Row>

<Row>
<Col>

</Col>

</Row>
    </>

  )
}
