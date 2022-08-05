import Home from "./pages/Home";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResourcePage from "./pages/ResourcePage";

const Body = styled.div`
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource/:id" element={<ResourcePage />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default App;
