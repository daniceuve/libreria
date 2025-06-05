import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import BookFile from './pages/BookFile';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/bookFile" element={<BookFile />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}



export default App;
