import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Individual from "./pages/individualPage/page/Individual";
import Home from "./pages/landingPage/page/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/individual/:person" element={<Individual />} />
      </Routes>
    </Router>
  );
}

export default App;
