import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import App from './App.jsx'
import PocketMonDetail from './components/PocketMonDetail.jsx';
export default function Router () {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
              <Route path="/dex" element={<App />}/>
              <Route path="/detail" element={<PocketMonDetail/>}/>
          </Routes>
      </BrowserRouter>
    );
  };