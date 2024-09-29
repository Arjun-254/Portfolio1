import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { OpeningPage } from "./pages/OpeningPage";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/Next" element={<Landing />} />
          <Route path="/" element={<OpeningPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
