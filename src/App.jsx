import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Moviedetail from "./components/MovieDetail/moviedetail";
import Pagenotfound from "./components/Pagenotfound/pagenotfound";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/movies/:imdbID" Component={Moviedetail} />
            <Route path="*" Component={Pagenotfound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
