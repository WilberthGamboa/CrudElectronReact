
import './style.css';
import { TitleForm } from "./components/TitleForm";
import { useVisibility } from "./components/hooks/useVisibility";
import { AddUser } from './components/addUser/AddUser';
import { UserView } from './components/userView/UserView';

function App() {  
const {onSetViewFalse,onSetViewTrue,visibilidad} = useVisibility(); 

const renderizarComponente = () => {
  if (visibilidad) {
      return <UserView/>
  } else {
      return <AddUser />
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
