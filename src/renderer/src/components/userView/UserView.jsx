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
  const infoasync = async() =>{
    await window.electronFront.obtenerInformacion();
  }
  useEffect(() => {
    getDataUser();
    infoasync();
   
  }, [])

  
  const siguiente = () => {
    setindex(index+1);
  }

  const anterior = () => {
    if(index==1) return;
    setindex(index-1);
  }

  
const {nombre,apellido,urlFoto} = usuarioData;

  return (
    <>
    <h1>{nombre}</h1>
    <h1>{apellido}</h1>
    <img src="https://w0.peakpx.com/wallpaper/956/188/HD-wallpaper-gwen-lol-pc-league-of-legends-gwen.jpg" alt="" />
    <h1>index value: {index} </h1>
    <Button onClick={siguiente} >Siguiente</Button>
    <Button onClick={anterior}>Anterior</Button>
    </>
    
  )
}
