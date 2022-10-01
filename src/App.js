import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/home";

function App() {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <BrowserRouter>
      {showLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
