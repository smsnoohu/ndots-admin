import styled from "styled-components";

import Header from "Components/header";
import Login from "Pages/login";

function App() {
  return (
    <Wrapper>
      <Header />
      <Login />
    </Wrapper>
  );
}

const Wrapper = styled.div({});

export default App;
