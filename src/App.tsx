import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Organisms/Header/Header";
import MainContainer from "./Components/Organisms/MainContent/Main";
import Footer from "./Components/Organisms/Footer/Footer";
import Features from "./Components/Atoms/RoutePages/Features";
import Team from "./Components/Atoms/RoutePages/Team";
import SignIn from "./Components/Atoms/RoutePages/SignIn";

function App() {
  return (
    <>
      <Router>
        <div className="w-full h-full">
          <Header />
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <MainContainer />
                  <Footer />
                </>
              }
            />
            <Route path={"/features"} element={<Features />} />
            <Route path={"/team"} element={<Team />} />
            <Route path={"/signin"} element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
