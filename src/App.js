import React from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import MajorChooser from './components/MajorChooser';
import About from './pages/About';
import Updates from './pages/Updates';
import Addquestion from './pages/Addquestion';
const App = () => {
  
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<MajorChooser />} />
            <Route path='/about' element={<About />} />
            <Route path='/updates' element={<Updates />} />
            <Route path='/Addquestion' element={<Addquestion />} />
          </Routes>
      </Router>
      
      {/* <MajorChooser /> */}
    </div>
 
  );
};

export default App;

