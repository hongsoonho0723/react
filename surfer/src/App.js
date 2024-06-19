import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/search/Search";
function App() {
  return (


    <div>
      <Container>
        <Routes>
            <Route path="/search/:keyword" element={<Search/>} />
          </Routes>
        <Footer/>
      </Container>


      </div>
  );
}

export default App;
