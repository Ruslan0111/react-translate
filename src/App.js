import "./reset.css";
import "./index.css";
import BaseHeader from "./components/BaseHeader";
import MainTop from "./components/MainTop";
import MainCards from "./components/MainCards";

function App() {
  return (
    <div className="app">
      <BaseHeader />
      <MainTop />
      <MainCards />
    </div>
  );
}

export default App;
