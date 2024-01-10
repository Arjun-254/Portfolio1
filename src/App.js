import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Test } from "./pages/Test";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Next" element={<Landing />} />
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "",
        }}
        outerStyle={{
          border: "2px solid white",
        }}
      />
    </div>
  );
}
