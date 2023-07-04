import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import styled from "styled-components";

import SearchBar from "./components/SearchBar";
import "./App.css";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App: React.FC = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Google search clone</h1>
      <div className="card">
        <AppContainer>
          <SearchBar />
        </AppContainer>
      </div>
    </>
  );
};

export default App;
