import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GitHubUser from "./GitHubUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
  );
};

export default App;
