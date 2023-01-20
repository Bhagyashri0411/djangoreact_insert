import './App.css';
import { Department } from './Components/Department';
import { Employee } from './Components/Employee';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="container">
      <h3 className='m-3 d-flex justify-content-center'>
       <div className='row'>
        <Home/>
        <Department/>
        <Employee/>
       </div>
      </h3>
    </div>
  );
}

export default App;
