import { Button } from "antd";
import { useEffect, useState } from "react";

export const UserView = () => {

  const [index, setindex] = useState(1)

  const [usuarioData, setusuarioData] = useState({
    nombre:'',
    apellido:'',
    urlFoto:''
  })

  const getDataUser = () =>{
    setusuarioData({
      nombre:'nombre',
      apellido:'apellido',
      urlFoto:'urlFoto'
    })
  }
  const infoasync = async(value=1) =>{
   const {dataValues} =  await window.electronFront.obtenerInformacion(value);
    console.log(dataValues);
   setusuarioData({
   nombre:dataValues.nombre,
   apellido:dataValues.apellido,
   urlFoto:dataValues.urlFoto

   })
  
  }
  useEffect(() => {
    getDataUser();
    infoasync();
   
  }, [])

  
  const siguiente = () => {
    setindex(index+1);
    infoasync(index);
  }

  const anterior = () => {
    if(index==1) return;
    setindex(index-1);
    infoasync(index);
  }

  
const {nombre,apellido,urlFoto} = usuarioData;

  return (
    <>
 
    <h1>{nombre}</h1>
    <h1>{apellido}</h1>
    <img src={urlFoto} alt="No disponible" />
    <h1>index value: {index} </h1>
    <Button onClick={siguiente} >Siguiente</Button>
    <Button onClick={anterior}>Anterior</Button>
    </>
    
  )
}
