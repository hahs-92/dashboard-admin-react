import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

//pages
import { Home } from '../pages/home/Home';
import { UserList } from '../pages/userList/UserList';
import { User } from '../pages/user/User';
import { NewUser } from '../pages/newUser/NewUser';
import { ProductList } from '../pages/productList/ProductList';
//components
import { TopBar } from '../components/topBar/TopBar'
import { SideBar } from '../components/sideBar/SideBar';


import '../App.css';

function App() {
  return (
    <BrowserRouter >
        <TopBar />
        <div className='container'>
          <SideBar />
          <Routes >
              <Route path='/' element={ <Home />} />
              <Route path='/users' element={ <UserList /> } />
              <Route path='/user/:userId' element={ <User /> } />
              <Route path='/newUser' element={ <NewUser /> } />
              <Route path='/products' element={ <ProductList /> } />
              <Route path='/product/:productId' element={ <h1>id</h1> } />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
