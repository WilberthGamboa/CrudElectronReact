import { Button } from 'antd';
export const ButtonForm = () => {

    const llamarElectron = ()  => {
        window.electronFront.guardarInformacion();
    }

  return (
   <>
    <div direction="vertical" align="center">
    <Button onClick={llamarElectron} type="primary">Primary Button</Button>
    </div>
   </>
  )
}
