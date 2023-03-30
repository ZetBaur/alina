import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AgreedRequests from './screens/AgreedRequests';
import Dashboard from './screens/Dashboard';
import DeclinedRequests from './screens/DeclinedRequests';
import NewRequest from './screens/NewRequest';
import Requests from './screens/Requests';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Dashboard />} />

            <Route path='requests' element={<Requests />} />

            <Route path='agreedrequests' element={<AgreedRequests />} />

            <Route path='declinedrequests' element={<DeclinedRequests />} />

            <Route path='newrequest' element={<NewRequest />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
