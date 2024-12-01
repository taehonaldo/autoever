import styled from "styled-components";
import { pageBox } from "../styles/common.styled";

interface ContentsProps {
  children: JSX.Element;
}

const Contents = ({ children }: ContentsProps) => {
  return <ContentsWrapper>{children}</ContentsWrapper>;
};

const ContentsWrapper = styled.div`
  ${pageBox};
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--side-padding) var(--bottom-padding);

  position: relative;
`;

export default Contents;
