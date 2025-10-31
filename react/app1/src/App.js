import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Counter from './components/cnt';
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Counter /> //Counter app  */}
      {/* <FunctionClick /> //Functional component click handler */}
      {/* <ClassClick /> // Class Component click handler */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}
  
export default App;
