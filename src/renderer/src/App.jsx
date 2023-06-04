import { useState } from "react";
import { AddUser } from "./components/addUser/AddUser";
import { UserView } from "./components/userView/UserView";
import './style.css';
import { TitleForm } from "./components/TitleForm";

function App() {  

  const [visibilidad, setvisibilidad] = useState(false);

  const onSetViewTrue = () =>{
    setvisibilidad(true)
  }

  const onSetViewFalse = () =>{
    setvisibilidad(false)
  }

  const renderizarComponente = () =>{
    if(visibilidad){
     return  <UserView/> 
    }else{
     return  <AddUser/>
    }
  }
  return (  
    <>
    <TitleForm onSetViewFalse={onSetViewFalse} onSetViewTrue={onSetViewTrue} />
    {
     renderizarComponente()
    }
  </>
  )
}

export default App
