import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemberList from './components/MemberList';
import MemberDetails from './components/MemberDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MemberList />} />
        <Route path="/member/:id" element={<MemberDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
