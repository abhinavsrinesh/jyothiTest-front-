 import logo from './logo.svg';
import'./App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Register from './component/register.jsx';
import Login from './component/login.jsx';
import Hom from './component/home.jsx';
function app(){
    return(
        <>
        <Navbar />
        <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Hom />}></Route>
            <Route path="/*" element={<h1>404! Page Not Found</h1>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
 export default app;