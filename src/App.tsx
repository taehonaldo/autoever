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
import { useRef } from "react";

const App = () => {
  const $footer = useRef<HTMLDivElement | null>(null);

  return (
    <AppContainer>
      <Header />
      <Contents>
        <>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
          <Title>서비스 문의</Title>
          <Reactions />
          <Title>이용 프로세스 안내</Title>
          <Processes />
          <Spacing size={48} />
          <StoreLink />
        </>
      </Contents>
      <Footer ref={$footer} />
      <FAB footerElement={$footer.current} />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  position: relative;
  ${columnBox};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Title = styled.div`
  font-size: var(--heading-2);
  font-weight: bold;
  margin: var(--heading-2-margin);
`;

export default App;
