
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { FirstComponenet as FC,  SecondComponenet as SC } from './MyComponent';
import MyComponenet from './MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
import ConditionalRendering from './components/ConditionalRendering';
function App() {

  // const student = {
  //    firstName: "Shazan",
  //    lastName: "Rizvi",
  //    email: "shazan@gmail.com"
  // }

  const skills = ['HTML ', 'CSS  ', 'JAVASCRIPT']

  return (
    <div className="App">

     {/* <Welcome name = "Syed" />
     <Welcome name = "Rizvi"/> */}
     {/* <Greeting  name = "Sabur"/>
     <Greeting  name = "Rizvi"/>
     <FC />
     <SC />
     <MyComponenet /> */}
     {/* <HelloWorld /> */}

     {/* <Student 
        data = {skills}
     /> */}

     {/* <Student 
        firstName = "Shazan"
        lastName = "Rizvi"
        email = "shazan@gmail.com"
     />       */}

     {/* <Employee /> */}

     {/* <User /> */}

     {/* <EventHandling /> */}

     <ConditionalRendering />
    </div>
  );
}

export default App;

