import { Button } from 'antd';
export const ButtonForm = ({onClick}) => {
  
  return (
   <>
    <div direction="vertical" align="center">
    <Button onClick={onClick} type="primary">Agregar usuario</Button>
    </div>
   </>
  )
}
