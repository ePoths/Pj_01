import Home from "./routes/Home";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie" element={<Detail />} />
    </Routes>
  );
}

export default App;
