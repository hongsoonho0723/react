
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Container} from 'react-bootstrap';
import Home from './pages/board/Home';
import Detail from './pages/board/Detail';
import SaveForm from './pages/board/SaveForm';
import UpdateForm from './pages/board/UpdateForm';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';
import Header from './components/Header';



function App() {
  return (
    <div>
      <Container>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/saveForm' element={<SaveForm/>} />
          <Route path='/board/:id' element={<Detail/>} />
          <Route path='/updateForm/:id' element={<UpdateForm/>} />
          <Route path='/joinForm' element={<JoinForm/>} />
          <Route path='/loginForm' element={<LoginForm/>} />


        </Routes>

      </Container>

    </div>

    
    
  );
}

export default App;
 