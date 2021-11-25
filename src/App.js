import './App.css';
import Button from './shared/components/FormElements/Button';

function App() {
  return (
    <div className="App">
      <h1 className="welcome-message">Hello, I'm Alfie!</h1>
      <h2 className="blurb">I am developping web apps. I'm always learning.</h2>
      <hr className="divider"/>
      <Button href="https://github.com/awolfen" new>GitHub</Button>
      <Button href="https://www.linkedin.com/in/alfie-wolfenden/" new>LinkedIn</Button>
      <Button href="https://mern-awolfen.web.app/" new>Mern Demo</Button>
    </div >
  );
}

export default App;
