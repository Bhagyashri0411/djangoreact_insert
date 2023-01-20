import './App.css';

import {Department} from './Department';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container mt-4">
      <div className="p-2 bg-success text-white">

     <h3 className="m-3 d-flex justify-content-center">
       Django connection with React
     </h3>
      </div>


     <Switch>
       <Route path='/' component={Department}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
