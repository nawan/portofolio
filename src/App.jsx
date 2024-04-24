import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Clients from './components/Clients';
import About from './components/About';
import Blog from './components/Blog';
import BackToTop from './components/BackToTop';


const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Portfolio />
            <Clients />
            <Blog />
            <Footer />
            <BackToTop />
        </div>
    );
};

export default App;