import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Navbar,Footer} from './components'
import GlobalStyle from './globalStyles'
import Home from './pages/HomePage/Home'
import Projects from './pages/Projects/ProjectsPage'
import About from './pages/AboutPage/About'
import Contact from './pages/Contactpage/Contact'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about-me"  component={About}/>
        <Route path="/projects"  component={Projects}/>
        <Route path="/contact"  component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
