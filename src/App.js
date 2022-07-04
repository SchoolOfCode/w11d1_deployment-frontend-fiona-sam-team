import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
    hello it's me your looking for 
        </p>
        <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World! We are Fiona and Sam! This is our attempt automatically updating our deployed page! 
        </a>
      </header>
    </div>
  );
}

export default App;
