import styled, { css } from "styled-components";

export const pageBox = css`
  width: 100%;
  flex-grow: 1;
  flex: 1;
`;

export const rowBox = css`
  display: flex;
  flex-direction: row;
`;

export const columnBox = css`
  display: flex;
  flex-direction: column;
`;

export const centerBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const childBox = css`
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.grey_40};
`;

export const subTitle = css`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.001em;
`;

export const smallDescription = css`
  color: ${(props) => props.theme.font.color.grey_50};
  font-size: ${(props) => props.theme.font.size.small};
`;

export const Row = styled.div<{
  $align?: "center" | "end" | "start";
  $space?: "around" | "between" | "evenly";
  $gap?: string;
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => $gap || "0"};
  align-items: ${({ $align }) => $align};
  ${({ $space }) => ($space ? `justify-content: $space-${$space}` : "")};
`;

export const Column = styled.div<{
  $align?: "center" | "end" | "start";
  $space?: "around" | "between" | "evenly";
  $gap?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || "0"};
  align-items: ${({ $align }) => $align};
  ${({ $space }) => ($space ? `justify-content: $space-${$space}` : "")};
`;

export const Glass = styled.div`
  border-radius: 6px;
  padding: 24px;
  background-color: white;
  box-shadow: 0px 0px 24px 0px #1018280d;
`;

export const glass = css`
  border-radius: 6px;
  padding: 24px;
  background-color: white;
  box-shadow: 0px 0px 24px 0px #1018280d;
`;
