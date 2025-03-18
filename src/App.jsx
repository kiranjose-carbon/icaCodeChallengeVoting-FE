import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import MovieList from "./components/MovieList/MovieList";
import VotingForm from "./components/VotingForm/VotingForm";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Voting Application</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/voting-form" element={<VotingForm />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
