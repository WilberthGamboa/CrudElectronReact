import { Button } from "antd"
import Title from "antd/es/typography/Title"

export const TitleForm = ({onSetViewTrue,onSetViewFalse}) => {
  return (
   <>
  <div>
  <Title direction="vertical" align="center">Simple crud</Title>
    <nav>
    <Button onClick={onSetViewFalse} >Añadir Usuario</Button>
    <Button onClick={onSetViewTrue}>Mostrar usuarios</Button>
    </nav>
  </div>

   </>
  )
}
