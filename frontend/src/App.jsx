import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import {Home,Login} from './Routes/routes.js';
import {SignupPage, CreateProduct} from './Routes/routes.js';

const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Login" element={<Login />} />
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/create-product' element={<CreateProduct/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
