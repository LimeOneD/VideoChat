import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/home';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Homepage />} /> 
          {/* <Route path="" > </Route> */}
      </Routes>
    </div>
  );
}

export default App;
