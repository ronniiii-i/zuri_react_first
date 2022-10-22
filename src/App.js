import './App.css';
import Profile from './components/Profile'
import Links from './components/Links'
import Socials from './components/Socials'

function App() {
  return (
    <>
      <main>
        <Profile />
        <Links />
        <Socials />
      </main>
      <footer>
        <p>HNG Internship 9 Frontend Task</p>
      </footer>
    </>
  );
}

export default App;
