import styled from "styled-components";
import { centerBox, columnBox } from "../styles/common.styled";

interface PageTitleProps {
  title: string;
  description: string;
}

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <ComponentWrapper>
      <Title>{title}</Title>
      <Desciption>{description}</Desciption>
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.div`
  ${columnBox}
  ${centerBox}
  width: 100%;
  height: var(--h1-height);
  line-height: var(--line-height-sm);
`;

const Title = styled.h1`
  font-size: var(--h1-fsize);
  margin: 0;
`;

const Desciption = styled.span`
  font-size: var(--h1-fsize-sm);
  margin-top: 0.4em;
`;

export default PageTitle;
