import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
import { LogedIn } from "./Header/LogedIn";
import { Head } from "./Open/main";

function App() {
  return (
      <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/logedin' element={<LogedIn/>}/>
        <Route path='/main' element={<Head/>}/>
        <Route path='*' element={<span>Page Not Found</span>}/>
      </Routes>
      </>
  );
}

export default App;
