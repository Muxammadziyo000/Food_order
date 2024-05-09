import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Settings from './pages/Settings/Settings';
import Header from './companents/Header/Header';
import Notfound from './pages/404/Notfound';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>

    </div>
  );
}

export default App;
