import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NftViewer from "./Components/NftViewer";
import Home from "./Components/Home";
import Minting from "./Components/Minting";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <Minting />
              </>
            }
          ></Route>
          {/* <Route path="/nftviewer" element={<NftViewer />} /> */}
          {/* <Route path="/mint" element={<Minting />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
