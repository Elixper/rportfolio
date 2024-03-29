import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import photo from "../src/assets/photo.png";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
    <main className=" bg-white px-10">
      <section className='min-h-screen'>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-coolvetica">Welcome to my portfolio</h1>
          <ul className="flex items-center">
            <li><FontAwesomeIcon icon={faMoon} 
            className="cursor-pointer text-2xl"
            onClick={() => setDarkMode(!darkMode)}/></li>
            <li><a className=" bg-gradient-to-r from-menuPurple to-blue-400 text-white px-4 py-2 rounded ml-8" href="#">About</a></li>
            {/* <li><a className=" bg-gradient-to-r from-menuPurple to-blue-400 text-white px-4 py-2 rounded ml-8" href="#">Clients</a></li>
            <li><a className=" bg-gradient-to-r from-menuPurple to-blue-400 text-white px-4 py-2 rounded ml-8" href="#">Contact</a></li> */}
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-menuPurple font-medium">Ludwig PEREIRA</h2>
          <h3 className="text-2xl py-2">Freelance Frontend Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-600">1,5 year creative Frontend Developer, with a gamification design background. 8+ years in business exports helped me develop strong interpersonal skills and collaborate with peer developers with an emphasis on feedback and sharing best practices.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <FontAwesomeIcon icon={faLinkedin}/>
        <FontAwesomeIcon icon={faGithub}/>
        </div>
        <div><img src={photo} alt="profilePicture"/></div>
      </section>
    </main>
      
    </div>
  )
}

export default App

/*
            <li><a href="https://github.com/elixper">Github</a></li>
            <li><a href="#">Calendly</a></li>
            <li><a href="https://www.linkedin.com/in/ludwig-pereira/">Linkedin</a></li>
            <li><a href="#">Email</a></li>*/
