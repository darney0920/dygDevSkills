
import './assets/css/App.css';
//import components
import Navbar from './components/Navbar';
import Main_image from './components/Main_image';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact_me from './components/contact_me';


function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Navbar />
      </div>

        <section className="section1">
       <Main_image />
        </section>
        
    
        
      
      <section className="section2">
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Contact_me />
      </section>
  
     
     
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
    
    </div>
  );
}

export default App;
