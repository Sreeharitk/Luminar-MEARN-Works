import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/single-view/:id" element={<View/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
