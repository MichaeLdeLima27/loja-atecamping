import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import GlobalStyle from "./styles/global";
import Home from "./pages/Home/Home";
import TodosProdutos from "./pages/TodosProdutos/TodosProdutos";

function App() {
useEffect(() => {
AOS.init({
duration: 800, // duração das animações
once: true,    // animação apenas uma vez
});
}, []);

return (
<> <GlobalStyle /> <Router> <Routes>
<Route path="/" element={<Home />} />
<Route path="/produtos" element={<TodosProdutos />} /> </Routes> </Router>
</>
);
}

export default App;
