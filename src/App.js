import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalcInternal from './components/CalcInternal';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path ="/"element ={<CalcInternal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
