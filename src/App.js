import "./App.css";
// import './components/Home'
// import Home from './components/Home';

//Routes
import Home from "./components/Home";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";
import Axios from "./components/Axios";

function App() {
  return (
    // <div className="App">
    //   <Home></Home>
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="axios" element={<Axios />} />
    </Routes>
  );
}

export default App;
