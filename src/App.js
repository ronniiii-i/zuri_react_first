import './App.css';
import './styles/prestyles.css';
import './styles/contact.css';
import Main from './components/Main'
import Contact from './components/Contact'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
