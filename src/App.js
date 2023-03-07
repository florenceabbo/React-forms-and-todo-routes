import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
// import './App.css';
import { HomePage } from './HomePage';
import App2 from './todotask/todo';
import { FormsDashboard } from './forms/index';
import { MyProfile } from './Profile';

// import { TodoView } from './todotask/todoveiw'; 

function RenderApp() {
  return (
    <div className="todo-and-forms">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route exact path='app2' element={<App2 />} /> 
          <Route path='forms' element={<FormsDashboard />} />
          <Route path='profile' element={<MyProfile />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default RenderApp
