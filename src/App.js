import SignUpform from './SignUp/SignUpform';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import DashBoard from './Dashboard/DashBoard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SignUpform/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
