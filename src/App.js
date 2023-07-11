import React, { useState }  from "react";
import styled from "styled-components";

import Header from "./components/Header"
import Center from "./components/Center"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar";

const ContentsContainer = styled.div`
    display: flex;
    margin-top: 60px;
    margin-bottom: 60px;
    height: calc(100vh - 120px);
`

function App() {
  const [page, setPage] = useState(1);

  function handlePageChange(num) {
    setPage(page+num);
  };

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <Header />
      <ContentsContainer>
        <Sidebar page={page} />
        <Center handlePageChange={handlePageChange} />
      </ContentsContainer>
      <Footer />
    </div>
  );
}

export default App;
