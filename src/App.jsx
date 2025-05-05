import "./css/App.css";
import "./css/frame.css";
// import "./css/index.css";
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import 'bulma-slider/dist/css/bulma-slider.min.css';
import MovieDetails from "./pages/MoviePage";
import Home from "./pages/Home";
import Motivation from "./components/Motivation.jsx";
import Project from "./pages/Project";
import { Routes, Route} from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";


function App() {
  return (
      // <HashRouter>
    <MovieProvider>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/home" element={<Motivation />} />
          <Route path="/demo" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </MovieProvider>
      // </HashRouter>
  );
}

export default App;
