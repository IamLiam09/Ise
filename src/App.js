import "./index.scss"
import './App.css';
import logo from '../src/assest/Logo(standalone).png'
function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <div className='logo'>
          <img src={logo} alt={logo} className="img"/>
        </div>
        <div className='_links'>
          <a href='#'>Home</a>
          <a href='#'>Post a job</a>
          <a href='#'>Blog</a>
        </div>
        <button className='login'>Login</button>
      </nav>
      <section className='Homepage'>
        <div className='topwording'><b>1000+</b> Job listed here</div>
        <b className='openingtext'>JOB SEARCH FOR AFRICANS</b>
        <b className='openingtext'>Connection talent build resources</b>
        <p className='openingtext'><span className='compyellow'>Ise</span>is a job search for people with passion</p>
        <div className='searchbox'>
          <input className="Jobtitle"></input>
          <input className="location"></input>
          <button className='Yellowsearch'><b>Search</b></button>
        </div>
      </section>
    </div>
  )
}

export default App;
