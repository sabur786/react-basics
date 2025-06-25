
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { FirstComponenet as FC,  SecondComponenet as SC } from './MyComponent';
import MyComponenet from './MyComponent';
import HelloWorld from './components/HelloWorld';
function App() {
  return (
    <div className="App">
     {/* <Welcome name = "Syed" />
     <Welcome name = "Rizvi"/> */}
     {/* <Greeting  name = "Sabur"/>
     <Greeting  name = "Rizvi"/>
     <FC />
     <SC />
     <MyComponenet /> */}

     <HelloWorld />
    </div>
  );
}

export default App;

