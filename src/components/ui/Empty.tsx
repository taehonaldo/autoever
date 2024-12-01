import styled from "styled-components";
import { centerBox, columnBox } from "../../styles/common.styled";
import emptyLogo from "../../assets/icons/ic_nodata.svg";

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

const Empty = ({ text, ...props }: EmptyProps) => {
  return (
    <ComponentWrapper {...props}>
      <img src={emptyLogo} alt="empty logo" />
      <span>{text}</span>
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.div`
  ${centerBox}
  ${columnBox}
  width: 100%;
  height: 100%;
  padding: var(--space-box2) 0;
  color: var(--gray-500);

  gap: var(--space-xsm2);

  img {
    width: var(--ic-xlg2);
    height: var(--ic-xlg2);
  }
`;

export default Empty;
