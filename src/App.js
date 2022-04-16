import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Input from './components/Input';
import Dropdown from "./components/Dropdown"
import styled from 'styled-components';

const App = () => {
  return (
    <>
    <CompContainer>
      <h1>Toggle.js</h1>
      <Toggle/>
    </CompContainer>
    <CompContainer>
      <h1>Tab.js</h1>
      <Tab/>
    </CompContainer>
    <CompContainer>
      <h1>Input.js</h1>
      <Input/>
    </CompContainer>
    <CompContainer>
      <h1>Dropdown.js</h1>
      <Dropdown />
    </CompContainer>
    </>
  );
}

const CompName = styled.h1`
`

const CompContainer = styled.section`
padding: 10px;
`

export default App;
