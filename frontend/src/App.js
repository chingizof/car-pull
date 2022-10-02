import './App.css';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/layout';
import Hello from './pages/hello';
import { OrderPage } from './pages/orderPage';
import { BrowseTrips } from './pages/browseTrips';
import { SafetyPage } from './pages/safety';
import { Home } from './pages/home';
import { NoPage } from './pages/nopage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/hello" element={<Hello />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/browse" element={<BrowseTrips />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          {/* <Route path="/race" element={() => { 
              window.location.href = 'https://example.com/1234'; 
              return null;
          }}/> */}


        </Route>
      </Routes>
    </BrowserRouter>
      // <div className = "app">
      //   <Layout />

      // </div>


    
  );
}

export default App;
