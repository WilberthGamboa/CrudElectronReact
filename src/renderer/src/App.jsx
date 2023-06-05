
import './style.css';
import { TitleForm } from "./components/TitleForm";
import { useVisibility } from "./components/hooks/useVisibility";
import { AddUser } from './components/addUser/AddUser';
import { UserView } from './components/userView/UserView';

function App() {  
const {onUserView,onAddUserView,visibilidad} = useVisibility(); 

const renderizarComponente = () => {
  if (visibilidad) {
      return <UserView/>
  } else {
      return <AddUser />
  }
}

  return (  
    <>
    {/* EL el header de nuestra aplicación*/}
    <TitleForm onUserView={onUserView} onAddUserView={onAddUserView}/>
    {
     renderizarComponente()
    }
  </>
  )
}

export default App
