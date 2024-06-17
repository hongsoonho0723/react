import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Result from "./pages/search/Result";
function App() {
  return (


    <div>
      <Container>
        <Routes>
            <Route path="/result/:keyword" element={<Result/>} />
          </Routes>
        <Footer/>
      </Container>


      </div>
  );
}

export default App;
