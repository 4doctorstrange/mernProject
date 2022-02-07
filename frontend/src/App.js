import './App.css';
import { Register } from './components/Register';
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EditPost } from './components/EditPost';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/edit" element = {<EditPost />} />
          {/* <Route path="/delete" element ={<DeletePost />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />}/>
        </ Routes>
      </ BrowserRouter>
    </>
  );
}

export default App;
