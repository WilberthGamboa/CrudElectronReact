import { useState } from "react";
import { AddUser } from "./components/addUser/AddUser";
import { TitleForm } from "./components/addUser/components/TitleForm";
import { UserView } from "./components/userView/UserView";

import './style.css';
import Layout, { Header } from "antd/es/layout/layout";

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
  
  <header className="headerAnt">
    <TitleForm onSetViewFalse={onSetViewFalse} onSetViewTrue={onSetViewTrue} />
    </header>

 
   
    {
     renderizarComponente()

    }
  </>
  )
}

export default App
