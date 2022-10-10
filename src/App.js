 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';
import PostDescription from './components/PostDescription';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element={<PostCard />} />
        <Route path = "/:id" element={<PostDescription />} />
      </Routes>   
    </>
  );
}

export default App;
