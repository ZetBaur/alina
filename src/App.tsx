import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './screens/Home';
import Contacts from './screens/Contacts';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path='contacts' element={<Contacts />} />

            {/* <Route path='courses/:courseSlug' element={<SingleCourse />} /> */}
            {/* <Route path='*' element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
