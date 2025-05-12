import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import store from "./redux/store";
import "animate.css";
import { Contact } from "./pages/Home/Contact";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
