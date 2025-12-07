import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/Home";
import TodosProdutos from "./pages/TodosProdutos/TodosProdutos";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<TodosProdutos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
