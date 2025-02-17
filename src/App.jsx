import "./App.css";
import Navbar from "./components/common/switchbar/Switchbar";
import Home from "./pages/home/Home";
import { useScrollSpy } from "./utils/useScrollSpy";
import LanguageSwitch from './components/common/LanguageSwitch';
import './i18n';

function App() {
  useScrollSpy();

  return (
    <div className="app">
      <LanguageSwitch />
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
