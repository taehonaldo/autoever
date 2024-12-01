import { Route, Routes } from "react-router";
import { routes } from "./routes";
import Header from "./layouts/Header";
import { columnBox } from "./styles/common.styled";
import styled from "styled-components";
import Contents from "./layouts/Contents";
import Footer from "./layouts/Footer";
import Reactions from "./layouts/Reactions";
import Processes from "./layouts/Processes";
import Spacing from "./components/ui/Spacing";
import StoreLink from "./layouts/StoreLink";
import FAB from "./layouts/FAB";
import { useRef, useState } from "react";

const App = () => {
  const [useFullScreen, setUseFullScreen] = useState<boolean>(false);
  const $footer = useRef<HTMLDivElement | null>(null);

  return (
    <AppContainer $useFullScreen={useFullScreen}>
      <Header
        useFullScreen={useFullScreen}
        setUseFullScreen={setUseFullScreen}
      />
      <Contents>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Title>서비스 문의</Title>
        <Reactions />
        <Title>이용 프로세스 안내</Title>
        <Processes />
        <Spacing size={48} />
        <StoreLink />
      </Contents>
      <FAB />
      <Footer ref={$footer} />
    </AppContainer>
  );
};

const AppContainer = styled.div<{ $useFullScreen: boolean }>`
  ${columnBox};
  width: 100%;
  min-height: 100vh;
  height: 100vh;

  ${(props) => {
    if (props.$useFullScreen) {
      return `
        overflow-y: hidden;
        overflow-x: visible;
      `;
    }
  }}
  /* overflow-x: visible;
  overflow-y: ${(props) => (props.$useFullScreen ? "hidden" : "auto")}; */
  height: ${(props) => (props.$useFullScreen ? "100vh" : "auto")};
`;

const Title = styled.div`
  font-size: var(--heading-2);
  font-weight: bold;
  margin: var(--heading-2-margin);
`;

export default App;
