import Home from './Home';
import Resume from'./Resume';
import Certificate from './Certificate';
import Project from './Project';
import P404 from './404';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/project' element={<Project />} />
          <Route path='/*' element={<P404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
