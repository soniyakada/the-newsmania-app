
import React from "react";
import Newspaper from "./components/Newspaper";
import Notes from "./components/Notes"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Caption from "./components/Caption";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-800">
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Caption/>} />
          <Route path="/newspaper" element={<Newspaper />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/search" element={<Dictionary/>} />
        </Routes>
      </div>
    </Router>
  </div>
  )
}

export default App
