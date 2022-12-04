
import Navbar from './components/Navbar';
import './App.css';
import Counter from './Counter';
import AllRoutes from './components/AllRoutes';


function App() {
  return (
    <div className="App">
     <h1>GitHub Repositories</h1>
     {/* <Counter/> */}
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
