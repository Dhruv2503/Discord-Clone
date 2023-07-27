import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './AuthPages/LoginPage/LoginPage'
import RegisterPage from './AuthPages/RegisterPage/RegisterPage';
import Dashboard from './DashBoard/Dashboard';
import Home from './DashBoard/Home';
import AlertNotification from './Components/AlertNotification';
import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    <AlertNotification/>
    </>
  );
}

export default App;
