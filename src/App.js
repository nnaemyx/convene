
import './App.css';
import Login from "./components/Pages/Login";
import SignUp from './components/Pages/SignUp';
import Reset from './components/Pages/Reset';
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import ErrorPage from './components/Pages/ErrorPage';
import NavBar from './components/NavBar';
import Admin from './components/Pages/Admin';
import User from './components/Pages/UserProfile';
import Home from './components/Pages/Home';
import Feed from './components/Feed';
import NewPassword from './components/Pages/NewPassword';
import OTP from './components/Pages/OTP';
import UserProfile from './components/Pages/UserProfile';




const router = createBrowserRouter([
 {
  path:'/',
  element: <Login/>,
  errorElement: <ErrorPage/>
 },
 {
  path:'/signup',
  element:<SignUp/>,
  
 },
 {
  path:'/reset',
  element:<Reset/>,
 },
 {
 path:'/navbar',
 element: <NavBar/>
 },
 {
  path:'/admin',
  element: <Admin/>
 },
 {
  path:'/user',
  element: <User/>
 },
 {
  path: '/home',
  element: <Home/>
 },
 {
  path: '/feed',
  element: <Feed/>
 },
 {
  path: '/otp',
  element: <OTP/>
 },
 {
  path: '/newpassword',
  element: <NewPassword/>
 },
 {
  path: '/userprofile',
  element: <UserProfile/>
 }

]);

function App() {
  return (
  <div className='App'>
  <RouterProvider router={router}/>
  </div> 
)  
}

export default App;
