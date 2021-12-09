import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import NavBar from './NavBar';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='AboutPage' element={<AboutPage />} />
              <Route path='ArticlePage/:name' element={<ArticlePage />} />
              <Route path='Articles-list' element={<ArticlesList />} />
            </Routes>
          </div>
        </div>
      </Router>
      
    
  );
}

export default App;
