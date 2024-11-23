'use client'
import React from "react";
import "../styles/style.css";;
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Pages/Main";
import Media from "./components/Pages/Media";
import Achievements from "./components/Pages/Achievements";
import Projects from "./components/Pages/Projects";
import Involvements from "./components/Pages/Involvements";
import Article from "./components/Pages/Article";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/media" element={<Media />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/involvements" element={<Involvements />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default App;
