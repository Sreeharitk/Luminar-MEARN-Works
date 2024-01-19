import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import History from "./pages/History";
import CatUpdate from "./pages/CatUpdate";

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/main" element={<MainPage/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/catupdate" element={<CatUpdate/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
