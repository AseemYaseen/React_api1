import ListUser from "./Components/ListUser";
import CreateUser from "./Components/CreateUser";
import EditUser from "./Components/EditUser";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./Components/Login";


function App() {

  return (

    <div className="App">
     <h3>React Cruds</h3>
     <BrowserRouter>
     <nav>
      <ul>
        <li>
          <Link to='/'>List Users</Link>
        </li>
        <li>
          <Link to='user/create'>Create User</Link>
        </li>
        <li>
          <Link to='user/login'>Login</Link>
        </li>
      </ul>
     </nav>
     <Routes>
      <Route index element={<ListUser/>} />
      <Route path="user/create" element={<CreateUser/>} />
      <Route path="user/login" element={<Login/>} />
      <Route path="user/:id/edit" element={<EditUser/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
