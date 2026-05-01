import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Archive } from './pages/Archive'; 

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
