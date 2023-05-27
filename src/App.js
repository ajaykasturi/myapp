import './App.css';
//importing component from HelloWorld from HelloWorld.jsx
//import HelloWorld from './components/HelloWorld'; //this is for importing only 1 component
//the below one is used for importing multiple components from jsx file
import { HelloWorld,ByWorld } from './components/HelloWorld';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <HelloWorld text="Hello World How are you aliens?" />
      <ByWorld text="Good Bye" />
    </div>
  );
  //here we use <HelloWorld /> or <HelloWorld></HelloWorld> to execute the component
  
}
export default App;
