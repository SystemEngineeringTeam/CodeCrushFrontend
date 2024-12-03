import "./App.css";
import { Title } from "./pages/Title/index";
import { Answer } from "./pages/Answer/index";
import { Delete } from "./pages/Delete/index";
import { Fix } from "./pages/Fix/index";
import { Read } from "./pages/Read/index";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MemoProvider } from "./contexts/MemoContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/read">Read</Link>
        <Link to="/fix">Fix</Link>
        <MemoProvider>
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/answer" element={<Answer />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/fix" element={<Fix />} />
            <Route path="/read" element={<Read />} />
            <Route path="*" element={<h1>Not Found Page</h1>} />
          </Routes>
        </MemoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
