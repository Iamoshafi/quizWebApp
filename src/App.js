import "./App.css";
// import './components/Home'
// import Home from './components/Home';

//Routes
import Home from "./components/Home";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Home></Home>
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
