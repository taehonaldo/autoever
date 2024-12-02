import styled from "styled-components";
import { pageBox } from "../styles/common.styled";

interface ContentsProps {
  children: React.ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
  return (
    <ContentsWrapper>
      <ContentsContainer>{children}</ContentsContainer>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  ${pageBox};
  padding: 0 var(--side-padding) var(--bottom-padding);
`;

const ContentsContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

export default Contents;
