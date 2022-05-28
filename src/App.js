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
          <div className='otherpages'>
            other pages
          </div>
        </div>
    </div>
  );
}

export default App;
