import logo from './logo.svg';
import './App.css';

let name = "admin";
let role =" full stack developer"
let work = "<h1> website desing </h1>"


function App() {
  return (
    <>
    <nav className="nav">
      <li>home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>hello {name}</h1>
      <h2>profession{role}</h2>
      <h3>{work}</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam suscipit molestias blanditiis repudiandae laudantium sit, porro fugit vitae, est deserunt voluptates id aliquid ea harum incidunt! Suscipit mollitia odio incidunt!</p>
    </div>
    
    </>
  );
}

export default App;
