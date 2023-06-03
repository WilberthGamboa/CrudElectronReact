import { Button, Input } from 'antd';
const onChange = (e) => {
  console.log('Change:', e.target.value);
};

export const InputComponent = () => {
  return (
    <>
    <Input showCount maxLength={20} onChange={onChange} />
    <br />
    <br />  
  </>
  )
}
