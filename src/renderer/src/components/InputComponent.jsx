import { Input } from 'antd';
const onChange = (e) => {
  console.log('Change:', e.target.value);
};

export const InputComponent = () => {
  return (
    <>
    <Input showCount maxLength={20} onChange={onChange} />
    <br />
    <br />
    <div direction="vertical" align="center">
    <Button onClick={llamarElectron} type="primary">Primary Button</Button>
    </div>
  </>
  )
}
