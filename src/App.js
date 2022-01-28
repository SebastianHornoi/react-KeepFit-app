import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';

//import pages
import Home from './pages/Home'
import Search from './pages/Search'
import Create from './pages/Create'
import Single from './pages/Single'

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App relative h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/single/:id" element={<Single />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
