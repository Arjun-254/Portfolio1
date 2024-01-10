import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Test } from "./pages/Test";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          // <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
