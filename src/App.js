import Header from './component/Header';
import './styles/App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Details from './pages/Details';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/search/:value" element={<Search />} />
          <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
