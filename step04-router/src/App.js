import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const navigate = useNavigate();
  const btnClick1 = () => {
    //기능

    //컴포넌트 랜더링
    navigate("/user/" + 50);
  };

  const btnClick2 = () => {
    //기능
    navigate("/admin");
  };

  const btnClick3 = () => {
    //기능
    navigate(-1); //뒤로가기
  };

  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/user"}>User</Link>
      <Link to={"/admin"}>Admin</Link>
      <hr />
      <a href="/">HOME</a>
      <a href="/user">User</a>
      <a href="/admin">Admin</a>

      <hr />

      <button onClick={btnClick1}>user로 이동</button>
      <button onClick={btnClick2}>Admin로 이동</button>
      <button onClick={btnClick3}>goBack</button>

      <h3>어떤 컴포넌트가 랜더링되어도 전 항상나와요~</h3>
      {/* header footer 같은 모든 페이지가 동일할때 사용할수있다 */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id/:pwd" element={<User />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/" element={<User />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <footer>
        작성자 : 홍순호
        <br />
        순호
      </footer>
    </>
  );
}

export default App;
