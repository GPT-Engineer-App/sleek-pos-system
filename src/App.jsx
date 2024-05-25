import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MenuItemList from "./pages/MenuItemList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/menu" element={<MenuItemList />} />
      </Routes>
    </Router>
  );
}

export default App;
