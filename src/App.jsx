import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Ciber2 } from './components/Ciber2';
import { Ciber3 } from './components/Ciber3';
import { Ciber4 } from './components/Ciber4';
import { Ciber5 } from './components/Ciber5';

import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/ciber2' element={<Ciber2 className='main-img-container'/>} />
            <Route path='/ciber3' element={<Ciber3 className='main-img-container'/>} />
            <Route path='/ciber4' element={<Ciber4 className='main-img-container'/>} />
            <Route path='/ciber5' element={<Ciber5 className='main-img-container'/>} />
            
            
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;