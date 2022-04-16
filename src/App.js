import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Input from './components/Input';
import Dropdown from "./components/Dropdown"

function App() {
  return (
    <>
      <h1>Toggle.js</h1>
      <Toggle/>

      <h1>Tab.js</h1>
      <Tab/>

      <h1>Input.js</h1>
      <Input/>

      <h1>Dropdown.js</h1>
      <Dropdown />
    </>
  );
}

export default App;
