import { useState } from "react";
import { AddUser } from "./components/addUser/AddUser";
import { TitleForm } from "./components/addUser/components/TitleForm";
import { UserView } from "./components/userView/UserView";
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
