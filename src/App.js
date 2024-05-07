import logo from './logo.svg';
import './App.css';
import Login from './views/Login/Login';
import Layout from './views/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
