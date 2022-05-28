//pages
import { Home } from './home/Home';
//components
import { TopBar } from './components/topBar/TopBar'
import { SideBar } from './components/sideBar/SideBar';

import './App.css';

function App() {
  return (
    <div className="App">
        <TopBar />
        <div className='container'>
          <SideBar />
          <Home />
        </div>
    </div>
  );
}

export default App;
