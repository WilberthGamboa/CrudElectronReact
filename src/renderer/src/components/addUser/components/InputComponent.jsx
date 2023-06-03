import { Button, Input } from 'antd';


export const InputComponent = ({onInputChange,name,placeholder}) => {
  return (
    <>
    <Input showCount  onChange={(e) => onInputChange(e,name)} placeholder={placeholder} />
    <br />
    <br />  
  </>
  )
}
